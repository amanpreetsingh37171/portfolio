# Portfolio Website - MERN Stack with Admin Panel

## Overview
A modern, responsive portfolio website built with the MERN stack (MongoDB, Express, React, Node.js). Features a beautiful dark theme with gradient accents, smooth animations, a fully functional contact form, and a comprehensive admin panel for content management.

## Project Structure
```
portfolio/
├── client/                 # React frontend (Vite + Tailwind)
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── server/                 # Express backend
│   ├── src/
│   │   ├── data/
│   │   │   └── portfolio.js  # Portfolio data (editable via admin)
│   │   ├── models/          # MongoDB schemas
│   │   ├── routes/          # API routes
│   │   │   └── admin.js     # Admin API routes
│   │   ├── middleware/      # Auth middleware
│   │   ├── utils/           # Error logging utilities
│   │   └── index.js         # Express server
│   ├── docs/                # Documentation files
│   │   ├── SETUP.md
│   │   ├── CHANGE_ADMIN_CREDENTIALS.md
│   │   ├── GITHUB_SECURITY_CHECKLIST.md
│   │   └── PROJECT_STRUCTURE.md
│   └── package.json
├── admin/                  # Admin panel (React + Vite)
│   ├── src/
│   │   ├── components/      # Admin components
│   │   │   ├── editors/     # Section editors
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Stats.jsx
│   │   │   └── ErrorLogs.jsx
│   │   ├── context/         # Auth context
│   │   └── App.jsx
│   └── package.json
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## Tech Stack
- **Frontend**: React 18, Vite, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Database**: MongoDB (via Mongoose) - Optional for contact form and error logs
- **Admin Panel**: React 18, React Router, Axios
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: Tailwind CSS with custom animations

## Features

### Client Features
- Responsive navigation with mobile menu
- Hero section with animated gradient background
- About section with highlights
- Skills section with progress bars (grouped by category)
- Projects showcase with cards and links
- Contact form with MongoDB persistence
- Social media links in footer
- Resume download section

### Admin Panel Features
- **Secure Authentication**: JWT-based login system
- **Portfolio Management**: Edit all portfolio sections
  - Hero Section (name, title, tagline, description)
  - About Section (bio, highlights)
  - Skills (add, edit, remove with proficiency levels)
  - Projects (full CRUD operations)
  - Contact Information
  - Resume Information
- **Error Monitoring**: Real-time error logging and viewing
- **Statistics Dashboard**: View portfolio metrics and status
- **Modern UI**: Beautiful dark theme with responsive design

## Running the Application

### Install Dependencies

Install dependencies for each service separately:

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

# Install admin dependencies
cd ../admin
npm install
```

### Development Mode

Start each service in a separate terminal:

**Terminal 1 - Server:**
```bash
cd server
npm run dev
```
Server will run on: http://localhost:3001

**Terminal 2 - Client:**
```bash
cd client
npm run dev
```
Client will run on: http://localhost:5000

**Terminal 3 - Admin:**
```bash
cd admin
npm run dev
```
Admin Panel will run on: http://localhost:5001

### Using Concurrently (Optional)

If you have `concurrently` installed globally, you can run all services from the server directory:

```bash
cd server
npm install -g concurrently
concurrently "npm run dev" "cd ../client && npm run dev" "cd ../admin && npm run dev"
```

## Admin Panel Access

1. Navigate to `http://localhost:5001`
2. Login with default credentials:
   - **Username**: `admin`
   - **Password**: `admin123`

⚠️ **Security Note**: Change these credentials in production by setting environment variables:
- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`
- `JWT_SECRET`

## API Endpoints

### Public Endpoints
- `GET /api/portfolio` - Get all portfolio data
- `GET /api/projects` - Get projects list
- `GET /api/skills` - Get skills list
- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check

### Admin Endpoints (Requires Authentication)
- `POST /api/admin/login` - Admin login
- `GET /api/admin/stats` - Get portfolio statistics
- `PUT /api/admin/portfolio/:section` - Update portfolio section
- `GET /api/admin/errors` - Get error logs
- `DELETE /api/admin/errors` - Clear error logs

## Environment Variables

The `.env` file should be in the `server/` directory. See `server/.env.example` for a template:

Copy `server/.env.example` to `server/.env` and fill in your values:

```env
# Server Configuration
PORT=3001
MONGODB_URI=your_mongodb_connection_string_here

# Admin Credentials (Change in production!)
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123

# JWT Secret (Change in production!)
JWT_SECRET=your-secret-key-change-in-production

# Client Configuration
VITE_API_URL=http://localhost:3001
```

**Note:** The `.env` file should be in the `server/` directory, but the server will also check the root directory for compatibility.

## Customization

### Via Admin Panel
Use the admin panel to edit all portfolio content without touching code.

### Via Code
Edit `server/src/data/portfolio.js` to customize:

## Documentation

Additional documentation is available in `server/docs/`:
- `SETUP.md` - Detailed setup guide
- `CHANGE_ADMIN_CREDENTIALS.md` - How to change admin credentials
- `GITHUB_SECURITY_CHECKLIST.md` - Security checklist for GitHub
- `PROJECT_STRUCTURE.md` - Project structure overview
- Name and title
- About section bio and highlights
- Skills and proficiency levels
- Project cards
- Contact information and social links
- Resume information

## MongoDB Setup (Optional)

To enable contact form persistence and error logging:
1. Set up a MongoDB Atlas account or local MongoDB instance
2. Set the `MONGODB_URI` environment variable with your connection string
3. The application will automatically connect and use the database

## Error Logging

The application includes comprehensive error logging:
- Errors are logged to both memory and MongoDB (if available)
- Admin panel provides real-time error monitoring
- Errors are categorized by level (error, warning, info)
- Error logs include stack traces and request URLs

## Building for Production

```bash
# Build client
npm run build

# Build admin panel
npm run build-admin
```

## Recent Updates
- Added comprehensive admin panel for content management
- Implemented JWT-based authentication
- Added error logging and monitoring system
- Enhanced portfolio data structure
- Improved UI/UX across all sections
# portfolio
