from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from .. import database
from ..models import booking as booking_model
from ..models import service as service_model
from ..models import user as user_model
from ..schemas import booking_schema

router = APIRouter(prefix="/bookings", tags=["Bookings"])

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post(
    "/",
    response_model=booking_schema.BookingResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_booking(booking: booking_schema.BookingBase, db: Session = Depends(get_db)):
    user = db.query(user_model.User).filter(user_model.User.id == booking.user_id).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
        )

    service = (
        db.query(service_model.Service)
        .filter(service_model.Service.id == booking.service_id)
        .first()
    )
    if not service:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Service not found"
        )

    new_booking = booking_model.Booking(**booking.dict())
    db.add(new_booking)

    try:
        db.commit()
    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Could not create booking due to invalid data",
        )

    db.refresh(new_booking)
    return new_booking

@router.get("/", response_model=list[booking_schema.BookingResponse])
def get_bookings(db: Session = Depends(get_db)):
    return db.query(booking_model.Booking).all()
