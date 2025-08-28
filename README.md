# ALX Listing App

The ALX Listing App project aims to scaffold and lay the foundational structure for a modern Airbnb clone. This initial milestone focuses on setting up a well-organized and scalable codebase using Next.js, TypeScript, TailwindCSS, and ESLint.

## Project Structure

- **components/**

The _components/_ folder is where reusable UI building blocks—like buttons, cards, modals, headers, footers, etc. are stored.
This is helpful to avoid repeating code in multiple pages.

- **interfaces/**

The _interfaces/_ folder contains TypeScript interfaces that define the structure of props, data models, API responses, etc.
This is helpful because it:
Centralized typing, Easy to locate and update interface definitions etc

- **constants/**

The constants/ folder is used to store reusable constant values like:
Configuration variables, Static data, URL endpoints, Text labels etc

- **public/assets**

This folder is part of the public/ directory, which is a special Next.js directory for storing static assets like Images (.png, .jpg, .svg), Fonts, Icons, Videos

## Running the Project Locally

Follow the steps below to run the project on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/Colly5090/alx-listing-app.git
cd alx-listing-app
npm install
npm run dev
```

## API Integration for All Pages

The goal is to replace hardcoded property, booking, and review data with data fetched from a REST API using Axios. Also handle loading states, errors, and display the data dynamically across all pages.

### API Setup

**Install axios for API requests**

```bash
npm install axios
```

- **GET /properties** — Fetches the list of properties for the listing page
- **GET /properties/:id** — Fetches the details of a single property based on its ID
- **POST /bookings** — Submits booking details to the server
- **GET /properties/:id/reviews** — Fetches the reviews of a property

open your browser and navigate to http://localhost:3000
