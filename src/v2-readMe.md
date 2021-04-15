# V2 API

## List wearables
```
url: /api/v2/wearables
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
url: /api/v2/wearables
method: POST

body: {
  name: String
  description: String
  price: Number
}

Responses:
200: application/json | String
400: application/json | AddWearableError

AddWearableError {
  missing: Array<string>,
  invalid: Array<string>
}

```

## Delete wearable item
```
url: /api/v2/wearables
method: DELETE

body: {
  id: Number
}

Responses:
200: application/json | String
400: application/json | String
```