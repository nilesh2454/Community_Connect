import sys
import os

# Ensure project root is in path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from backend.database import Base, engine
from backend.models import user, service, booking, review
from backend.core.seed import seed_data

def recreate_database():
    print("Dropping all tables...")
    Base.metadata.drop_all(bind=engine)
    
    print("Creating all tables with new schema...")
    Base.metadata.create_all(bind=engine)
    
    print("Seeding initial data...")
    try:
        seed_data()
        print("Data seeded successfully.")
    except Exception as e:
        print(f"Warning: Seeding failed: {e}")

    print("Database update complete!")

if __name__ == "__main__":
    recreate_database()
