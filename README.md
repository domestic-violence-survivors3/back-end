
### BaseURL: https://dvscalculator.herokuapp.com/

# **Table of Contents**
1)  Authentication
2)  User Endpoints
3)  Personal Budget Endpoints
4)  Relocation Budget Endpoints

<br><br>

# **1 - Authentication**

```
POST /auth/register
```
> POST will register a new user into the database.

<br>

| name     | type   | description                   |
| -------- | ------ | -------------------------     |
| username | string | user's name      \*_required_ |
| password | string | user's password  \*_required_ |
<br>


_Response_

```
{
  "message: successfully registered User"
}
```

<br>

```
POST /auth/login
```

> POST Login will login a user thats already registered in the database.

<br>


| name     | type   | description                |
| -------- | ------ | -------------------------  |
| username | string | user's name \*required     |
| password | string | user's password \*required |
<br>


_Response_

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...ect",
    "message": "logged in: welcome userName!"
}
```

<br>

# **2 - Users**

```
GET /users/:id
```
> Retrieve the User by the user id and return the user and the personal budget(s) and relocation budget(s) assigned to that user.

<br>

_Response_

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
<br>

# **3 - Personal Budget**

```
GET /users/:id/personal
```

> Retrieve the personal budget(s) by the user id.

<br>

_Response_

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

<br>

```
POST /users/:id/personal
```
> POST personalBudget by user id.  The id here in the post is the user id and will post a new personal budget associated with this user.

<br>

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


<br>

```
PUT /:userId/personal/:budgetId
```
> PUT request will update a personal budget associated with the user id.  The _userId_ is the id of the user and the _budgetId_ is the id of the budget you're updating assigned to the userId (id of the user)

<br>

_Response_
```
{
    "updatedBudget": 1,
    "message": "User Id: 1 - Personal Budget id: 12 successfully updated"
}
```

```
DELETE /:userId/personal/:budgetId
```
> DELETE request will remove a personal budget associated with the user id.  The _userId_ is the id of the user and the _budgetId_ is the id of the budget you're updating assigned to the userId (id of the user)

<br>

_Response_
```
{
    "removedBudget": 1,
    "message": "User Id: 3 - Personal Budget id: 13 successfully removed"
}
```

# **4 - Relocation Budget**

```
GET /users/:id/relocate
```
> Retrieve the relocation budget(s) by the user id.

<br>

_Response_

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
<br>

```
POST /users/:id/relocate
```
> POST relocateBudget by user id.  The id here in the post is the user id and will post a new relocation budget associated with this user.

<br>

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

<br>

```
PUT /:userId/relocate/:budgetId
```
> PUT request will update a relocation budget associated with the user id.  The _userId_ is the id of the user and the _budgetId_ is the id of the budget you're updating assigned to the userId (id of the user)

<br>

_Response_
```
{
    "updatedBudget": 1,
    "message": "User Id: 1 - Relocation Budget id: 8 successfully updated"
}
```
<br>

```
DELETE /:userId/relocate/:budgetId
```
> DELETE request will remove a relocation budget associated with the user id.  The _userId_ is the id of the user and the _budgetId_ is the id of the budget you're updating assigned to the userId (id of the user)

<br>

_Response_
```
{
    "removedBudget": 1,
    "message": "User Id: 1 - Relocation Budget id: 11 successfully removed"
}
```