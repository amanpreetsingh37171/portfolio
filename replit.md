# Portfolio Website - MERN Stack

## Overview
A modern, responsive portfolio website built with the MERN stack (MongoDB, Express, React, Node.js). Features a beautiful dark theme with gradient accents, smooth animations, and a fully functional contact form.

## Project Structure
```
portfolio/
├── client/                 # React frontend (Vite + Tailwind)
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── styles/
│   │   │   └── index.css   # Tailwind + custom styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   └── tailwind.config.js
├── server/                 # Express backend
│   ├── src/
│   │   ├── data/
│   │   │   └── portfolio.js  # Portfolio data (editable)
│   │   ├── models/
│   │   │   └── Contact.js    # MongoDB schema
│   │   └── index.js          # Express server
│   └── package.json
└── package.json            # Root package with scripts
```

## Tech Stack
- **Frontend**: React 18, Vite, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Database**: MongoDB (via Mongoose) - Optional for contact form
- **Styling**: Tailwind CSS with custom animations

## Features
- Responsive navigation with mobile menu
- Hero section with animated gradient background
- About section with highlights
- Skills section with progress bars (grouped by category)
- Projects showcase with cards and links
- Contact form with MongoDB persistence
- Social media links in footer

## Running the Application
The application runs with a single command that starts both frontend and backend:
```
npm run dev
```
- Frontend: http://localhost:5000
- Backend API: http://localhost:3001

## API Endpoints
- `GET /api/portfolio` - Get all portfolio data
- `GET /api/projects` - Get projects list
- `GET /api/skills` - Get skills list
- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check

## Customization
Edit `server/src/data/portfolio.js` to customize:
- Name and title
- About section bio and highlights
- Skills and proficiency levels
- Project cards
- Contact information and social links

## MongoDB Setup (Optional)
To enable contact form persistence, set the `MONGODB_URI` environment variable with your MongoDB Atlas connection string.

## Recent Changes
- November 30, 2025: Initial portfolio creation with MERN stack
