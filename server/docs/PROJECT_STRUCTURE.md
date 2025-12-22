# Portfolio Project - Clean Structure

## 📁 Project Organization

```
Portfolio/
├── client/                    # React Frontend (Port 5000)
│   ├── public/
│   │   ├── assets/           # Resume PDFs
│   │   └── profile.jpg       # Profile image
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── styles/           # CSS files
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── server/                    # Express Backend (Port 3001)
│   ├── src/
│   │   ├── data/
│   │   │   └── portfolio.js  # Portfolio data
│   │   ├── models/           # MongoDB schemas
│   │   ├── routes/           # API routes
│   │   │   └── admin.js      # Admin endpoints
│   │   ├── middleware/       # Auth middleware
│   │   ├── utils/            # Utilities
│   │   │   └── errorLogger.js
│   │   └── index.js          # Server entry
│   └── package.json
│
├── admin/                     # Admin Panel (Port 5001)
│   ├── src/
│   │   ├── components/
│   │   │   ├── editors/      # Section editors
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Stats.jsx
│   │   │   └── ErrorLogs.jsx
│   │   ├── context/          # Auth context
│   │   ├── styles/           # CSS files
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── .gitignore                 # Git ignore rules
├── package.json              # Root scripts
├── README.md                 # Main documentation
├── SETUP.md                  # Setup guide
└── PROJECT_STRUCTURE.md      # This file
```

## 🧹 Cleaned Files (Removed)

The following unnecessary files have been removed:

- ✅ `main.py` - Python file (not needed)
- ✅ `pyproject.toml` - Python config
- ✅ `uv.lock` - Python lock file
- ✅ `replit.md` - Old Replit docs
- ✅ `.replit` - Replit config
- ✅ `generated-icon.png` - Unused icon
- ✅ `server_portfolio.json` - Old backup file
- ✅ `attached_assets/` - Unused assets folder
- ✅ `client/src/assets/` - Empty folder

## 📦 What's Included

### Client (Frontend)
- React 18 with Vite
- Tailwind CSS for styling
- Responsive components
- Portfolio sections: Hero, About, Skills, Projects, Contact, Resume

### Server (Backend)
- Express.js API
- MongoDB integration (optional)
- JWT authentication
- Error logging system
- RESTful API endpoints

### Admin Panel
- React admin interface
- JWT-based authentication
- Content management for all portfolio sections
- Error monitoring dashboard
- Statistics and analytics

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm run install-all
   ```

2. **Create `.env` file** (see SETUP.md)

3. **Start development:**
   ```bash
   npm run dev
   ```

4. **Access:**
   - Client: http://localhost:5000
   - Admin: http://localhost:5001
   - API: http://localhost:3001

## 📝 Key Files

- `server/src/data/portfolio.js` - Portfolio content (editable via admin)
- `.env` - Environment variables (create this)
- `package.json` - Root scripts and dependencies
- `README.md` - Full documentation
- `SETUP.md` - Detailed setup instructions

## 🔒 Security

- Change default admin credentials in `.env`
- Set a strong `JWT_SECRET`
- Use environment variables for sensitive data
- Enable HTTPS in production

## 📚 Documentation

- **README.md** - Complete project documentation
- **SETUP.md** - Step-by-step setup guide
- **admin/README.md** - Admin panel specific docs

