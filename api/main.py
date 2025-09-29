from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import joblib
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os

# Create a FastAPI app
app = FastAPI()

# Load the trained model
# The model path is now relative to the project root
model_path = os.path.join(os.path.dirname(__file__), 'heslb_rf_model.pkl')
model = joblib.load(model_path)

# Define the input data model
class LoanApplication(BaseModel):
    Citizenship: int
    Admission_Status: int
    Outstanding_Loans: int
    Academic_Performance: float
    Field_of_Study: str
    Year_of_Study: int
    Family_Income: float
    Number_of_Dependents: int
    Orphan: int
    Parents_Disability: int

@app.post('/api/predict')
def predict(data: LoanApplication):
    # Convert input data to a pandas DataFrame
    input_data = pd.DataFrame([data.dict()])

    # Step 1: Generate dummy variables for all categories
    input_data = pd.get_dummies(input_data, columns=['Field_of_Study', 'Year_of_Study'])

    # Step 2: Drop the categories that were dropped during training
    # Assuming 'Business' and '1' were the first categories dropped
    columns_to_drop = ['Field_of_Study_Business', 'Year_of_Study_1']
    input_data = input_data.drop(columns=[col for col in columns_to_drop if col in input_data.columns], errors='ignore')

    # Step 3: Define the expected columns from training
    expected_columns = [
        'Citizenship', 'Admission_Status', 'Outstanding_Loans', 'Academic_Performance',
        'Family_Income', 'Number_of_Dependents', 'Orphan', 'Parents_Disability',
        'Field_of_Study_Health Sciences', 'Field_of_Study_Humanities', 'Field_of_Study_STEM',
        'Year_of_Study_2', 'Year_of_Study_3', 'Year_of_Study_4'
    ]

    # Add missing columns with 0
    for col in expected_columns:
        if col not in input_data.columns:
            input_data[col] = 0

    # Step 4: Reorder columns to match training data
    input_data = input_data[expected_columns]

    # Make prediction
    prediction = model.predict(input_data)[0]
    probability = model.predict_proba(input_data)[0][1]

    return {
        'eligibility': 'Eligible' if prediction == 1 else 'Not Eligible',
        'probability': float(probability)
    }

# Mount the static files directory
# This will serve the compiled React frontend
# The path is relative to where the server is run, which will be the project root
app.mount("/assets", StaticFiles(directory="frontend/dist/assets"), name="assets")

@app.get("/{full_path:path}")
async def serve_frontend(full_path: str):
    """
    Serve the frontend for any path that is not an API endpoint.
    """
    return FileResponse("frontend/dist/index.html")