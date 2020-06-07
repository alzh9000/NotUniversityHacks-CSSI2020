import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

from scipy.optimize import curve_fit
from statsmodels.tsa.seasonal import seasonal_decompose
from random import seed
from random import random

df = pd.read_csv("""drought_data\State Data\\georgia.csv""", parse_dates=['MapDate'], index_col='MapDate')

drought_type_string = 'D1'

# Additive Decomposition. 
result_add = seasonal_decompose(df[drought_type_string], model='additive', extrapolate_trend='freq')

# Returns a <class 'pandas.core.series.Series'>
# print(type(result_add.seasonal))

seasonal_df = result_add.seasonal.to_frame()
# print(type(seasonal_df))
# print(seasonal_df)

# print(seasonal_df.describe())

# plt.rcParams.update({'figure.figsize': (10,10)})
# result_add.plot().suptitle('Additive Decompose', fontsize=22)
# plt.show()

# Test function with coefficients as parameters 
def test(x, a, b, c, d): 
  return a * np.sin(b * x + c) + d

print(seasonal_df.columns)

print(seasonal_df.index)

seasonal_df['dates'] = seasonal_df.index.values.astype(int)

# print(type(seasonal_df['dates'][1]))


# pd.to_datetime(seasonal_df['dates']).astype(int)
# seasonal_df['dates'].str.replace("-","").astype(int)

xdata = seasonal_df['dates'].to_numpy()
ydata = seasonal_df['seasonal'].to_numpy()

print(xdata)

# curve_fit() function takes the test-function 
# x-data and y-data as argument and returns  
# the coefficients a and b in param and 
# the estimated covariance of param in param_cov 
period_guess = random() * 10 + 5
initial_guess = [10000, period_guess, 10, 10]
param, param_cov = curve_fit(test, xdata, ydata, p0=initial_guess) 

print("Sine funcion coefficients:") 
print(param) 
print("Covariance of coefficients:") 
print(param_cov) 

model = param[0] * np.sin(param[1] * xdata + param[2]) + param[3]
plt.plot(xdata, ydata, 'o', color ='red', label ="data")
plt.plot(xdata, model, '--', color ='blue', label ="model data")
plt.legend() 
plt.show()