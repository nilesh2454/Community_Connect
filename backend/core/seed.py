"""Utility to seed demo data for local development."""

from sqlalchemy.orm import Session

from ..database import SessionLocal
from ..models import service as service_model
from ..models import user as user_model
from .security import hash_password


def _get_or_create_user(
    db: Session,
    *,
    email: str,
    username: str,
    password: str,
    is_provider: bool = False,
) -> user_model.User:
    user = db.query(user_model.User).filter(user_model.User.email == email).first()
    if user:
        return user

    user = user_model.User(
        email=email,
        username=username,
        password=hash_password(password),
        is_provider=is_provider,
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


def _ensure_service(
    db: Session,
    *,
    name: str,
    category: str,
    description: str,
    price: float,
    provider_id: int,
) -> service_model.Service:
    service = db.query(service_model.Service).filter(service_model.Service.name == name).first()
    if service:
        return service

    service = service_model.Service(
        name=name,
        category=category,
        description=description,
        price=price,
        provider_id=provider_id,
    )
    db.add(service)
    db.commit()
    db.refresh(service)
    return service


def seed_data() -> None:
    """Populate the database with a minimal set of demo data."""
    db = SessionLocal()
    try:
        provider = _get_or_create_user(
            db,
            email="provider@example.com",
            username="provider",
            password="providerpass",
            is_provider=True,
        )

        _get_or_create_user(
            db,
            email="customer@example.com",
            username="customer",
            password="customerpass",
            is_provider=False,
        )

        _ensure_service(
            db,
            name="General Home Repair",
            category="Home Services",
            description="Basic repair and maintenance assistance",
            price=75.0,
            provider_id=provider.id,
        )
    finally:
        db.close()

