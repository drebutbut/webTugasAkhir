import numpy
from flask import Flask, request, jsonify
import dill as pickle
from flask_cors import CORS
import pandas as pd

from customFunc import logTransform, reflectLogTransform

app = Flask(__name__)
CORS(app)

with open('./dillRandomForest.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/test-predict', methods=['GET'])
def test_predict():
    try:
        print(model.best_estimator_)

        sampleData = pd.DataFrame([{
            'Na': 1.5,
            'Mg': 0.3,
            'Al': 0.8,
            'RI': 1.2,
            'Si': 2.3,
            'K': 0.4,
            'Ca': 1.1,
            'Ba': 0.6,
            'Fe': 0.9
        }])

        # # sampleData = np.array([[1.5, 0.3, 0.8, 1.2, 2.3, 0.4, 1.1, 0.6, 0.9]])
        # print(sampleData)

        prediction = model.predict(sampleData)
        return jsonify({'prediction': prediction[0]})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        print("Received data: ", data)
        print(model)

        # columns = ['RI', 'Na', 'Mg', 'Al', 'Si', 'K', 'Ca', 'Ba', 'Fe']

        features = pd.DataFrame([{
            'RI' : float(data['RI']),
            'Na' : float(data['Na']),
            'Mg' : float(data['Mg']),
            'Al' : float(data['Al']),
            'Si' : float(data['Si']),
            'K' : float(data['K']),
            'Ca' : float(data['Ca']),
            'Ba' : float(data['Ba']),
            'Fe' : float(data['Fe']),
        }])

        # features = np.array([
        #     data.get('Na'),
        #     data.get('Mg'),
        #     data.get('Al'),
        #     data.get('RI'),
        #     data.get('Si'),
        #     data.get('K'),
        #     data.get('Ca'),
        #     data.get('Ba'),
        #     data.get('Fe')
        # ]).reshape(1, -1)

        print(features)

        # prediction = model.predict([features])
        prediction = model.predict(features)
        print(prediction)

        # return jsonify({'prediction': 'example'})
        return jsonify({'prediction': prediction.tolist()})
    except Exception as e: 
        return jsonify({'error': str(e)}), 400
    
if __name__ == '__main__':
    app.run(debug = True)