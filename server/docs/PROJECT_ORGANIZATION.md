# Project Organization

## Directory Structure

The project is organized with everything enclosed within three main folders (`client/`, `server/`, `admin/`), with only essential files in the root directory.

### Root Directory

Only these files should be in the root:
- `.gitignore` - Git ignore rules
- `README.md` - Main project documentation
- `LICENSE` - License file (if applicable)

**Note:** The following files remain in root for functional reasons:
- `package.json` - Required for running all services together with `npm run dev`
- `package-lock.json` - Dependency lock file
- `node_modules/` - Root dependencies (concurrently package)

These are necessary for the monorepo setup to work properly.

### Client Folder (`client/`)

Contains the React frontend application:
- All React components
- Styles and assets
- Public files (resume PDFs, images)
- Configuration files (vite.config.js, tailwind.config.js)

### Server Folder (`server/`)

Contains the Express backend application:
- Source code (`src/`)
- Documentation (`docs/`)
- Configuration files
- `.env.example` - Environment variables template
- `.env` - Environment variables (create this, already in .gitignore)

### Admin Folder (`admin/`)

Contains the React admin panel application:
- All admin components
- Styles and configuration
- Admin-specific documentation

## Environment Variables

The `.env` file should be created in the `server/` directory:
1. Copy `server/.env.example` to `server/.env`
2. Fill in your actual values
3. The `.env` file is already in `.gitignore` and won't be committed

The `dotenv/config` package will automatically load the `.env` file from the server directory when the server starts.

## Documentation

All documentation files are located in `server/docs/`:
- `SETUP.md` - Setup guide
- `CHANGE_ADMIN_CREDENTIALS.md` - How to change admin credentials
- `GITHUB_SECURITY_CHECKLIST.md` - Security checklist
- `PROJECT_STRUCTURE.md` - Structure overview
- `PROJECT_ORGANIZATION.md` - This file

## Running the Project

From the root directory:
```bash
npm run dev          # Start all three services
npm run install-all  # Install all dependencies
```

Individual services:
```bash
npm run server  # Start server only
npm run client  # Start client only
npm run admin   # Start admin only
```

## GitHub Upload

When uploading to GitHub:
- ✅ Only `.gitignore`, `README.md`, and `LICENSE` should be visible in root
- ✅ All code is in `client/`, `server/`, `admin/`
- ✅ All documentation is in `server/docs/`
- ✅ `.env` file is ignored and won't be committed
- ✅ `.env.example` is in `server/` as a template

