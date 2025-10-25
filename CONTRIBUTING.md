# Contributing to Loan Eligibility Prediction Model.

Thank you for your interest in contributing to the **Loan Eligibility Prediction Model**! This model helps Tanzanian students predict their eligibility for Higher Education Students' Loans Board (HESLB) loans using a Random Forest model. Your contributions can enhance its accuracy, usability, and impact for students across Tanzania.Either you're improving the model, adding features, or enhancing documentation, we value your efforts!

## How to Contribute

Follow these steps to contribute to the project:

### 1. Fork the Repository
- Navigate to the [Loan Eligibility Prediction App repository](https://github.com/zuck30/loan-eligibility) on GitHub.
- Click the **Fork** button to create a copy under your GitHub account.

### 2. Clone Your Fork
- Clone your forked repository to your local machine:
  ```bash
  git clone https://github.com/zuck30/loan-eligibility.git
  cd loan-eligibility
  ```

### 3. Create a Feature Branch
- Create a new branch for your feature or bug fix:
  ```bash
  git checkout -b feature/YourFeatureName
  ```
- Use descriptive branch names, e.g., `feature/add-income-validation` or `bugfix/fix-ui-layout`.

### 4. Set Up the Development Environment
- Ensure you have the prerequisites:
  - **Python 3.7+**
  - **pip** (Python package installer)
- Create a virtual environment:
  ```bash
  python -m venv venv
  ```
  - Windows: `.\venv\Scripts\activate`
  - macOS/Linux: `source venv/bin/activate`
- Install dependencies:
  ```bash
  pip install -r requirements.txt
  ```
- Run the app locally:
  ```bash
  streamlit run app.py
  ```
- Access the app at [http://localhost:8501](http://localhost:8501).

### 5. Make Your Changes
- Work on your feature, bug fix, or documentation improvement.
- Follow the project’s coding style:
  - **Python**: Adhere to **PEP 8** for code formatting.
  - **Streamlit**: Use clear, modular components for UI elements.
  - **Machine Learning**: Ensure compatibility with the Random Forest model (`heslb_rf_model.pkl`).
  - **Documentation**: Update `README.md` or add inline comments for new features.
- Test your changes locally using the Streamlit interface.

### 6. Commit Your Changes
- Write clear, concise commit messages:
  ```bash
  git commit -m "Add validation for family income input"
  ```
- Describe *what* was changed and *why* in the message.

### 7. Push to Your Fork
- Push your changes to your forked repository:
  ```bash
  git push origin feature/YourFeatureName
  ```

### 8. Open a Pull Request
- Go to the [Loan Eligibility Prediction App repository](https://github.com/zuck30/loan-eligibility).
- Click **New Pull Request** and select your branch.
- Provide a detailed description, including:
  - What you changed and why.
  - Relevant issue numbers (e.g., `Fixes #123`).
  - Screenshots of UI changes or prediction results.
- Submit the pull request for review.

##  Code Review Process
- Maintainers will review your pull request promptly.
- Be open to feedback and make requested changes if needed.
- Once approved, your changes will be merged into the main branch.

## 🐛 Reporting Bugs
- Check the [Issues](https://github.com/zuck30/loan-eligibility/issues) page to ensure the bug hasn’t been reported.
- Open a new issue with:
  - A clear title and description.
  - Steps to reproduce the bug.
  - Expected vs. actual behavior.
  - Screenshots or prediction outputs.
  - Your environment (e.g., OS, Python version).

## 💡 Suggesting Features
- Open an issue with the `enhancement` label.
- Describe the feature, its benefits, and possible implementation.
- Include examples, mock UI designs, or sample prediction outputs.

## Coding Guidelines
- **Python**:
  - Use type hints for better code clarity.
  - Write modular, reusable code.
- **Streamlit**:
  - Organize UI components logically (e.g., separate input forms and results).
  - Ensure responsive design for mobile and desktop.
- **Machine Learning**:
  - Maintain compatibility with the Random Forest model’s input format.
  - Document any changes to preprocessing or model retraining.
- **General**:
  - Add unit tests for new features (place in `tests/` directory).
  - Update documentation for new features or changes.
  - Keep code comments clear and concise.

## 🛠️ Areas for Contribution
- **Model Improvements**: Enhance the Random Forest model with new features or better preprocessing.
- **UI Enhancements**: Add input validation, better styling, or Swahili language support to the Streamlit app.
- **New Features**: Add visualizations (e.g., eligibility probability charts) or exportable reports.
- **Tests**: Write unit tests for input validation or prediction logic using `pytest`.
- **Documentation**: Improve README, add usage tutorials, or create a FAQ for students.

## 📞 Getting Help
- If you have questions, open an issue or contact the maintainer at [mwalyangashadrack@gmail.com](mailto:mwalyangashadrack@gmail.com).
- Engage with the community via GitHub Discussions (if available).

## 🙏 Acknowledgments
Thank you for contributing to the **Loan eligibility repo**! Your efforts help Tanzanian students make informed decisions about their education funding. Let’s empower the next generation together!