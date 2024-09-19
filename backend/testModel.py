import dill as pickle
import pandas as pd

# Load the model
with open('fifthUpdateRandomForest.pkl', 'rb') as file:
    model = pickle.load(file)

# Sample data for prediction
sample_data = pd.DataFrame([{
    'Na': 1.5, 'Mg': 0.3, 'Al': 0.8, 'RI': 1.2,
    'Si': 2.3, 'K': 0.4, 'Ca': 1.1, 'Ba': 0.6, 'Fe': 0.9
}])

# Perform prediction
try:
    prediction = model.predict(sample_data)
    print(f"Prediction: {prediction}")
except Exception as e:
    print(f"Error during prediction: {e}")