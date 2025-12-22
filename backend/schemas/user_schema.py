from pydantic import BaseModel
from pydantic import ConfigDict

class UserBase(BaseModel):
    username: str
    email: str
    is_provider: bool = False
    is_admin: bool = False
    phone: str | None = None
    address: str | None = None
    bio: str | None = None

class UserCreate(UserBase):
    password: str

class UserUpdate(BaseModel):
    phone: str | None = None
    address: str | None = None
    bio: str | None = None

class UserResponse(UserBase):
    id: int

    model_config = ConfigDict(from_attributes=True)


class UserLogin(BaseModel):
    email: str
    password: str
