# Elysia REST API

This project is a RESTful API built with Elysia.js, using Bun as the runtime and SQLite as the database. It provides endpoints for managing user data.

## Features

- CRUD operations for user management
- Database seeding with fake data
- SQLite database with migrations
- Input validation using Elysia's built-in validator

## Prerequisites

- [Bun](https://bun.sh/) runtime installed

## Installation

1. Clone the repository:

```
git clone https://github.com/chadittya/elysia-rest-api.git
cd elysia-rest-api
```

2. Install dependencies:

```
bun install
```

## Running the Application

To start the development server with hot reloading:

```
bun run dev
```

The server will start at `http://localhost:3000`.

## API Endpoints

- `GET /`: Hello world endpoint
- `POST /seed`: Seed the database with 100 fake users
- `GET /users`: Get a list of users (with limit query parameter)
- `GET /users/:id`: Get a specific user by ID
- `POST /users`: Create a new user
- `PUT /users/:id`: Update an existing user

## Database

The project uses SQLite as its database. The database file is created as `elysia-rest-api.db` in the root directory.

Migrations are handled using `bun-sqlite-migrations`. Migration files should be placed in the `./migrations` directory.

## Project Structure

- `src/index.ts`: Main application file with route definitions
- `src/db.ts`: Database connection and migration setup
- `migrations/`: Directory for SQLite migration files

## Dependencies

- `elysia`: Web framework for Bun
- `@faker-js/faker`: Generate fake data for seeding
- `bun-sqlite-migrations`: Handle SQLite migrations

## Development

To add new features or modify existing ones, edit the `src/index.ts` file. For database schema changes, add new migration files in the `migrations/` directory.
