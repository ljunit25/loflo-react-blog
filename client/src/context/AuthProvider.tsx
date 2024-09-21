import { createContext, Dispatch, ReactNode, useEffect, useState } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

type AuthContextType = {
  auth: { username: string; email: string; _id: string };
  setAuth: Dispatch<
    React.SetStateAction<{ username: string; email: string; _id: string }>
  >;
  isLogged: boolean;
  setIsLogged: Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextType>({
  auth: { username: "", email: "", _id: "" },
  setAuth: () => {},
  isLogged: false,
  setIsLogged: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const [auth, setAuth] = useState({
    username: "",
    email: "",
    _id: "",
  });


  useEffect(() => {
    const userInfoJSON = window.localStorage.getItem("loggedUserInfo");

    if (userInfoJSON) {
      const userData = JSON.parse(userInfoJSON);
      setAuth(userData);
      setIsLogged(true);
    }
  }, []);



  return (
    <AuthContext.Provider value={{ auth, setAuth, isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;