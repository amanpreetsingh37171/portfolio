# Portfolio Project Setup Guide

## Quick Start

### 1. Install Dependencies

```bash
npm run install-all
```

This will install dependencies for:
- Root project
- Client (React frontend)
- Server (Express backend)
- Admin (Admin panel)

### 2. Environment Setup

Create a `.env` file in the root directory:

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

### 3. Start Development Servers

```bash
npm run dev
```

This starts all three services:
- **Client**: http://localhost:5000 (Public portfolio)
- **Server**: http://localhost:3001 (Backend API)
- **Admin**: http://localhost:5001 (Admin panel)

### 4. Access Admin Panel

1. Navigate to http://localhost:5001
2. Login with default credentials:
   - Username: `admin`
   - Password: `admin123`

⚠️ **Important**: Change these credentials in production!

## Individual Services

### Start Only Client
```bash
npm run client
```

### Start Only Server
```bash
npm run server
```

### Start Only Admin
```bash
npm run admin
```

## Building for Production

### Build Client
```bash
npm run build
```

### Build Admin Panel
```bash
npm run build-admin
```

## Project Structure

```
Portfolio/
├── client/          # React frontend (Port 5000)
├── server/          # Express backend (Port 3001)
├── admin/           # Admin panel (Port 5001)
├── package.json     # Root scripts
└── .env            # Environment variables
```

## MongoDB Setup (Optional)

The project works without MongoDB, but for full functionality:

1. Create a MongoDB Atlas account or use local MongoDB
2. Get your connection string
3. Add it to `.env` as `MONGODB_URI`
4. The app will automatically connect and use it for:
   - Contact form submissions
   - Error logging
   - Admin authentication

## Troubleshooting

### Port Already in Use
If ports 3001, 5000, or 5001 are in use:
- Change them in respective `package.json` files
- Update `VITE_API_URL` in `.env` if you change server port

### Dependencies Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
rm -rf client/node_modules client/package-lock.json
rm -rf server/node_modules server/package-lock.json
rm -rf admin/node_modules admin/package-lock.json

# Reinstall
npm run install-all
```

### MongoDB Connection Issues
- Check your `MONGODB_URI` in `.env`
- Ensure MongoDB is running (if local)
- Check network access (if using Atlas)
- The app will work without MongoDB, just with limited features

## Security Notes

Before deploying to production:

1. ✅ Change `ADMIN_USERNAME` and `ADMIN_PASSWORD`
2. ✅ Set a strong `JWT_SECRET`
3. ✅ Use environment variables for all sensitive data
4. ✅ Enable HTTPS
5. ✅ Set up proper CORS policies
6. ✅ Use a production MongoDB database
7. ✅ Review and update error logging settings

