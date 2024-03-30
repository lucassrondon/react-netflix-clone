# Netflix Clone

This is a Netflix clone, built with Express, React and Tailwind CSS. This guide will help you run the app locally.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Getting Started

Follow these steps to run the app locally:

### Setting Up The Client

#### Step 1: Navigate to the client folder

`cd path/to/your/project/client`

#### Step 2: Install dependencies

`npm install`

#### Step 3: Run the development server for the client

`npm run dev`

### Setting Up The Server

#### Step 1: Navigate to the server folder

`cd path/to/your/project/server`

#### Step 2: Install dependencies

`npm install`

#### Step 3: Set up your postgresql database credentials

Go to the .env file and setup your database credentials at the 'DATABASE_URL' env variable

#### Step 4: Migrate the database tables

`npx prisma migrate dev --name init`

#### Step 5: Populate the database movies table

`cd path/to/your/project/server/scripts`\
`node seedMovies.js`

#### Step 6: Run the development server for the server
`cd path/to/your/project/server`\
`npm run start:dev`
