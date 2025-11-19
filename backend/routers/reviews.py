from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from .. import database
from ..models import review as review_model
from ..models import service as service_model
from ..models import user as user_model
from ..schemas import review_schema

router = APIRouter(prefix="/reviews", tags=["Reviews"])

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post(
    "/",
    response_model=review_schema.ReviewResponse,
    status_code=status.HTTP_201_CREATED,
)
def add_review(review: review_schema.ReviewBase, db: Session = Depends(get_db)):
    if (
        db.query(user_model.User)
        .filter(user_model.User.id == review.user_id)
        .first()
        is None
    ):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

    if (
        db.query(service_model.Service)
        .filter(service_model.Service.id == review.service_id)
        .first()
        is None
    ):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Service not found")

    new_review = review_model.Review(**review.dict())
    db.add(new_review)
    db.commit()
    db.refresh(new_review)
    return new_review

@router.get("/", response_model=list[review_schema.ReviewResponse])
def list_reviews(db: Session = Depends(get_db)):
    return db.query(review_model.Review).all()
