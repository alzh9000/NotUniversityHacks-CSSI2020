import pandas as pd
import matplotlib.pyplot as plt

from statsmodels.tsa.seasonal import seasonal_decompose

df = pd.read_csv("""drought_data\State Data\california.csv""", parse_dates=['MapDate'], index_col='MapDate')

drought_type_string = 'D1'

# Additive Decomposition. 
result_add = seasonal_decompose(df[drought_type_string], model='additive', extrapolate_trend='freq')

# Returns a <class 'pandas.core.series.Series'>
print(type(result_add.seasonal))

seasonal_df = result_add.seasonal.to_frame()
print(seasonal_df)

print(seasonal_df.describe())

# Plot
plt.rcParams.update({'figure.figsize': (10,10)})
# result_mul.plot().suptitle('Multiplicative Decompose', fontsize=22)
result_add.plot().suptitle('Additive Decompose', fontsize=22)
plt.show()
