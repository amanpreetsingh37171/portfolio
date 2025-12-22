# How to Change Admin Username and Password

## Method 1: Using Environment Variables (Recommended)

### Step 1: Create or Edit `.env` File

Create a `.env` file in the root directory (`Portfolio/Portfolio/.env`) if it doesn't exist, or edit the existing one.

### Step 2: Add Admin Credentials

Add these lines to your `.env` file:

```env
ADMIN_USERNAME=your_username_here
ADMIN_PASSWORD=your_secure_password_here
```

**Example:**
```env
ADMIN_USERNAME=myadmin
ADMIN_PASSWORD=MySecureP@ssw0rd123!
```

### Step 3: Restart the Server

After saving the `.env` file, restart the server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

Or restart just the server:
```bash
cd server
npm start
```

### Step 4: Test the New Credentials

1. Go to http://localhost:5001
2. Try logging in with your new username and password

---

## Method 2: Direct Code Modification (Not Recommended for Production)

If you want to change the default credentials directly in code:

1. Open `server/src/routes/admin.js`
2. Find these lines (around line 11-12):
   ```javascript
   const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
   const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
   ```
3. Change the default values:
   ```javascript
   const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'your_new_username';
   const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'your_new_password';
   ```
4. Restart the server

⚠️ **Warning:** This method is not secure for production. Always use environment variables!

---

## Current Configuration

The admin credentials are configured in:
- **File:** `server/src/routes/admin.js`
- **Lines:** 11-12

The system checks for environment variables first:
- `ADMIN_USERNAME` - Your custom username
- `ADMIN_PASSWORD` - Your secure password

If these environment variables are not set, it falls back to:
- Username: `admin`
- Password: `admin123`

---

## Security Best Practices

1. ✅ **Use strong passwords:**
   - At least 12 characters
   - Mix of uppercase, lowercase, numbers, and symbols
   - Example: `MyP@ssw0rd!2024`

2. ✅ **Never commit `.env` to Git:**
   - The `.env` file is already in `.gitignore`
   - Never share your credentials publicly

3. ✅ **Use different credentials for production:**
   - Use strong, unique credentials for production
   - Never use default credentials in production

4. ✅ **Change JWT Secret too:**
   - Also set `JWT_SECRET` in `.env` for better security
   - Example: `JWT_SECRET=your-super-secret-key-here`

---

## Complete `.env` File Example

```env
# Server Configuration
PORT=3001
MONGODB_URI=your_mongodb_connection_string_here

# Admin Credentials (CHANGE THESE!)
ADMIN_USERNAME=myadmin
ADMIN_PASSWORD=MySecureP@ssw0rd123!

# JWT Secret (CHANGE THIS TOO!)
JWT_SECRET=your-super-secret-jwt-key-change-this

# Client Configuration
VITE_API_URL=http://localhost:3001
```

---

## Troubleshooting

### Credentials Not Working?

1. **Check `.env` file location:**
   - Must be in the root directory: `Portfolio/Portfolio/.env`
   - Not in `server/` or `client/` folders

2. **Restart the server:**
   - Environment variables are loaded when the server starts
   - Changes won't take effect until you restart

3. **Check for typos:**
   - Make sure variable names are exactly: `ADMIN_USERNAME` and `ADMIN_PASSWORD`
   - No spaces around the `=` sign

4. **Verify the file format:**
   - No quotes needed around values
   - One variable per line
   - No trailing spaces

### Still Having Issues?

Check the server console output when starting. It should show if environment variables are being loaded correctly.

