from pydantic import BaseModel
from pydantic import ConfigDict

class ServiceBase(BaseModel):
    name: str
    category: str
    description: str
    price: float

class ServiceCreate(ServiceBase):
    provider_id: int

class ServiceResponse(ServiceBase):
    id: int
    provider_id: int

    model_config = ConfigDict(from_attributes=True)
