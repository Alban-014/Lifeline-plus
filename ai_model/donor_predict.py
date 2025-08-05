import pandas as pd
from sklearn.linear_model import LogisticRegression
import pickle

# Sample training data
data = pd.DataFrame({
    'days_since_last_donation': [30, 60, 90, 15, 120],
    'available': [1, 1, 0, 1, 0]
})

X = data[['days_since_last_donation']]
y = data['available']

model = LogisticRegression()
model.fit(X, y)

with open('donor_model.pkl', 'wb') as f:
    pickle.dump(model, f)

# Load & predict
model = pickle.load(open('donor_model.pkl', 'rb'))
days = int(input("Days since last donation: "))
result = model.predict([[days]])
print("Available for donation" if result[0] == 1 else "Not available")
