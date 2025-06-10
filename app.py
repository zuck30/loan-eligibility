import streamlit as st
import pandas as pd
import joblib

# Load the trained model
model = joblib.load('heslb_rf_model.pkl')

# App title
st.title('HESLB Loan Eligibility Prediction')

# Input fields
citizenship = st.selectbox('Citizenship (1 = Tanzanian, 0 = Other)', [0, 1])
admission_status = st.selectbox('Admission Status (1 = Valid, 0 = Invalid)', [0, 1])
outstanding_loans = st.selectbox('Outstanding Loans (1 = Yes, 0 = No)', [0, 1])
academic_performance = st.slider('Academic Performance (GPA)', 0.0, 5.0, 2.5)
field_of_study = st.selectbox('Field of Study', ['STEM', 'Humanities', 'Business', 'Health Sciences'])
year_of_study = st.selectbox('Year of Study', [1, 2, 3, 4])
family_income = st.number_input('Family Income (TZS)', min_value=0.0)
number_of_dependents = st.number_input('Number of Dependents', min_value=0)
orphan = st.selectbox('Orphan (1 = Yes, 0 = No)', [0, 1])
parents_disability = st.selectbox('Parents Disability (1 = Yes, 0 = No)', [0, 1])
# Prepare input data (example input collection from Streamlit)
input_data = pd.DataFrame({
    'Citizenship': [citizenship],
    'Admission_Status': [admission_status],
    'Outstanding_Loans': [outstanding_loans],
    'Academic_Performance': [academic_performance],
    'Field_of_Study': [field_of_study],
    'Year_of_Study': [year_of_study],
    'Family_Income': [family_income],
    'Number_of_Dependents': [number_of_dependents],
    'Orphan': [orphan],
    'Parents_Disability': [parents_disability]
})

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
if st.button('Predict'):
    prediction = model.predict(input_data)[0]
    probability = model.predict_proba(input_data)[0][1]
    st.write(f'**Eligibility:** {"Eligible" if prediction == 1 else "Not Eligible"}')
    st.write(f'**Probability of Eligibility:** {probability:.2f}')