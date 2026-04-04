import React, { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { googleLogout } from "@react-oauth/google";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("google_credential");
    const storedUser = localStorage.getItem("google_user");
    
    if (storedToken && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
        setToken(storedToken);
      } catch (err) {
        logout();
      }
    } else if (storedToken) {
        try {
            const decoded = jwtDecode(storedToken);
            if (decoded.exp * 1000 > Date.now()) {
              setUser(decoded);
              setIsAuthenticated(true);
              setToken(storedToken);
            } else {
              logout();
            }
        } catch(e) { logout(); }
    }
  }, []);

  const handleLoginSuccess = async (tokenResponse) => {
    // Handle both id_token and access_token flows
    let storedToken = tokenResponse.access_token || tokenResponse.credential;
    
    if (tokenResponse.access_token) {
        try {
          const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
              headers: { Authorization: `Bearer ${storedToken}` }
          });
          const payload = await response.json();
          setUser(payload);
          setToken(storedToken);
          setIsAuthenticated(true);
          localStorage.setItem("google_credential", storedToken);
          localStorage.setItem("google_user", JSON.stringify(payload));
        } catch(e) { console.error("Failed to fetch user profile", e); }
    } else if (tokenResponse.credential) {
        const decoded = jwtDecode(storedToken);
        setUser(decoded);
        setIsAuthenticated(true);
        setToken(storedToken);
        localStorage.setItem("google_credential", storedToken);
    }
  };

  const logout = () => {
    googleLogout();
    localStorage.removeItem("google_credential");
    localStorage.removeItem("google_user");
    setUser(null);
    setIsAuthenticated(false);
    setToken(null);
  };

  const getAccessTokenSilently = async () => {
    return token;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, handleLoginSuccess, logout, getAccessTokenSilently }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
