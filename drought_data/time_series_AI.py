import pandas as pd
import matplotlib.pyplot as plt

from statsmodels.tsa.seasonal import seasonal_decompose

df = pd.read_csv("""drought_data\State Data\california.csv""", parse_dates=['MapDate'], index_col='MapDate')
print(df.head())
# print(df.describe())

def plot_df(df, x, y, title="", xlabel='Date', ylabel='Value', dpi=100):
    plt.figure(figsize=(16,5), dpi=dpi)
    plt.plot(x, y, color='tab:red')
    plt.gca().set(title=title, xlabel=xlabel, ylabel=ylabel)
    plt.show()

print(df.columns)
drought_type = df.D0
#plot_df(df, x=df.index, y=drought_type, title='Drought data from 2000 to 2020')

droughts = ['D1', 'D2', 'D3', 'D4']

for drought_type_string in droughts:

  # drought_type_string = 'D1'

  # Multiplicative Decomposition 
  # result_mul = seasonal_decompose(df[drought_type_string], model='multiplicative', extrapolate_trend='freq')

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