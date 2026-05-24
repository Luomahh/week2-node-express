# Week 2 Node.js Express API

A simple REST API built with Node.js and Express as part of my backend development learning journey.

## Features
- GET endpoint returning welcome message
- POST endpoint accepting user data with validation
- Dynamic route with URL parameters
- JSON parsing middleware
- Error handling for missing data (400 status)
- Environment variables (.env)
- Static HTML page served at root
- Custom request logging middleware

## Installation

```bash
npm install
```

## Usage

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

## API Endpoints

### GET /api
Returns welcome message

### POST /user
Accepts JSON body with `name` and `email`
Returns greeting message

### GET /user/:id
Returns user profile message for given ID

## Author
Precious Ojiaku - Full Stack Developer
