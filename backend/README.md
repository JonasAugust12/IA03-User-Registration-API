# Backend - User Registration API

NestJS backend with MongoDB for user registration system.

## Quick Start

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Start MongoDB (make sure it's running)

# Run in development mode
npm run start:dev

# Run in production mode
npm run build
npm run start:prod
```

## API Endpoints

### POST /user/register
Register a new user

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "user": {
    "_id": "...",
    "email": "user@example.com",
    "createdAt": "2025-11-09T10:30:00.000Z"
  }
}
```

## Environment Variables

```env
MONGODB_URI=mongodb://localhost:27017/user-registration
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

## Project Structure

```
src/
├── user/
│   ├── dto/
│   │   └── register-user.dto.ts    # Validation DTO
│   ├── schemas/
│   │   └── user.schema.ts          # MongoDB Schema
│   ├── user.controller.ts          # API Routes
│   ├── user.service.ts             # Business Logic
│   └── user.module.ts              # Module Definition
├── app.module.ts                   # Root Module
└── main.ts                         # Application Entry
```

## Features

- ✅ MongoDB with Mongoose
- ✅ Password hashing with bcrypt
- ✅ Email validation
- ✅ Duplicate email prevention
- ✅ Error handling
- ✅ CORS enabled
- ✅ Environment configuration

## Testing with curl

```bash
# Register a user
curl -X POST http://localhost:3001/user/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'
```

## Testing with Postman

1. Create a new POST request
2. URL: `http://localhost:3001/user/register`
3. Headers: `Content-Type: application/json`
4. Body (raw JSON):
```json
{
  "email": "test@example.com",
  "password": "test123"
}
```
