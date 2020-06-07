import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import csv

from scipy.optimize import curve_fit
from statsmodels.tsa.seasonal import seasonal_decompose
from random import seed
from random import random
from glob import glob

seed(1)

with open("ai_predictions.csv", 'w') as file:
  fields = ('State', 'Years until next drought')
  writer = csv.DictWriter(file, fieldnames=fields, lineterminator = '\n')
  writer.writeheader()
  
  for path_name in glob("""drought_data\State Data\*.csv"""):
    
    path_sections = path_name.split('\\')
    state_name = path_sections[-1]
    print(state_name)
    
    df = pd.read_csv(path_name, parse_dates=['MapDate'], index_col='MapDate')

    drought_type_string = 'D1'

    # Additive Decomposition. 
    result_add = seasonal_decompose(df[drought_type_string], model='additive', extrapolate_trend='freq')


    seasonal_df = result_add.seasonal.to_frame()

    # Test function with coefficients as parameters 
    def test(x, a, b, c, d): 
      return a * np.sin(b * x + c) + d

    seasonal_df['dates'] = seasonal_df.index.values.astype(int)

    xdata = seasonal_df['dates'].to_numpy()
    ydata = seasonal_df['seasonal'].to_numpy()

    print(xdata)

    # curve_fit() function takes the test-function 
    # x-data and y-data as argument and returns  
    # the coefficients a and b in param and 
    # the estimated covariance of param in param_cov 
    # guesses guide the fitting function
    period_guess = random() * 25 + 3
    initial_guess = [10000, period_guess, 10, 10]
    param, param_cov = curve_fit(test, xdata, ydata, p0=initial_guess) 

    print("Sine funcion coefficients:") 
    print(param) 
    print("Covariance of coefficients:") 
    print(param_cov) 

    writer.writerow({'State': state_name, 'Years until next drought': param[1]})
  