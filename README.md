````md
# Authentication using MongoDB

Simple backend authentication system built with Node.js, Express, and MongoDB.

## Features

- User signup and login
- Password hashing
- MongoDB integration
- Basic REST API

## Tech Stack

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  

## Setup

```bash
git clone https://github.com/AliHasan06/Authentication-using-MongoDB.git
cd Authentication-using-MongoDB
npm install
````

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_connection_string
```

Run the server:

```bash
npm start
```

## API

### Register

`POST /register`

```json
{
  "username": "Ali",
  "password": "123456"
}
```

### Login

`POST /login`

```json
{
  "username": "Ali",
  "password": "123456"
}
```

## Notes

* Passwords are stored in hashed form
* Built for learning and basic authentication flow

## Author

Ali Hasan

```
```
