# Authentication Setup Guide

This document provides a complete guide for the Google OAuth authentication system using Supabase.

## Overview

The SSA website now includes a complete authentication system with the following features:

- **Google OAuth Sign-In**: Users can authenticate using their Google accounts
- **Session Persistence**: Authentication state persists across browser refreshes
- **Protected Routes**: Ability to restrict access to authenticated users only
- **Auto-refresh Tokens**: Sessions automatically refresh to keep users logged in
- **Secure Implementation**: Uses Supabase's PKCE flow for enhanced security

## Architecture

### Components

1. **Supabase Client** ([supabase-client.ts](src/supabase-client.ts))
   - Configured with session persistence and auto-refresh
   - Uses PKCE flow for OAuth security
   - Detects sessions in URL for OAuth callbacks

2. **Auth Context** ([contexts/AuthContext.tsx](src/contexts/AuthContext.tsx))
   - React Context for global authentication state management
   - Provides `useAuth()` hook for accessing auth state
   - Manages user session lifecycle
   - Handles authentication state changes

3. **Protected Route Component** ([components/ProtectedRoute.tsx](src/components/ProtectedRoute.tsx))
   - Wrapper component for routes requiring authentication
   - Redirects unauthenticated users to login
   - Shows loading screen during authentication check

4. **Dashboard Component** ([components/dashboard/Dashboard.tsx](src/components/dashboard/Dashboard.tsx))
   - Login page with Google OAuth button
   - Authenticated user dashboard
   - User profile display
   - Sign-out functionality

### Authentication Flow

#### Sign-In Flow
1. User clicks "Sign in with Google" button
2. `signInWithGoogle()` initiates OAuth flow with Supabase
3. User is redirected to Google's consent screen
4. After approval, Google redirects back to `/dashboard`
5. Supabase processes the OAuth callback
6. `AuthContext` detects session and updates state
7. User is now authenticated and sees dashboard content

#### Session Persistence
1. On app load, `AuthContext` checks for existing session
2. If valid session exists, user is automatically logged in
3. Tokens are stored securely in browser storage
4. Sessions automatically refresh before expiration

#### Sign-Out Flow
1. User clicks "Sign Out" button
2. `signOut()` calls Supabase auth.signOut()
3. Session is cleared from browser storage
4. `AuthContext` updates state to unauthenticated
5. User sees login screen

## Supabase Configuration

### 1. Create Supabase Project

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Create a new project or select existing project
3. Note your project URL and anon key from Settings → API

### 2. Configure Google OAuth Provider

1. In Supabase Dashboard, go to **Authentication → Providers**
2. Find **Google** in the provider list
3. Enable Google provider
4. Configure the following:

   **Google Cloud Console Setup:**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project or select existing project
   - Enable Google+ API
   - Go to **Credentials** → **Create Credentials** → **OAuth 2.0 Client ID**
   - Application type: **Web application**
   - Add authorized redirect URIs:
     ```
     https://<your-project-ref>.supabase.co/auth/v1/callback
     ```
   - Copy the Client ID and Client Secret

   **Supabase Configuration:**
   - Paste Google Client ID in Supabase
   - Paste Google Client Secret in Supabase
   - Save the configuration

### 3. Configure Redirect URLs

In Supabase Dashboard, go to **Authentication → URL Configuration**:

- **Site URL**: `https://ssaucsd.org` (production) or `http://localhost:5173` (development)
- **Redirect URLs**: Add the following:
  ```
  https://ssaucsd.org/dashboard
  http://localhost:5173/dashboard
  ```

### 4. Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

Required variables:
```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

**Important**: Never commit the `.env` file to version control. It's already in `.gitignore`.

## Usage

### Accessing Authentication State

Use the `useAuth()` hook in any component:

```tsx
import { useAuth } from "../contexts/AuthContext";

function MyComponent() {
  const { user, session, loading, signInWithGoogle, signOut, error } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <button onClick={signInWithGoogle}>Sign In</button>;
  }

  return (
    <div>
      <p>Welcome, {user.email}!</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
```

### Creating Protected Routes

Wrap any route content with `ProtectedRoute` component:

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

### User Object Structure

The authenticated user object includes:

```typescript
{
  id: string;                    // Supabase user ID
  email: string;                 // User email
  user_metadata: {
    avatar_url?: string;         // Google profile picture
    email?: string;              // Email from Google
    email_verified?: boolean;    // Email verification status
    full_name?: string;          // Full name from Google
    iss?: string;                // Issuer
    name?: string;               // Display name
    picture?: string;            // Profile picture URL
    provider_id?: string;        // Google provider ID
    sub?: string;                // Subject identifier
  };
  app_metadata: {
    provider?: string;           // "google"
    providers?: string[];        // ["google"]
  };
}
```

## Development

### Running Locally

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Configure environment variables (see above)

3. Start development server:
   ```bash
   npm run dev
   ```

4. Navigate to `http://localhost:5173/dashboard` to test authentication

### Testing Authentication

1. Click "Sign in with Google"
2. You'll be redirected to Google's consent screen
3. After approving, you'll be redirected back to the dashboard
4. Verify you see your profile information
5. Refresh the page - you should remain logged in
6. Click "Sign Out" - you should see the login screen

## Security Considerations

### Best Practices Implemented

1. **Client-Side Only**: Only the public anon key is used in the frontend
2. **PKCE Flow**: Enhanced OAuth security with Proof Key for Code Exchange
3. **Secure Storage**: Sessions stored using Supabase's secure storage
4. **Auto-Refresh**: Tokens automatically refresh to prevent expiration
5. **Error Handling**: Comprehensive error handling for failed authentication

### Row Level Security (RLS)

If you plan to store user data in Supabase database:

1. Always enable RLS on tables containing user data
2. Create policies to restrict access based on `auth.uid()`
3. Example policy:
   ```sql
   CREATE POLICY "Users can only access their own data"
   ON user_data
   FOR ALL
   USING (auth.uid() = user_id);
   ```

### Environment Variables

- Never commit `.env` file
- Use different Supabase projects for development and production
- Rotate keys if they're accidentally exposed
- The anon key is safe to use client-side (it's public)

## Troubleshooting

### "Missing Supabase environment variables"

- Ensure `.env` file exists in `frontend/` directory
- Verify `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set
- Restart the development server after adding variables

### OAuth Redirect Fails

- Verify redirect URL is configured in Supabase dashboard
- Check that Google OAuth credentials are correctly entered
- Ensure Site URL matches your domain

### User Not Persisting After Refresh

- Check browser console for errors
- Verify `persistSession: true` in supabase-client.ts
- Clear browser cache and cookies, then try again

### "Failed to sign in with Google"

- Check Supabase project status
- Verify Google OAuth provider is enabled
- Check browser console for detailed error messages
- Ensure redirect URLs are correct in both Google Cloud Console and Supabase

## Extending the System

### Adding Email/Password Authentication

```tsx
// In AuthContext.tsx, add new methods:
const signUpWithEmail = async (email: string, password: string) => {
  const { error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
};

const signInWithEmail = async (email: string, password: string) => {
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
};
```

### Adding More OAuth Providers

Supabase supports many OAuth providers. To add another:

1. Enable provider in Supabase dashboard
2. Configure provider credentials
3. Add sign-in method in `AuthContext`:
   ```tsx
   const signInWithGitHub = async () => {
     const { error } = await supabase.auth.signInWithOAuth({
       provider: "github",
       options: { redirectTo: `${window.location.origin}/dashboard` }
     });
     if (error) throw error;
   };
   ```

### Storing User Data

Create a database table and insert user data on sign-up:

```sql
-- Create users table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  email TEXT,
  full_name TEXT,
  avatar_url TEXT
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policy
CREATE POLICY "Users can view their own profile"
ON profiles FOR SELECT
USING (auth.uid() = id);
```

Then in your app:
```tsx
useEffect(() => {
  if (user) {
    // Insert or update user profile
    supabase.from("profiles").upsert({
      id: user.id,
      email: user.email,
      full_name: user.user_metadata?.full_name,
      avatar_url: user.user_metadata?.avatar_url,
    });
  }
}, [user]);
```

## Additional Resources

- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [Supabase OAuth Guide](https://supabase.com/docs/guides/auth/social-login)
- [React Authentication Patterns](https://supabase.com/docs/guides/auth/auth-helpers/auth-ui)
- [Google OAuth Setup](https://support.google.com/cloud/answer/6158849)

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review Supabase logs in the dashboard
3. Check browser console for errors
4. Consult Supabase documentation
