### BaseURL: https://dvscalculator.herokuapp.com/

---

# **Authentication**

## Register User

```
POST /auth/register
```

| name     | type   | description                 |
| -------- | ------ | -------------------------   |
| username | string | user's name      \*required |
| password | string | user's password  \*required |

### response

```
{
  "message: successfully registered User"
}
```

---

## Login User

```
POST /auth/login
```

| name     | type   | description                |
| -------- | ------ | -------------------------  |
| username | string | user's name \*required     |
| password | string | user's password \*required |

### response

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...ect",
    "message": "logged in: welcome userName!"
}

```


# **Users**
```
GET /users/:id
```

### Response

```
{
  "user": {
    "id": 3,
    "username": "rachel"
  },
  "personalBudget": [
    {
      "id": 3,
      "transportation": 300,
      "food": 50,
      "healthInsurance": 75,
      "carInsurance": 115,
      "healthCare": 90,
      "carLoans": 397,
      "personalLoans": 233,
      "other": 400,
      "user_id": 3
    }
  ],
  "relocateBudget": [
    {
      "id": 3,
      "hotelCosts": 100,
      "rentalDeposit": 300,
      "utilities": 100,
      "storage": 100,
      "rent": 600,
      "carRental": 150,
      "gas": 100,
      "cellphoneFees": 75,
      "movingTruck": 90,
      "mentalHealth": 300,
      "incomeLoss": 400,
      "other": 600,
      "user_id": 3
    }
  ]
}
```

# **Personal Budget**

## GET personalBudget by ID
```
GET /users/:id/personal
```
### Response

```
{
  "personalBudget": [
    {
      "id": 3,
      "transportation": 300,
      "food": 50,
      "healthInsurance": 75,
      "carInsurance": 115,
      "healthCare": 90,
      "carLoans": 397,
      "personalLoans": 233,
      "other": 400,
      "user_id": 3
    }
  ]
}

```

## POST personalBudget by ID
```
POST /users/:id/personal
```


| name            | type    | description                                           |
| --------------- | ------- | ----------------------------------------------------- |
| id              | integer | personalBudget id         |
| transportation  | integer | costs for transportation  |
| food            | integer | Groceries, eating out...  |
| healthInsurance | integer | Health Insurance payments |
| carInsurance    | integer | Cost of car insurance     |
| healthCare      | integer | Cost of Healthcare        |
| carLoans        | integer | Monthly Car payments      |
| personalLoans   | integer | Any loans paying off      |
| other           | integer | Other costs to include    |
| user_id         | integer | included from req.params  |

# **Relocation Budget**

## GET relocateBudget by ID
```
GET /users/:id/relocate
```
### Response

```
{
  "relocateBudget": [
    {
      "id": 3,
      "hotelCosts": 100,
      "rentalDeposit": 300,
      "utilities": 100,
      "storage": 100,
      "rent": 600,
      "carRental": 150,
      "gas": 100,
      "cellphoneFees": 75,
      "movingTruck": 90,
      "mentalHealth": 300,
      "incomeLoss": 400,
      "other": 600,
      "user_id": 3
    }
  ]
}

```

## POST relocateBudget by ID


| name            | type    | description                                           |
| --------------- | ------- | ----------------------------------------------------- |
| id              | integer | relocateBudget id                        |
| hotelCosts      | integer | costs for Hotel fees                     |
| rentalDeposit   | integer | Deposit for new home                     |
| utilities       | integer | Costs for utilities                      |
| storage         | integer | Monthly storage payments                 |
| rent            | integer | Monthly rent payments                    |
| gas             | integer | Monthly gas expense                      |
| cellphoneFees   | integer | Fees related to cellphones               |
| movingTruck     | integer | Moving Truck expense (If applicable)     |
| mentalHealth    | integer | Costs for health treatment               |
| incomeLoss      | integer | Any income loss due to relocation        |
| other           | integer | Other costs to include                   |
| user_id         | integer | included from req.params  |