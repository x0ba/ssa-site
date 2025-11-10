# Member Authentication & Portal Implementation TODO

## Overview

Implement a secure authentication system that allows only @ucsd.edu Google accounts to sign in using Firebase Authentication. The system will have separate frontend (React/Vite) and backend (Express.js) with JWT-based protected routes.

---

## Phase 1: Project Setup & Configuration

### 1.1 Backend Directory Setup

- [x] Create `/backend` directory
- [ ] Initialize backend package.json
  ```bash
  cd backend
  npm init -y
  ```
- [x] Install core dependencies
  ```bash
  npm install express cors dotenv
  npm install firebase-admin
  npm install jsonwebtoken
  npm install express-validator
  ```
- [x] Install dev dependencies
  ```bash
  npm install --save-dev typescript @types/express @types/cors @types/node ts-node nodemon
  ```

### 1.2 TypeScript Configuration (Backend)

- [ ] Create `tsconfig.json` in `/backend`
  ```json
  {
    "compilerOptions": {
      "target": "ES2020",
      "module": "commonjs",
      "lib": ["ES2020"],
      "outDir": "./dist",
      "rootDir": "./src",
      "strict": true,
      "esModuleInterop": true,
      "skipLibCheck": true,
      "forceConsistentCasingInFileNames": true,
      "resolveJsonModule": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
  }
  ```

### 1.3 Backend Project Structure

- [ ] Create directory structure:
  ```
  backend/
    src/
      config/
        firebase.ts
      middleware/
        auth.ts
        errorHandler.ts
        validateEmail.ts
      routes/
        auth.routes.ts
        protected.routes.ts
      controllers/
        auth.controller.ts
      types/
        index.ts
      utils/
        jwt.ts
      server.ts
    .env
    .env.example
  ```

### 1.4 Environment Variables Setup

- [ ] Create `/backend/.env.example`

  ```
  PORT=5000
  NODE_ENV=development

  # Firebase Admin SDK
  FIREBASE_PROJECT_ID=your-project-id
  FIREBASE_PRIVATE_KEY=your-private-key
  FIREBASE_CLIENT_EMAIL=your-client-email

  # JWT
  JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
  JWT_EXPIRE=7d

  # Frontend URL for CORS
  FRONTEND_URL=http://localhost:5173

  # Domain restriction
  ALLOWED_EMAIL_DOMAIN=ucsd.edu
  ```

- [ ] Create `/backend/.env` (copy from .env.example and fill in real values)
- [ ] Add `/backend/.env` to `.gitignore`

### 1.5 Firebase Project Setup

- [ ] Go to [Firebase Console](https://console.firebase.google.com/)
- [ ] Create a new Firebase project (or use existing)
- [ ] Enable Google Sign-In provider in Authentication > Sign-in method
- [ ] Download Firebase Admin SDK service account key:
  - Go to Project Settings > Service Accounts
  - Click "Generate New Private Key"
  - Save the JSON file securely (do NOT commit to git)
- [ ] Copy credentials to `.env`:
  - `FIREBASE_PROJECT_ID`
  - `FIREBASE_PRIVATE_KEY` (from the JSON file)
  - `FIREBASE_CLIENT_EMAIL`
- [ ] Get Firebase Web SDK config:
  - Project Settings > General > Your apps
  - Add a web app or use existing
  - Copy the config object for frontend

### 1.6 Frontend Firebase Setup

- [ ] Install Firebase SDK in frontend:
  ```bash
  cd frontend
  npm install firebase
  ```
- [ ] Create `/frontend/src/config/firebase.ts` for Firebase web SDK config
- [ ] Create `/frontend/.env` for Firebase credentials:
  ```
  VITE_FIREBASE_API_KEY=your-api-key
  VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
  VITE_FIREBASE_PROJECT_ID=your-project-id
  VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
  VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
  VITE_FIREBASE_APP_ID=your-app-id
  VITE_API_URL=http://localhost:5000
  ```

---

## Phase 2: Backend Implementation

### 2.1 Firebase Admin Configuration

- [ ] Create `/backend/src/config/firebase.ts`
  - Initialize Firebase Admin SDK
  - Export admin auth instance
  - Handle private key formatting (replace `\n` in env variable)

### 2.2 JWT Utilities

- [ ] Create `/backend/src/utils/jwt.ts`
  - `generateToken(userId: string, email: string)` - Create JWT tokens
  - `verifyToken(token: string)` - Verify and decode JWT
  - Include user claims (uid, email, role)

### 2.3 TypeScript Types

- [ ] Create `/backend/src/types/index.ts`
  - Define `AuthRequest` interface (extends Express Request)
  - Define `UserPayload` interface
  - Define custom error types

### 2.4 Middleware Implementation

#### 2.4.1 Authentication Middleware

- [ ] Create `/backend/src/middleware/auth.ts`
  - Extract Bearer token from Authorization header
  - Verify Firebase ID token
  - Verify custom JWT token (for subsequent requests)
  - Attach user to request object
  - Handle token expiration

#### 2.4.2 Email Domain Validation Middleware

- [ ] Create `/backend/src/middleware/validateEmail.ts`
  - Check if email ends with `@ucsd.edu`
  - Reject non-UCSD accounts
  - Return clear error messages

#### 2.4.3 Error Handler Middleware

- [ ] Create `/backend/src/middleware/errorHandler.ts`
  - Global error handling
  - Format error responses consistently
  - Log errors appropriately
  - Don't expose sensitive info in production

### 2.5 Authentication Controller

- [ ] Create `/backend/src/controllers/auth.controller.ts`
  - `verifyFirebaseToken` - Verify Firebase token and check email domain
  - `login` - Exchange Firebase token for custom JWT
  - `verifySession` - Check if current session is valid
  - `logout` - Handle token invalidation (optional)

### 2.6 Routes Setup

#### 2.6.1 Auth Routes

- [ ] Create `/backend/src/routes/auth.routes.ts`
  - `POST /api/auth/login` - Exchange Firebase token for JWT
  - `POST /api/auth/verify` - Verify current session
  - `POST /api/auth/logout` - Logout endpoint
  - Apply email validation middleware to login

#### 2.6.2 Protected Routes (Example)

- [ ] Create `/backend/src/routes/protected.routes.ts`
  - `GET /api/members/profile` - Get current user profile
  - `GET /api/members/directory` - Member directory (authenticated only)
  - Apply auth middleware to all routes

### 2.7 Express Server Setup

- [ ] Create `/backend/src/server.ts`
  - Initialize Express app
  - Configure CORS (whitelist frontend URL)
  - Parse JSON bodies
  - Set security headers (helmet)
  - Register routes
  - Register error handler
  - Start server

### 2.8 Package.json Scripts

- [ ] Update `/backend/package.json` scripts:
  ```json
  {
    "scripts": {
      "dev": "nodemon --exec ts-node src/server.ts",
      "build": "tsc",
      "start": "node dist/server.js",
      "lint": "eslint src --ext .ts"
    }
  }
  ```

---

## Phase 3: Frontend Implementation

### 3.1 Firebase Configuration

- [ ] Create `/frontend/src/config/firebase.ts`
  - Initialize Firebase app with web config
  - Export auth instance
  - Export Google Auth Provider

### 3.2 Authentication Context

- [ ] Create `/frontend/src/contexts/AuthContext.tsx`
  - Manage authentication state (user, loading, error)
  - `signInWithGoogle()` - Trigger Google popup sign-in
  - `logout()` - Clear tokens and sign out
  - `verifySession()` - Check if user is still authenticated
  - Store JWT in localStorage/sessionStorage
  - Provide auth state to entire app

### 3.3 API Service Layer

- [ ] Create `/frontend/src/services/api.ts`

  - Axios instance with base URL
  - Attach JWT to requests (Authorization header)
  - Handle token refresh
  - Handle 401 responses (redirect to login)

- [ ] Create `/frontend/src/services/auth.service.ts`
  - `loginWithFirebase(idToken: string)` - Exchange token with backend
  - `verifySession()` - Verify current session
  - `logout()` - Call logout endpoint

### 3.4 Protected Route Component

- [ ] Create `/frontend/src/components/auth/ProtectedRoute.tsx`
  - Wrapper component for protected routes
  - Check if user is authenticated
  - Redirect to login if not authenticated
  - Show loading state while checking auth

### 3.5 Authentication UI Components

#### 3.5.1 Login Page

- [ ] Create `/frontend/src/components/auth/Login.tsx`
  - "Sign in with Google" button
  - Handle Google sign-in flow
  - Show loading state
  - Display errors (e.g., "Must use @ucsd.edu email")
  - Redirect after successful login

#### 3.5.2 User Profile/Avatar

- [ ] Create `/frontend/src/components/auth/UserAvatar.tsx`
  - Display user photo and name
  - Dropdown menu with logout option
  - Show in NavBar when authenticated

### 3.6 Protected Pages (Examples)

#### 3.6.1 Member Directory

- [ ] Create `/frontend/src/components/members/MemberDirectory.tsx`
  - Display list of members (mock or real data)
  - Only accessible when logged in
  - Fetch data from protected backend route

#### 3.6.2 Profile Page

- [ ] Create `/frontend/src/components/members/Profile.tsx`
  - Display current user info
  - Edit profile functionality (optional)

### 3.7 Routing Setup

- [ ] Update `/frontend/src/App.tsx`
  - Wrap app with `AuthProvider`
  - Add routes:
    - `/login` - Login page
    - `/members/directory` - Protected member directory
    - `/members/profile` - Protected profile page
  - Update NavBar to show login/logout based on auth state

### 3.8 NavBar Integration

- [ ] Update `/frontend/src/components/NavBar.tsx`
  - Add "Members" dropdown (visible only when authenticated)
  - Add "Login" button (visible when not authenticated)
  - Add user avatar with logout (visible when authenticated)
  - Use `useAuth()` hook to get auth state

---

## Phase 4: Security Hardening

### 4.1 Backend Security

- [ ] Install security packages:
  ```bash
  cd backend
  npm install helmet express-rate-limit
  ```
- [ ] Implement rate limiting on auth endpoints
- [ ] Add helmet for security headers
- [ ] Validate all inputs with express-validator
- [ ] Implement CSRF protection (if using cookies)
- [ ] Set secure, httpOnly cookies for tokens (alternative to localStorage)
- [ ] Add request logging (morgan or winston)

### 4.2 Environment Security

- [ ] Ensure `.env` files are in `.gitignore`
- [ ] Never commit service account JSON files
- [ ] Use strong JWT secrets (generate with crypto.randomBytes)
- [ ] Set appropriate CORS origins (no wildcards in production)
- [ ] Verify Firebase tokens on every protected request

### 4.3 Frontend Security

- [ ] Store tokens securely (consider httpOnly cookies vs localStorage)
- [ ] Clear tokens on logout
- [ ] Implement auto-logout on token expiration
- [ ] Sanitize user inputs
- [ ] Use HTTPS in production
- [ ] Implement Content Security Policy headers

---

## Phase 5: Testing

### 5.1 Manual Testing Checklist

- [ ] Test Google sign-in with @ucsd.edu email (should succeed)
- [ ] Test Google sign-in with non-@ucsd.edu email (should fail with clear error)
- [ ] Test accessing protected routes without authentication (should redirect/fail)
- [ ] Test accessing protected routes with valid token (should succeed)
- [ ] Test token expiration (should require re-login)
- [ ] Test logout functionality
- [ ] Test session persistence (refresh page while logged in)
- [ ] Test CORS with frontend making requests to backend

### 5.2 Automated Testing (Optional but Recommended)

- [ ] Backend unit tests for middleware (Jest + Supertest)
- [ ] Backend integration tests for auth routes
- [ ] Frontend component tests (Vitest + React Testing Library)
- [ ] E2E tests with Cypress/Playwright

---

## Phase 6: Deployment Preparation

### 6.1 Backend Deployment

- [ ] Create production environment variables
- [ ] Configure production Firebase project (or use same project)
- [ ] Set up backend hosting (Railway, Render, Heroku, AWS, etc.)
- [ ] Configure production CORS origins
- [ ] Set `NODE_ENV=production`
- [ ] Enable HTTPS
- [ ] Set up monitoring/logging (optional: Sentry)

### 6.2 Frontend Deployment

- [ ] Update API_URL to production backend URL
- [ ] Configure Vercel environment variables
- [ ] Update Firebase authorized domains in Firebase Console
- [ ] Build and deploy frontend
- [ ] Test production authentication flow

### 6.3 Firebase Console Configuration

- [ ] Add production domain to authorized domains
- [ ] Configure OAuth consent screen
- [ ] Set up usage quotas and billing alerts
- [ ] Review security rules

---

## Phase 7: Additional Features (Optional Enhancements)

### 7.1 Role-Based Access Control (RBAC)

- [ ] Add user roles to database (admin, member, board)
- [ ] Store roles in JWT claims
- [ ] Create role-based middleware
- [ ] Implement admin-only routes
- [ ] Create admin dashboard

### 7.2 Database Integration

- [ ] Choose database (Firestore, MongoDB, PostgreSQL)
- [ ] Create user model/schema
- [ ] Store user profiles in database
- [ ] Sync Firebase users with database on first login
- [ ] Add member directory data

### 7.3 Advanced Features

- [ ] Email verification requirement
- [ ] Password reset (if using email/password auth as fallback)
- [ ] Multi-factor authentication
- [ ] Session management (view active sessions, logout all devices)
- [ ] Audit logs for authentication events
- [ ] User profile pictures from Google account

### 7.4 Member Portal Features

- [ ] Event RSVP system (for authenticated members)
- [ ] Member-only announcements/news
- [ ] File sharing/resources section
- [ ] Forum or discussion board
- [ ] Member profile pages

---

## Quick Start Commands

### Start Development

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### Environment Check

- Backend should run on: http://localhost:5000
- Frontend should run on: http://localhost:5173
- Backend API endpoints: http://localhost:5000/api/\*

---

## Key Security Principles

1. **Never trust the client** - Always verify tokens server-side
2. **Validate email domain server-side** - Client-side validation is not enough
3. **Use HTTPS in production** - No exceptions
4. **Keep secrets secret** - Never commit .env files or service account keys
5. **Hash and salt passwords** - If you add email/password auth later
6. **Implement rate limiting** - Prevent brute force attacks
7. **Use short-lived tokens** - Reduce impact of token theft
8. **Validate all inputs** - Prevent injection attacks
9. **Follow least privilege** - Users only access what they need
10. **Keep dependencies updated** - Regular security patches

---

## Troubleshooting Common Issues

### "Email domain not allowed"

- Verify `ALLOWED_EMAIL_DOMAIN=ucsd.edu` in backend .env
- Check middleware is properly validating email

### CORS errors

- Ensure `FRONTEND_URL` matches your frontend URL exactly
- Check CORS middleware configuration in server.ts

### Firebase token verification fails

- Verify Firebase service account credentials
- Check private key formatting (replace `\\n` with actual newlines)
- Ensure Firebase project ID matches

### JWT errors

- Verify `JWT_SECRET` is set
- Check token is being sent in Authorization header as `Bearer <token>`
- Verify token hasn't expired

### "Cannot connect to backend"

- Ensure backend server is running on correct port
- Check `VITE_API_URL` in frontend .env
- Verify no firewall blocking localhost connections

---

## Resources & Documentation

- [Firebase Authentication Docs](https://firebase.google.com/docs/auth)
- [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)
- [Express.js Documentation](https://expressjs.com/)
- [JWT Best Practices](https://tools.ietf.org/html/rfc8725)
- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)

---

## Success Criteria

✅ Users can sign in with @ucsd.edu Google accounts only
✅ Non-UCSD accounts are rejected with clear error message
✅ Authenticated users receive JWT tokens
✅ Protected routes are inaccessible without valid tokens
✅ Tokens expire and require re-authentication
✅ Frontend UI reflects authentication state
✅ Logout clears tokens and redirects appropriately
✅ No sensitive credentials in git repository
✅ CORS properly configured
✅ System works in both development and production

---

**Next Steps:** Start with Phase 1 and work through systematically. Don't skip the security steps!
