from fastapi import APIRouter
from schemas.interpolation_schema import InterpolationSchema
from controllers.interpolation_controller import solve_divided_differences

router = APIRouter()

@router.post("/interpolation")
def interpolation_endpoint(data: InterpolationSchema):
  return solve_divided_differences(data)