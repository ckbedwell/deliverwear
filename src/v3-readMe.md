# V3 API

## Sign-in
```
url: /api/v3/sign-in
method: GET

Responses
200: application/json | <JWT>
```

## List wearables
```
url: /api/v3/wearables
method: GET

Responses
200: application/json | Array<Wearable>

Wearable: {
  price: Number,
  id: Number,
  description: String,
  name: String
}
```

## Add wearable item
```
url: /api/v3/wearables
method: POST

headers: {
  authorization: 'Bearer <jwt>'
}
body: {
  name: String
  description: String
  price: Number
}

Responses:
200: application/json | String
400: application/json | AddWearableError
401: application/json | String

AddWearableError {
  missing: Array<string>,
  invalid: Array<string>
}

```

## Delete wearable item
```
url: /api/v3/wearables
method: DELETE

headers: {
  authorization: 'Bearer <jwt>'
}
body: {
  id: Number
}

Responses:
200: application/json | String
400: application/json | String
401: application/json | String
```