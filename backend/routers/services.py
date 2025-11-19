from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from .. import database
from ..models import service as service_model
from ..models import user as user_model
from ..schemas import service_schema

router = APIRouter(prefix="/services", tags=["Services"])

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post(
    "/",
    response_model=service_schema.ServiceResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_service(service: service_schema.ServiceCreate, db: Session = Depends(get_db)):
    provider = (
        db.query(user_model.User)
        .filter(user_model.User.id == service.provider_id)
        .first()
    )
    if not provider or not provider.is_provider:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Provider account is required to offer a service",
        )

    new_service = service_model.Service(**service.dict())
    db.add(new_service)
    db.commit()
    db.refresh(new_service)
    return new_service

@router.get("/", response_model=list[service_schema.ServiceResponse])
def list_services(db: Session = Depends(get_db)):
    return db.query(service_model.Service).all()
