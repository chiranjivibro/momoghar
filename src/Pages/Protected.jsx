import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";  // Assuming you're using Auth0

function Protected({ Comp }) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth0(); // Check if the user is authenticated

  useEffect(() => {
    // Redirect to login if the user is not authenticated and is not in loading state
    if (!isLoading && !isAuthenticated) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated, isLoading]);

  // Show a loading spinner or some kind of loading state while checking authentication status
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <Comp />; // Render the protected component if the user is authenticated
}

export default Protected;
