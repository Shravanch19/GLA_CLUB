import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);

    if (!storedToken) {
      // simulate delay before redirect
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000); // optional delay to show warning

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  // While loading, show spinner or message
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-md">
          <strong className="font-bold">Checking Access...</strong>
          <span className="block sm:inline">Please wait while we verify your token.</span>
        </div>
        <div className="mt-4 animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (!token) {
    return <Navigate to="/auth" replace />;
  }
  return children;
}
