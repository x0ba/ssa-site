import { Container, Card, Button, Alert, Spinner } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import "./Dashboard.scss";

function Dashboard() {
  const { user, signInWithGoogle, signOut, error: authError } = useAuth();
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async () => {
    try {
      setError(null);
      setIsSigningIn(true);
      await signInWithGoogle();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to sign in with Google"
      );
      setIsSigningIn(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setError(null);
      setIsSigningOut(true);
      await signOut();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to sign out");
    } finally {
      setIsSigningOut(false);
    }
  };

  // Login screen when not authenticated
  if (!user) {
    return (
      <Container className="dashboard-container py-5">
        <div className="d-flex justify-content-center align-items-center min-vh-75">
          <Card className="auth-card shadow-lg">
            <Card.Body className="p-5 text-center">
              <div className="mb-4">
                <h1 className="display-5 fw-bold mb-3">Dashboard Login</h1>
                <p className="text-muted">
                  Sign in with your Google account to access the SSA dashboard
                </p>
              </div>

              {(error || authError) && (
                <Alert variant="danger" className="mb-4">
                  {error || authError?.message}
                </Alert>
              )}

              <Button
                variant="secondary"
                size="lg"
                onClick={handleSignIn}
                disabled={isSigningIn}
                className="w-100 d-flex align-items-center justify-content-center gap-3"
              >
                {isSigningIn ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    <span>Sign in with Google</span>
                  </>
                )}
              </Button>

              <div className="mt-4 text-muted">
                <small>Secure authentication powered by Supabase</small>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    );
  }

  // Dashboard content when authenticated
  return (
    <Container className="dashboard-container py-5">
      <div className="dashboard-header mb-5">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h1 className="display-4 fw-bold mb-2">Dashboard</h1>
            <p className="lead text-muted">
              Welcome back, {user.user_metadata?.full_name || user.email}!
            </p>
          </div>
          <Button
            variant="outline-secondary"
            onClick={handleSignOut}
            disabled={isSigningOut}
          >
            {isSigningOut ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className="me-2"
                />
                Signing out...
              </>
            ) : (
              "Sign Out"
            )}
          </Button>
        </div>
      </div>

      {error && (
        <Alert variant="danger" dismissible onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <h5 className="card-title mb-3">User Profile</h5>
              <div className="user-info">
                {user.user_metadata?.avatar_url && (
                  <img
                    src={user.user_metadata.avatar_url}
                    alt="Profile"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                )}
                <p className="mb-2">
                  <strong>Name:</strong>{" "}
                  {user.user_metadata?.full_name || "N/A"}
                </p>
                <p className="mb-2">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="mb-0">
                  <strong>Provider:</strong>{" "}
                  {user.app_metadata?.provider || "N/A"}
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6 col-lg-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <h5 className="card-title mb-3">Quick Actions</h5>
              <div className="d-flex flex-column gap-2">
                <Button variant="outline-secondary" size="sm">
                  View Events
                </Button>
                <Button variant="outline-secondary" size="sm">
                  Manage Members
                </Button>
                <Button variant="outline-secondary" size="sm">
                  Settings
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-12 col-lg-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <h5 className="card-title mb-3">Recent Activity</h5>
              <p className="text-muted">No recent activity to display.</p>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="mt-5">
        <Card className="shadow-sm">
          <Card.Body>
            <h5 className="card-title mb-3">Getting Started</h5>
            <p className="text-muted">
              Welcome to the SSA Dashboard! This is a protected area that
              requires authentication. You can add more functionality and
              features here as needed.
            </p>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default Dashboard;
