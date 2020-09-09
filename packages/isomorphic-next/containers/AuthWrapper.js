import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
const AuthContext = createContext();

function AuthProvider({ children }) {
  const router = useRouter();
  const { pathname, events } = router;
  const [user, setUser] = useState();

  useEffect(() => {
    const userpilotUser = window.localStorage.getItem('userpilotUser');
    const profile = JSON.parse(userpilotUser);
    setUser(profile);
  }, [pathname]);

  useEffect(() => {
    // Check that a new route is OK
    const handleRouteChange = (url) => {
      if (user && user.userid && (url === '/' || url === '/signin')) {
        // window.location.href = '/dashboard'
        router.push('/dashboard');
      }
    };

    // Check that initial route is OK
    if (
      (pathname === '/' || pathname === '/signin') &&
      window.localStorage.getItem('userpilotUser')
    ) {
      // window.location.href = '/dashboard'
      router.push('/dashboard');
    }
    if (user) {
      // Monitor routes
      events.on('routeChangeStart', handleRouteChange);
      return () => {
        events.off('routeChangeStart', handleRouteChange);
      };
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
