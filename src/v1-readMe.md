# V1 API

## List wearables

```
url: /api/v1/wearables
method: GET

Responses
200: application/json | Array<Wearable>

Wearable {
  price: Number,
  id: Number,
  description: String,
  name: String
}
```

## Add wearable item
```
url: /api/v1/wearables/add?<params>
method: GET

Params:
  name: String
  description: String
  price: Number

Responses:
200: application/json | String
400: text/plain | String

```

## Delete wearable item
```
url: /api/v1/wearables/delete?<params>
method: GET

Params:
  id: Number

Responses:
200: application/json | String
400: text/plain | String
```