from pydantic import BaseModel
from pydantic import ConfigDict

class ReviewBase(BaseModel):
    service_id: int
    user_id: int
    rating: int
    comment: str

class ReviewResponse(ReviewBase):
    id: int

    model_config = ConfigDict(from_attributes=True)
