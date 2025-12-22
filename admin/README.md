# Portfolio Admin Panel

A comprehensive admin panel for managing portfolio content, monitoring errors, and viewing statistics.

## Features

- **Secure Authentication**: JWT-based login system
- **Portfolio Management**: Edit all portfolio sections (Hero, About, Skills, Projects, Contact, Resume)
- **Error Monitoring**: Real-time error logging and viewing
- **Statistics Dashboard**: View portfolio statistics and status
- **Responsive Design**: Modern UI with Tailwind CSS

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The admin panel will be available at `http://localhost:5001`

### Default Credentials

- **Username**: `admin`
- **Password**: `admin123`

⚠️ **Important**: Change these credentials in production by setting environment variables:
- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3001
```

## Features Overview

### Dashboard Sections

1. **Statistics**: View portfolio metrics and status
2. **Hero Section**: Edit name, title, tagline, and description
3. **About Section**: Update bio and highlights
4. **Skills**: Add, edit, or remove skills with proficiency levels
5. **Projects**: Manage project portfolio with full CRUD operations
6. **Contact**: Update contact information and social links
7. **Resume**: Manage resume information
8. **Error Logs**: Monitor and view application errors

## API Endpoints

All admin endpoints require authentication via JWT token:

- `POST /api/admin/login` - Admin login
- `GET /api/admin/stats` - Get portfolio statistics
- `PUT /api/admin/portfolio/:section` - Update portfolio section
- `GET /api/admin/errors` - Get error logs
- `DELETE /api/admin/errors` - Clear error logs

