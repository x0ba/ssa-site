# Quick Start: Authentication

This is a quick reference guide to get authentication working in 5 minutes.

## Prerequisites

1. Supabase account: [https://app.supabase.com](https://app.supabase.com)
2. Google Cloud Console account: [https://console.cloud.google.com](https://console.cloud.google.com)

## Setup Steps

### 1. Configure Google OAuth (5 minutes)

**In Google Cloud Console:**

1. Create a new project (or use existing)
2. Enable **Google+ API**
3. Go to **Credentials** → **Create Credentials** → **OAuth 2.0 Client ID**
4. Set **Application type** to **Web application**
5. Add **Authorized redirect URIs**:
   ```
   https://YOUR-PROJECT-REF.supabase.co/auth/v1/callback
   ```
6. Copy the **Client ID** and **Client Secret**

**In Supabase Dashboard:**

1. Go to **Authentication** → **Providers**
2. Find **Google** and enable it
3. Paste your **Google Client ID** and **Client Secret**
4. Save

### 2. Configure Redirect URLs in Supabase

Go to **Authentication** → **URL Configuration**:

- **Site URL**: `http://localhost:5173` (for development)
- **Redirect URLs**: Add these:
  ```
  http://localhost:5173/dashboard
  https://ssaucsd.org/dashboard
  ```

### 3. Set Environment Variables

Create `.env` file in `/frontend`:

```bash
VITE_SUPABASE_URL=https://YOUR-PROJECT-REF.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

Get these from: **Supabase Dashboard** → **Settings** → **API**

### 4. Start Development Server

```bash
cd frontend
npm install
npm run dev
```

### 5. Test Authentication

1. Open [http://localhost:5173/dashboard](http://localhost:5173/dashboard)
2. Click **"Sign in with Google"**
3. Approve Google consent screen
4. You should be redirected back and see your profile!

## Verify It's Working

### Success Checklist

- [ ] Clicking "Sign in with Google" redirects to Google
- [ ] After approving, you're redirected back to dashboard
- [ ] You see your name and email on the dashboard
- [ ] Refreshing the page keeps you logged in
- [ ] "Sign Out" button logs you out

### Troubleshooting

**"Missing Supabase environment variables"**
- Check that `.env` file exists in `frontend/` directory
- Restart dev server after creating `.env`

**Google redirect fails**
- Verify redirect URL in Google Cloud Console matches Supabase callback URL exactly
- Check that Google OAuth is enabled in Supabase dashboard

**Still getting errors?**
- Check browser console for detailed error messages
- Verify Supabase project is active (not paused)
- Ensure you're using the correct Supabase URL and anon key

## What Was Implemented

### Files Created/Modified

**Created:**
- `src/contexts/AuthContext.tsx` - Authentication state management
- `src/components/ProtectedRoute.tsx` - Route protection wrapper
- `src/components/dashboard/Dashboard.tsx` - Dashboard with login UI
- `src/components/dashboard/Dashboard.scss` - Dashboard styling
- `.env.example` - Environment variables template

**Modified:**
- `src/supabase-client.ts` - Added session persistence config
- `src/main.tsx` - Wrapped app with AuthProvider
- `src/components/AppRoutes.tsx` - Already had dashboard route

### Features Included

✅ Google OAuth sign-in flow
✅ Session persistence (stays logged in after refresh)
✅ Auto-refresh tokens
✅ Protected route component (ready to use)
✅ User profile display
✅ Sign-out functionality
✅ Loading states
✅ Error handling
✅ Professional UI matching site design

## Using Authentication in Your Code

### Get Current User

```tsx
import { useAuth } from "../contexts/AuthContext";

function MyComponent() {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Please sign in</div>;

  return <div>Hello, {user.email}!</div>;
}
```

### Protect a Route

```tsx
import ProtectedRoute from "./components/ProtectedRoute";

<Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminPanel />
    </ProtectedRoute>
  }
/>
```

### Sign In/Out Programmatically

```tsx
const { signInWithGoogle, signOut } = useAuth();

// Trigger sign-in
await signInWithGoogle();

// Trigger sign-out
await signOut();
```

## Next Steps

- [ ] Test authentication in production (update Site URL in Supabase)
- [ ] Add email/password authentication (optional)
- [ ] Create database tables for user data
- [ ] Add more protected routes as needed
- [ ] Customize dashboard with your features

## Need Help?

See the full documentation: [AUTH_SETUP.md](./AUTH_SETUP.md)
