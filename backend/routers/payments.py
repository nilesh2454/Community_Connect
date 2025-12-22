from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter(prefix="/payments", tags=["Payments"])

class PaymentRequest(BaseModel):
    amount: float
    currency: str = "USD"
    source: str
    description: str | None = None

class PaymentResponse(BaseModel):
    success: bool
    transaction_id: str
    message: str

@router.post("/process", response_model=PaymentResponse)
def process_payment(payment: PaymentRequest):
    # Mock payment processing
    if payment.amount <= 0:
        raise HTTPException(status_code=400, detail="Invalid amount")
    
    return {
        "success": True,
        "transaction_id": "mock_txn_123456789",
        "message": "Payment processed successfully"
    }
