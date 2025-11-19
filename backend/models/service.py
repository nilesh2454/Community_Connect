from sqlalchemy import Column, Integer, String, Float, ForeignKey
from ..database import Base

class Service(Base):
    __tablename__ = "services"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    category = Column(String, nullable=False)
    description = Column(String)
    price = Column(Float)
    provider_id = Column(Integer, ForeignKey("users.id"))
