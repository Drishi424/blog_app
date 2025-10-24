# Blog App

A simple blogging site where you can create, edit and delete blog posts. The repository uses EJS for server-side templates and is intended as a lightweight starting point for a personal blog or small team site.

Repository: https://github.com/Drishi424/blog_app

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Environment variables](#environment-variables)
  - [Run (development)](#run-development)
- [Database & seeding](#database--seeding)
- [Tests & linting](#tests--linting)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About

This project provides the core functionality of a blog application with server-rendered pages using EJS templates. It focuses on author workflows (create, edit, delete) and reader interactions. Use it as a foundation to add features such as image uploads, search, scheduling, and RSS.

## Features

- Create, edit and delete posts
- Server-rendered pages with EJS templates
- Basic routing and view structure
- (Optional) Comments, tags/categories, and user authentication — extendable as needed

## Tech stack

The repository contains EJS templates (view engine). Typical stacks for such a project are Node.js + Express with EJS for views. If this repository includes a `package.json`, it most likely uses Node.js. Check the project root for files like `package.json`, `app.js`/`server.js`, or `bin/www` to confirm.

## Getting started

These instructions assume a Node.js + Express + EJS stack. If the repository uses a different stack (check for `manage.py`, `Gemfile`, or `composer.json`), follow that stack's standard instructions.

### Prerequisites

- Node.js (LTS recommended, e.g., 16+ or 18+)
- npm or yarn
- A database if the app requires one (see Database section)

### Setup

1. Clone the repo
   ```bash
   git clone https://github.com/Drishi424/blog_app.git
   cd blog_app
   ```

2. Install dependencies
   ```bash
   # with npm
   npm install

   # or with yarn
   yarn
   ```

3. Create environment config
   - If there is a `.env.example`, copy it:
     ```bash
     cp .env.example .env
     ```
   - If not, create a `.env` file with the variables your app expects (see next section).

### Environment variables

Add a `.env` file in the project root. Example variables commonly used in Node + Express apps:

```
PORT=3000
NODE_ENV=development

# Database (choose the one your app uses)
DATABASE_URL=postgres://user:password@localhost:5432/blog_app_db
# or for MongoDB
MONGODB_URI=mongodb://localhost:27017/blog_app

# Session / auth
SESSION_SECRET=replace-with-a-secure-value
JWT_SECRET=replace-with-a-secure-value
```

Adjust names to match what this repository expects (inspect configuration files or `config/` folder to confirm).

### Run (development)

Common npm scripts to look for in `package.json`:

- `npm run dev` — start development server with live reload (e.g., nodemon)
- `npm start` — start production server

Example:
```bash
npm run dev
# or
npm start
```

If the project includes migration scripts or an ORM, run migrations before starting the app (instructions vary by ORM).

## Database & seeding

This project may use a relational database or MongoDB depending on the implementation. Look for migration / seed files (e.g., `migrations/`, `db/`, `seed.js`, `fixtures/`).

Common tasks:
- Run migrations (Sequelize / TypeORM / other)
- Seed the database with example data
- For MongoDB, run seed scripts if provided

Examples:
- Sequelize (Node): `npx sequelize db:migrate` and `npx sequelize db:seed:all`
- Mongoose (Node): run a provided `scripts/seed.js` or similar

## Tests & linting

If tests and linters are included, run:

```bash
npm test
npm run lint
npm run format
```

Check `package.json` for exact script names.

## Deployment

Deploy as you would any Node.js app:

- Platform: Heroku, Render, DigitalOcean App Platform, AWS, etc.
- Docker: add a Dockerfile and build an image
- Static hosting is not sufficient since this repo uses server-side rendering

Example Docker run:
```bash
docker build -t blog_app .
docker run --env-file .env -p 3000:3000 blog_app
```

Remember to set environment variables in your hosting platform.

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repository
2. Create a branch: `git checkout -b feature/short-description`
3. Make changes and add tests if relevant
4. Run linters and tests
5. Open a pull request describing your change

Please follow the project's code style and update documentation where applicable.

## License

No license file is present in the repository metadata. If you want to make this project open source, add a LICENSE file (for example MIT, Apache-2.0). Until a license is added, the default copyright applies.

## Contact

Maintained by: GitHub user Drishi424  
Repo: https://github.com/Drishi424/blog_app

---

Notes:
- This README is tailored to the repository which uses EJS templates; inspect the project root (package.json, server entry, config files) to update the commands and environment keys to exactly match the implementation.
- If you'd like, I can detect the exact stack and produce a README with precise commands for installation, migration, seeding, and running.
