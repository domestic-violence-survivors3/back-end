# back-end

### BaseURL: https://dvscalculator.herokuapp.com/

---

# **Authentication**

## Register User

```
POST /auth/register
```

| name     | type   | description               |     |     |
| -------- | ------ | ------------------------- | --- | --- |
| username | string | users name \*required     |     |     |
| password | string | users password \*required |     |     |

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

| name     | type   | description               |     |     |
| -------- | ------ | ------------------------- | --- | --- |
| username | string | users name \*required     |     |     |
| password | string | users password \*required |     |     |

### response

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...ect",
    "message": "logged in: welcome userName!"
}

```