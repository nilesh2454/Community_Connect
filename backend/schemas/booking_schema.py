from pydantic import BaseModel
from pydantic import ConfigDict

class BookingBase(BaseModel):
    user_id: int
    service_id: int
    status: str = "pending"

class BookingResponse(BookingBase):
    id: int

    model_config = ConfigDict(from_attributes=True)
