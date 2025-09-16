<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=30&duration=4000&pause=1000&color=43CEA2&center=true&vCenter=true&width=500&height=70&lines=Loan+Eligibility;Random+Forest+Model;Built+by+Zuck30" alt="Typing Animation" />
</div>

![Banner](https://capsule-render.vercel.app/api?type=venom&height=200&color=0:43cea2,100:185a9d&text=%20Loan%20Eligibility%20Prediction&textBg=false&desc=(Tanzania)&descAlign=79&fontAlign=50&descAlignY=70&fontColor=f7f5f5)

<p align="center">A web app for predicting loan eligibility for Tanzanian students using a Random Forest model. Built by <strong><a href="https://github.com/zuck30">Zuck30</a></strong> from <strong><a href="https://www.google.com/travel/things-to-do?dest_src=ut&dest_mid=%2Fm%2F0htfv">Tanzania</a></strong>.</p>

<h3>Quick Links</h3>
<div align="left">
    <a href="mailto:mwalyangashadrack@gmail.com"><img src="https://img.shields.io/badge/Mail%20me-30302f?style=flat-square&logo=gmail" alt="Email"></a>
    <a href="https://sheddysilicon.netlify.app"><img src="https://img.shields.io/badge/Portfolio-30302f?style=flat-square&logo=firefox" alt="Portfolio"></a>
    <a href="https://github.com/zuck30/loan-eligibility"><img src="https://img.shields.io/badge/Repository-30302f?style=flat-square&logo=github" alt="GitHub"></a>
</div>

<br>
<a href="https://github.com/zuck30/loan-eligibility"> <img src="https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif" width="40%" align="right" style="border-radius:10px; animation: float 6s ease-in-out infinite;" alt="Coding GIF">
</a>

<ul>
    <li>🔭 Predicts <a href="https://www.heslb.go.tz">HESLB</a> loan eligibility for Tanzanian students.</li>
    <li>👨‍💻 Built with React and FastAPI for a modern, user-friendly experience.</li>
    <li>📊 Provides real-time predictions with probability scores.</li>
</ul>

<h2 id="skills">Skills & Technologies</h2>

**Frontend & Backend**
![ends](https://skillicons.dev/icons?i=js,css,html,python,react,vite,fastapi&perline=10)

**Machine Learning**
![ML](https://skillicons.dev/icons?i=scikitlearn&perline=10)

**Tools**
![tools](https://skillicons.dev/icons?i=git,github,vscode&perline=10)

<h2>Project Overview</h2>

**Loan eligibility** is a web application designed to help Tanzanian students assess their eligibility for Higher Education Students' Loans Board (HESLB) loans. Users input details like citizenship, academic performance, and family income, and a pre-trained Random Forest model predicts eligibility with a confidence score.

- **Intuitive Interface**: React-powered form for easy input.
- **Real-Time Predictions**: Instant results with "Eligible" or "Not Eligible" status.
- **Probability Scores**: Shows confidence in the prediction.
- **Tanzanian Focus**: Tailored for HESLB’s loan criteria.

<h2>Quick Start</h2>

### Prerequisites
- Python 3.7+
- Node.js and npm
- pip (Python package installer)

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/zuck30/heslb-loan-prediction.git
   cd heslb-loan-prediction
   ```

2. **Backend Setup**:
   ```bash
   # Create a virtual environment
   python -m venv venv
   # Activate it
   # Windows: .\\venv\\Scripts\\activate
   # macOS/Linux: source venv/bin/activate
   # Install dependencies
   pip install -r backend/requirements.txt
   ```

3. **Frontend Setup**:
    ```bash
    cd frontend
    npm install
    cd ..
    ```

<h2>Local Development</h2>

To run the application locally, you will need to run the backend and frontend servers in separate terminals.

**1. Run the Backend Server:**
```bash
# From the project root
cd backend
uvicorn main:app --reload --port 8001
```
The backend server will be running at `http://localhost:8001`.

**2. Run the Frontend Server:**
```bash
# From the project root, in a new terminal
cd frontend
npm run dev
```
The frontend development server will be running at `http://localhost:5173`. Open this URL in your browser to use the application.

<h2>🚀 Deployment</h2>

This application is ready to be deployed on Render.

### Render Configuration

-   **Build Command**: `./build.sh`
-   **Start Command**: `gunicorn -w 4 -k uvicorn.workers.UvicornWorker backend.main:app`


<h2>☕️ Support the Project</h2>
<p>
    <a href="https://www.buymeacoffee.com/zuck30" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" height="30px"></a>
</p>

<h2>🤝 Contributing</h2>

We welcome contributions to improve predictions and usability! See the [CONTRIBUTING.md](CONTRIBUTING.md) file for details.

<h2>📄 License</h2>

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<div align="center">
<blockquote>
<p><em>"Empowering Tanzanian students with data driven insights."</em></p>
<p><strong>— Zuck30</strong></p>
</blockquote>
</div>

<h2>🙏 Acknowledgments</h2>

- React and FastAPI for a great developer experience.
- Scikit-learn for robust machine learning tools.
- HESLB for inspiring this project.

<h2>📞 Support</h2>

For questions or issues, open a GitHub issue or contact [mwalyangashadrack@gmail.com](mailto:mwalyangashadrack@gmail.com).

<h2>🎉 Get Started!</h2>

Help Tanzanian students plan their education with **Loan Eligibility Prediction**! Share your feedback and contribute to its growth. 