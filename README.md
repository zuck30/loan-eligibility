# HESLB Loan Eligibility Prediction App

This project provides a simple Streamlit web application for predicting Higher Education Students' Loans Board (HESLB) loan eligibility based on various student and financial parameters. It uses a pre-trained Random Forest model to make predictions.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Model Information](#model-information)
- [Contributing](#contributing)
- [License](#license)

## Description
The HESLB Loan Eligibility Prediction App helps students determine their likelihood of being eligible for a HESLB loan. Users provide inputs such as citizenship, academic performance, family income, and other relevant details, and the application outputs a prediction of "Eligible" or "Not Eligible" along with a probability score.

## Features
- **User-friendly Interface**: Built with Streamlit for an intuitive web interface.
- **Parameter Inputs**: Allows users to input various factors influencing loan eligibility.
- **Real-time Prediction**: Provides instant eligibility predictions upon submission.
- **Probability Score**: Shows the confidence level of the prediction.

## Project Structure
```
.
├── app.py
├── heslb_rf_model.pkl
└── requirements.txt
```
- `app.py`: The main Streamlit application script.
- `heslb_rf_model.pkl`: The pre-trained Random Forest model saved using joblib. This file is crucial for the application's functionality.
- `requirements.txt`: Lists all the Python dependencies required to run the application.

## Prerequisites
Before running this application, ensure you have:
- Python 3.7+
- pip (Python package installer)

## Installation
1. Clone the repository (if applicable) or download the files:
   ```bash
   git clone <repository_url>
   cd <project_directory>
   ```
   *(Note: Assuming you have `app.py`, `heslb_rf_model.pkl`, and `requirements.txt` in the same directory.)*

2. Create a virtual environment (recommended):
   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:
   - On Windows:
     ```bash
     .\venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

   The `requirements.txt` file should contain:
   ```
   streamlit
   pandas
   scikit-learn
   joblib
   ```

## Usage
1. Ensure all prerequisites are met and dependencies are installed.
2. Run the Streamlit application from your terminal:
   ```bash
   streamlit run app.py
   ```
3. Access the application:
   - After running the command, a new tab will automatically open in your web browser, displaying the Streamlit application (usually at `http://localhost:8501`).
4. Make predictions:
   - Fill in the input fields with the relevant student information.
   - Click the "Predict" button to see the eligibility status and probability.

## Model Information
The application utilizes a pre-trained Random Forest Classifier (`heslb_rf_model.pkl`) for making predictions. This model was trained on a dataset containing various student attributes and their corresponding HESLB loan eligibility status. The preprocessing steps, including one-hot encoding for categorical features and column reordering, are specifically handled within `app.py` to match the model's expected input format.

## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please feel free to open an issue or submit a pull request.

## License
This project is open-source and available under the MIT License.
