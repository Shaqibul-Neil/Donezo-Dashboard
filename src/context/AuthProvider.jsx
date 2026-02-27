import React, { useState } from "react";
import Cookies from "js-cookie";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  //States to share user info and token
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user-info");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [userToken, setUserToken] = useState(() => Cookies.get("token"));
  const [loading, setLoading] = useState(false);

  //login function
  const login = (userInfo, token) => {
    //token save in cookie
    Cookies.set("token", token, { expires: 7 });
    setUserToken(token);
    //user info save in ls
    console.log(token);
    localStorage.setItem("user-info", JSON.stringify(userInfo));
    setUser(userInfo);
  };

  //logout function
  const logout = () => {
    //remove from ls and cookies
    Cookies.remove("token");
    localStorage.removeItem("user-info");
    //clear state
    setUser(null);
    setUserToken(null);
  };

  const authInfo = {
    user,
    userToken,
    loading,
    login,
    logout,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
