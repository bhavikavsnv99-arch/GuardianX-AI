from pydantic import BaseModel


class EmergencyRequest(BaseModel):
    message: str