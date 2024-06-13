import React, { createContext, useContext, useState, useEffect } from 'react';
import { signInUser } from '@/API/authentication/signin';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedToken = window.localStorage.getItem('token');
    const storedUser = window.localStorage.getItem('userData');

    if (storedToken) {
      setToken(storedToken);
    }

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing user data:', error.message);
        // Handle parsing error (e.g., clear invalid user data from localStorage)
        window.localStorage.removeItem('userData');
      }
    }
  }, []);

  const login = async (loginData) => {
    try {
      const userData = await signInUser(loginData);
      window.localStorage.setItem('token', userData.Token);
      window.localStorage.setItem('userData', JSON.stringify(userData['User Model']));
      setToken(userData.Token);
      setUser(userData['User Model']);
      return true; // Login successful
    } catch (error) {
      console.error('Error logging in:', error.message);
      return false; // Login failed
    }
  };

  const logout = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('userData');
    setToken(null);
    setUser(null);
  };

  const isAuthenticated = () => !!token;

  const authContextValue = {
    token,
    user,
    login,
    logout,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
