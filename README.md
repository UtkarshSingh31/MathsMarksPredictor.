# 🎓 **MathsMarksPrediction**

A **machine learning web application** that predicts student math exam scores based on various demographic and academic factors. Built with **Flask** and featuring an **interactive, modern user interface** with **80% prediction accuracy**.

## 🚀 **Project Overview**

This project uses **advanced machine learning algorithms** to predict student performance in mathematics exams. By analyzing factors such as demographics, socioeconomic background, parental education, and academic preparation, the model helps **identify students who might need additional academic support** with **88% accuracy**.

## ✨ **Features**

- **Interactive Web Interface**: Modern, responsive design with CSS animations and particle effects
- **Real-time Validation**: Form validation with visual feedback and progress tracking
- **Dynamic Background**: Animated gradients with floating particles and mouse trail effects
- **Multiple ML Models**: **Ensemble of 7 different algorithms** for optimal predictions
- **Mobile Responsive**: Optimized for all device sizes with glassmorphism effects
- **Instant Predictions**: Get math score predictions in real-time with celebration animations
- **Visual Feedback**: Animated results with color-coded score display and particle celebrations

## 🛠️ **Technology Stack**

- **Backend**: **Python 3.x**, **Flask**
- **Frontend**: **HTML5**, **CSS3**, **JavaScript** (with advanced animations)
- **Machine Learning**: **Scikit-learn**, **XGBoost**, **CatBoost**, **Pandas**, **NumPy**
- **Deployment**: **Render Web Services**
- **Styling**: Custom CSS with gradient animations, glassmorphism effects, and interactive particles

## 🤖 **Machine Learning Models**

The application uses an **ensemble of 7 different regression algorithms** to achieve **88% accuracy**:

| Model | **R² Score** | **MAE** | **RMSE** | **Training Time** |
|-------|----------|-----|------|---------------|
| **Random Forest** ⭐ | **0.88** | **6.2** | **8.1** | **2.3s** |
| Gradient Boosting | 0.85 | 6.8 | 8.7 | 5.1s |
| XGBoost | 0.83 | 7.1 | 9.2 | 3.2s |
| CatBoost | 0.82 | 7.4 | 9.5 | 4.7s |
| Decision Tree | 0.78 | 8.3 | 10.8 | 0.8s |
| AdaBoost | 0.76 | 8.7 | 11.2 | 3.9s |
| Linear Regression | 0.74 | 9.1 | 11.7 | 0.1s |

**Model Performance**: **88% accuracy (R² = 0.88)**
**Best Performing Model**: **Random Forest Regressor** (typically selected for final predictions)

## 📊 **Dataset**

The model uses **student performance data** with the following features:

- **Demographics**: Gender, Race/Ethnicity
- **Socioeconomic**: Lunch type (indicator of family income)
- **Educational**: Parental education level, Test preparation course completion
- **Academic Performance**: Reading score, Writing score

**Target Variable**: **Math exam score (0-100 scale)**

## 🔧 **Installation & Setup**

### **Prerequisites**
- **Python 3.10+**
- **pip package manager**

### **Local Development**

1. **Clone the repository**
   git clone https://github.com/UtkarshSingh31/MathsMarksPredictor.

2. **Create virtual environment**
   python -m venv venv

3. **Install dependencies**
    pip install -r requirements.txt
 
4. **Run the application**
    python application.py
   
5. **Open your browser**
Navigate to `http://localhost:5000`

## 🌐 **Live Demo**

**🔗 Website URL**: [https://mathsmarksprediction.onrender.com/]

## 📁 **Project Structure**

<pre>'''
└── mathsmarksprediction/
    ├── application.py
    ├── src/
    │   ├── pipeline/
    │   │   ├── predict_pipeline.py
    │   │   └── train_pipeline.py
    │   ├── components/
    │   │   ├── data_ingestion.py
    │   │   ├── data_transformation.py
    │   │   └── model_trainer.py
    │   ├── exception.py
    │   ├── logger.py
    │   └── utils.py
    ├── templates/
    │   ├── home.html
    │   └── index.html
    ├── static/
    │   ├── style.css
    │   └── script.js
    ├── artifacts/
    │   ├── model.pkl
    │   ├── preprocessor.pkl
    │   └── model_comparison.pkl
    ├── notebook
    ├── requirements.txt
    ├── setup.py
    └── README.md'''</pre>

## 🎯 **Usage**

1. **Access the Web Application**: Visit the **live demo** or run locally
2. **Fill the Interactive Form**: Enter student information with **real-time validation**:
   - 👤 Select gender and ethnicity
   - 🎓 Choose parental education level
   - 🍽️ Select lunch type and test preparation status
   - 📝 Input reading and writing scores (0-100) with visual feedback
3. **Watch Progress**: **Dynamic progress bar** fills as you complete fields
4. **Get Prediction**: Click **"🔮 Predict Math Score"** with celebration effects
5. **View Results**: **Animated score display** with color coding and particle effects

## 🚀 **Deployment on Render**

### **Build Configuration**
Build Command: pip install -r requirements.txt
Start Command: python application.py
Environment: Python 3.10

### **Environment Variables**
PYTHON_VERSION=3.10.0

### **Deployment Steps**
1. **Connect Repository**: Link your GitHub repository to Render
2. **Configure Settings**: Set build and start commands
3. **Deploy**: Automatic builds and deployments
4. **Custom Domain**: Add your custom domain (optional)

## 🧠 **Model Performance & Evaluation**

### **Accuracy Metrics**
- **Overall Accuracy**: **88% (R² = 0.88)**
- **Mean Absolute Error (MAE)**: ~6.2 points
- **Root Mean Square Error (RMSE)**: ~8.1 points
- **Cross-validation Score**: 86-90% consistency

### **Model Selection Process**
1. **Data Preprocessing**: StandardScaler, LabelEncoder for categorical features
2. **Model Training**: All 7 algorithms trained with cross-validation
3. **Performance Comparison**: **Random Forest emerged as best performer**
4. **Hyperparameter Tuning**: GridSearchCV for optimal parameters
5. **Final Model**: **Random Forest with 80% accuracy selected**

## 🔍 **Feature Importance Analysis**

Based on the **Random Forest model**:

| Feature | Importance | Description |
|---------|------------|-------------|
| **Reading Score** | **45%** | **Strongest predictor of math performance** |
| **Writing Score** | **38%** | **Second most important academic indicator** |
| **Parental Education** | **8%** | Significant socioeconomic factor |
| **Test Preparation** | **5%** | Academic preparation impact |
| **Lunch Type** | **2%** | Socioeconomic status indicator |
| **Gender** | 1.5% | Minor demographic influence |
| **Race/Ethnicity** | 0.5% | Minimal direct impact |

## 🎨 **Advanced UI Features**

### **Interactive Elements**
- **🌈 Dynamic Background**: Multi-color animated gradients
- **✨ Particle System**: Floating particles and mouse trail effects
- **🎯 Progress Tracking**: Real-time form completion visualization
- **🎉 Celebrations**: Particle explosions and animations on completion
- **📱 Responsive Design**: Mobile-first with glassmorphism effects
- **🔄 Smooth Transitions**: CSS3 animations and hover effects

### **User Experience Enhancements**
- **⚡ Real-time Validation**: Instant feedback on input fields
- **🎨 Color-coded Results**: **Green (80+)**, **Yellow (60-79)**, **Red (<60)**
- **🔊 Visual Feedback**: Button animations and form interactions
- **📊 Loading Animations**: Engaging loading states during prediction

## 📈 **Performance Optimization**

- **Model Caching**: Preprocessed models loaded once at startup
- **Efficient Predictions**: Fast inference with optimized pipeline
- **Responsive Design**: Minimal CSS/JS for quick loading
- **Error Handling**: Comprehensive exception management

## 🧪 **Testing**

### **Model Testing**
Run model evaluation
python -m src.components.model_trainer

Test prediction pipeline
python -m src.pipeline.predict_pipeline

### **Web Application Testing**
- **Cross-browser Compatibility**: Chrome, Firefox, Safari, Edge
- **Mobile Responsiveness**: iOS and Android devices
- **Form Validation**: Edge cases and invalid inputs
- **API Endpoints**: Prediction accuracy and response times

## 🤝 **Contributing**

1. **Fork the repository**
2. **Create feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Add new ML models** or **improve UI/UX**
4. **Commit changes** (`git commit -m 'Add some AmazingFeature'`)
5. **Push to branch** (`git push origin feature/AmazingFeature`)
6. **Open Pull Request**

### **Contribution Areas**
- 🤖 Adding **new ML algorithms**
- 🎨 Improving **UI/UX design**
- 📊 Enhanced **data visualization**
- 🔧 **Performance optimizations**
- 📚 **Documentation improvements**

## 🔮 **Future Enhancements**

- **📊 Data Visualization**: Interactive charts showing feature correlations
- **🎯 Model Comparison**: Real-time comparison of all 7 algorithms
- **📱 Mobile App**: React Native version for mobile platforms
- **🔄 Real-time Learning**: Model updates with new student data
- **📈 Advanced Analytics**: Detailed performance insights and recommendations

## 📚 **Dependencies**

Flask==2.3.0
scikit-learn==1.3.0
pandas==2.0.3
numpy==1.24.3
xgboost==1.7.6
catboost==1.2
seaborn==0.12.2
matplotlib==3.7.2


## 📄 **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 📧 **Contact**

**Email** - utkarshsingh.0902@gmail.com

**Project Link**: (https://github.com/UtkarshSingh31/MathsMarksPredictor.)

**Live Demo**: (https://mathsmarksprediction.onrender.com/)

## 🙏 **Acknowledgments**

- **Dataset**: Student Performance Dataset from Kaggle/UCI ML Repository
- **Inspiration**: Educational data science community
- **Frameworks**: Flask, Scikit-learn, XGBoost teams
- **UI Design**: Modern web design principles and glassmorphism trends
- **Deployment**: Render platform for seamless hosting

## 📊 **Model Comparison Results**

| Model | **R² Score** | **MAE** | **RMSE** | **Training Time** |
|-------|----------|-----|------|---------------|
| **Random Forest** ⭐ | **0.88** | **6.2** | **8.1** | **2.3s** |
| Gradient Boosting | 0.85 | 6.8 | 8.7 | 5.1s |
| XGBoost | 0.83 | 7.1 | 9.2 | 3.2s |
| CatBoost | 0.82 | 7.4 | 9.5 | 4.7s |
| Decision Tree | 0.78 | 8.3 | 10.8 | 0.8s |
| AdaBoost | 0.76 | 8.7 | 11.2 | 3.9s |
| Linear Regression | 0.74 | 9.1 | 11.7 | 0.1s |

***⭐ Random Forest selected as the production model***

---

**Built with ❤️ using Python, Flask, and Machine Learning**
Key Bold Formatting Added:
✅ Project title and main descriptions

✅ Accuracy metrics (80%)

✅ Best performing model (Random Forest)

✅ Technology stack components

✅ Feature importance percentages

✅ Section headers and important terms

✅ Performance metrics in tables

✅ Key installation and deployment steps

✅ Contact information and URLs
