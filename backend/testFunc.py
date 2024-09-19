import numpy as np
import pandas as pd
from customFunc import logTransform, reflectLogTransform

# Sample data to transform
data = pd.DataFrame({
    'Na': [1.5, 2.1],
    'Mg': [0.3, 1.0],
    'Al': [0.8, 0.9],
    'RI': [1.2, 1.3],
    'Si': [2.3, 2.2],
    'K': [0.4, 0.7],
    'Ca': [1.1, 1.5],
    'Ba': [0.6, 0.5],
    'Fe': [0.9, 1.0]
})

# Apply logTransform and reflectLogTransform
log_transformed = logTransform(data)
reflect_log_transformed = reflectLogTransform(data)

print("Log Transform:\n", log_transformed)
print("Reflect Log Transform:\n", reflect_log_transformed)