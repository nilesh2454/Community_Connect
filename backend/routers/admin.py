from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from .. import database
from ..models import user as user_model
from ..schemas import user_schema
from .auth import get_current_user

router = APIRouter(prefix="/admin", tags=["Admin"])

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

def check_admin(current_user: user_model.User = Depends(get_current_user)):
    if not current_user.is_admin:
        raise HTTPException(status_code=403, detail="Not authorized")
    return current_user

@router.get("/users", response_model=List[user_schema.UserResponse])
def list_all_users(db: Session = Depends(get_db), admin: user_model.User = Depends(check_admin)):
    return db.query(user_model.User).all()

@router.delete("/users/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_user(user_id: int, db: Session = Depends(get_db), admin: user_model.User = Depends(check_admin)):
    user = db.query(user_model.User).filter(user_model.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    db.delete(user)
    db.commit()
    return None
