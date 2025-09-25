import os
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import joblib
from fastapi.responses import FileResponse

# Create a FastAPI app
app = FastAPI()

# Add CORS middleware for development
# This will allow the frontend dev server to talk to the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Allow frontend dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Load the trained model
model = joblib.load('heslb_rf_model.pkl')

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

@app.post('/predict')
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

# Serve the frontend only in production
# Check if the 'frontend/dist' directory exists
if os.path.exists('frontend/dist'):
    app.mount('/assets', StaticFiles(directory='frontend/dist/assets'), name='assets')

    @app.get("/")
    async def read_index():
        return FileResponse('frontend/dist/index.html')

    @app.get("/{catchall:path}")
    async def read_catchall(catchall: str):
        # This is to make sure that the frontend routing works
        return FileResponse('frontend/dist/index.html')
