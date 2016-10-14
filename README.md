## Setup

- Install MongoDB and run it
- add the location of your MongoDB instance to enviroment variable: mongodb
- npm install
- nodemon app.js

## API

| Method | URI        | Params   | Return         |
|--------|------------|----------|----------------|
| GET    | /movies    |          | List of Movies |
| GET    | /movies/:id| Movie id | Movie          |
| POST   | /movies    | Movie    | Movie          |
| PUT    | /movies/:id| Movie    | Movie          |
| DELETE | /movies/:id| Movie id |                |

### GET /movies

#### Output

```javascript
[
  {
    "id": "58003f7aab2c8a2708bac205",
    "title": "Star Wars",
    "description": "Classic sifi movie",
    "year": 1971,
    "genre": "Sifi"
  }
]
```

### GET /movies/58003f7aab2c8a2708bac205

#### Output

```javascript
{
  "id": "58003f7aab2c8a2708bac205",
  "title": "Star Wars",
  "description": "Classic sifi movie",
  "year": 1971,
  "genre": "Sifi"
}
```

### POST /movies

#### Input

```javascript
{
  "title": "Star Trek",
  "description": "Classic sifi movie",
  "year": 2009,
  "genre": "Sifi"
}
```

#### Output

```javascript
{
  "title": "Star Trek",
  "description": "Classic sifi movie",
  "year": 2009,
  "genre": "Sifi",
  "id": "580156fa7bd7052f083e1879"
}
```

### PUT /movies

#### Input

```javascript
{
  "id": "58003f7aab2c8a2708bac205",
  "description": "Classic sifi movie",
  "title": "Star Wars",
  "year": 1977,
  "genre": "Sifi"
}
```

#### Output

```javascript
{
  "ok": 1,
  "nModified": 1,
  "n": 1
}
```

### DELETE /movies/58003f7aab2c8a2708bac205