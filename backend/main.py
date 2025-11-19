from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .core.seed import seed_data
from .database import Base, engine
from .routers import auth, services, bookings, reviews

Base.metadata.create_all(bind=engine)
seed_data()

app = FastAPI(title="Community Connect App")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(services.router)
app.include_router(bookings.router)
app.include_router(reviews.router)
