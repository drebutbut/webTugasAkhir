import numpy
from sklearn.base import BaseEstimator, TransformerMixin

class logTransform(BaseEstimator, TransformerMixin):
    def fit(self, X, y = None):
        return self
    
    def transform(self, X):
        return numpy.log1p(X)
    
class reflectLogTransform(BaseEstimator, TransformerMixin):
    def fit(self, X, y = None):
        return self
    
    def transform(self, X):
        return numpy.log(X.max() - X + 1)

# def logTransform(x):
#     return numpy.log1p(x)

# def reflectLogTransform(x):
#     reflect = (x.max() + 1) - x
#     return numpy.log1p(reflect)