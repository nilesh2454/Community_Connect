# backend/core/config.py
import os
from dotenv import load_dotenv

# Load .env variables
load_dotenv()

class Settings:
    PROJECT_NAME: str = "Community Connect"
    DATABASE_URL: str = os.getenv("DATABASE_URL")
    SECRET_KEY: str = os.getenv("SECRET_KEY", "change_me")
    ALGORITHM: str = os.getenv("ALGORITHM", "HS256")

settings = Settings()
