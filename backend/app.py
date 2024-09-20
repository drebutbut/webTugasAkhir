import numpy
from flask import Flask, request, jsonify
import dill as pickle
from flask_cors import CORS
import pandas as pd

# from customFunc import logTransform, reflectLogTransform

def logTransform(x):
    return numpy.log1p(x)

def reflectLogTransform(x):
    reflect = (x.max() + 1) - x
    return numpy.log1p(reflect)

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

try:
    print("START: Model loading")
    with open('./ninthUpdateRandomForest.pkl', 'rb') as file:
        model = pickle.load(file)
    print("FINISH: Model loaded")
except Exception as e:
    print(f"Error Loading: {e}")
# model = model.best_estimator_

# Checking predict inside the model
try:
    if hasattr(model, 'predict'):
        print("'Predict' exists in the model")
except Exception as e:
    raise RuntimeError("Error checking 'predict' in model: {}".format(e))

# Checking numpy inside the model
try:
    import numpy
    print("NumPy is imported succesfully")
except ImportError as ie:
    raise ImportError("Numpy is not installed, but the model depends on it")
except Exception as e:
    raise RuntimeError("Library or class issue inside the model: {}".format(e))

# Checking Log Transform inside the model
# try:
#     if hasattr(model, 'logTransform'):
#         print("Log Transform exists in the model")
#     else:
#         raise AttributeError("Log Transform DOES NOT exist in the model")
# except Exception as e:
#     raise RuntimeError("Error checking Log Transform in the model: {}".format(e))
try:
    if hasattr(model.named_steps['preprocessor'].transformers_[0][1], 'func'):
        print("Log Transform exists in the pipeline.")
    else:
        raise AttributeError("Log Transform DOES NOT exist in the pipeline")
except Exception as e:
    raise RuntimeError("Error checking Log Transform in the model: {}".format(e))

# Checking Reflect and Log Transfom inside the model
# try:
#     if hasattr(model, 'reflectLogTransform'):
#         print("Reflect and Log Transform exists in the model")
#     else:
#         raise AttributeError("Reflect and Log Transform DOES NOT exist in the model")
# except Exception as e:
#     raise RuntimeError("Error checking Reflect and Log Transform in the model: {}".format(e))
try:
    if hasattr(model.named_steps['preprocessor'].transformers_[1][1], 'func'):
        print("Reflect and Log Transform exists in the pipeline.")
    else:
        raise AttributeError("Reflect and Log Transform DOES NOT exist in the pipeline")
except Exception as e:
    raise RuntimeError("Error checking Log Transform in the model: {}".format(e))

@app.route('/test-predict', methods=['GET'])
def test_predict():
    try:
        print("Model: ", type(model))
        # print("Best estimator: ", pipelineModel)
        # print("Pipeline: ", type(pipelineModel))

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

        print("START: Log Transform")
        model.named_steps['preprocessor'].transformers_[0][1].func(sampleData)
        print("FINISH: Transformed")

        # # sampleData = np.array([[1.5, 0.3, 0.8, 1.2, 2.3, 0.4, 1.1, 0.6, 0.9]])
        # print(sampleData)

        prediction = model.predict(sampleData)
        print(prediction)


        return jsonify({'prediction': 1})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        # data = request.json['data']
        print("Received data: ", data)
        print("Data type: ", type(data))
        print("Model: ", model)

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

        print("Features:")
        print(features)
        print("Data type: ", type(features))

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

        # prediction = model.predict([features])
        print("START: Prediction")
        prediction = model.predict(features)
        print("FINISH: Predicted ", prediction)

        # return jsonify({'prediction': 'example'})
        return jsonify({'prediction': prediction.tolist()})
    except Exception as e: 
        import traceback
        traceback.print_exc()
        print("Error: ".format(e))
        return jsonify({'error': str(e)}), 400
    
if __name__ == '__main__':
    app.run(debug = True, port = 5000)