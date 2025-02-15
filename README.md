# Express.js CRM API

This is a simple Express.js API that connects to a MongoDB database using Mongoose. The application provides a basic structure to manage a CRM system with routes for handling requests.

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/auri-gabriel/CRM
   cd CRM
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Usage

### Start MongoDB
Ensure MongoDB is running locally

### Run the Server
Start the Express server:
   ```sh
   npm run start
   ```
By default, the server will run on `http://localhost:4000/`.
### API Routes

#### Contact Routes (Requires Authentication)

| Method | Route                 | Description                        |
|--------|----------------------|------------------------------------|
| GET    | `/`                  | Running Message                    |
| GET    | `/contact`           | Retrieve all contacts              |
| POST   | `/contact`           | Add a new contact                  |
| GET    | `/contact/:contactID` | Retrieve a contact by ID           |
| PUT    | `/contact/:contactID` | Update a contact by ID             |
| DELETE | `/contact/:contactID` | Delete a contact by ID             |

#### Authentication Routes

| Method | Route        | Description                |
|--------|------------|----------------------------|
| POST   | `/auth/register` | Register a new user       |
| POST   | `/login`    | Authenticate a user and return a JWT |


## Dependencies
- `express` - Web framework for Node.js
- `mongoose` - ODM for MongoDB
- `body-parser` - Middleware for parsing request bodies
- `cors` - Middleware for handling CORS requests
- `bcrypt` - Library for hashing passwords
- `jsonwebtoken` - Library for generating and verifying JWT tokens

