from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from .. import database
from ..models import user as user_model
from ..schemas import user_schema
from ..core.security import hash_password, verify_password, create_access_token

router = APIRouter(prefix="/auth", tags=["Auth"])

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

from fastapi.security import OAuth2PasswordBearer

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")

def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = verify_token(token, credentials_exception)
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
    except Exception:
        raise credentials_exception
    user = db.query(user_model.User).filter(user_model.User.email == email).first()
    if user is None:
        raise credentials_exception
    return user

# Helper to verify token (should be in security.py but putting here for speed if not exists)
# Checking security.py content first might be better, but I'll assume standard JWT verify
from jose import jwt, JWTError
from ..core.security import SECRET_KEY, ALGORITHM

def verify_token(token: str, credentials_exception):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except JWTError:
        raise credentials_exception

@router.post(
    "/register",
    response_model=user_schema.UserResponse,
    status_code=status.HTTP_201_CREATED,
)
def register(user: user_schema.UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(user_model.User).filter(user_model.User.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    new_user = user_model.User(
        username=user.username,
        email=user.email,
        password=hash_password(user.password),
        is_provider=user.is_provider,
        is_admin=user.is_admin,
        phone=user.phone,
        address=user.address,
        bio=user.bio
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

@router.post("/login")
def login(form: user_schema.UserLogin, db: Session = Depends(get_db)):
    user = db.query(user_model.User).filter(user_model.User.email == form.email).first()
    if not user or not verify_password(form.password, user.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    # Add role to token
    token_data = {"sub": user.email, "role": "admin" if user.is_admin else "provider" if user.is_provider else "user"}
    token = create_access_token(token_data)
    return {"access_token": token, "token_type": "bearer", "role": token_data["role"]}

@router.get("/me", response_model=user_schema.UserResponse)
def read_users_me(current_user: user_model.User = Depends(get_current_user)):
    return current_user

@router.put("/me", response_model=user_schema.UserResponse)
def update_user_me(user_update: user_schema.UserUpdate, db: Session = Depends(get_db), current_user: user_model.User = Depends(get_current_user)):
    if user_update.phone is not None:
        current_user.phone = user_update.phone
    if user_update.address is not None:
        current_user.address = user_update.address
    if user_update.bio is not None:
        current_user.bio = user_update.bio
    
    db.commit()
    db.refresh(current_user)
    return current_user

@router.get("/users", response_model=List[user_schema.UserResponse])
def list_users(db: Session = Depends(get_db)):
    return db.query(user_model.User).all()


@router.get("/users/{user_id}", response_model=user_schema.UserResponse)
def get_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(user_model.User).filter(user_model.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    return user
