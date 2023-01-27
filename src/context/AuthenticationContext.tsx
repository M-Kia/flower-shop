import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { apiHandler } from "../utils/apihandler";

import Loader from "../components/Loader";

type UserInfo = {
  id: number;
  token: string;
  firstname: string;
  lastname: string;
  mobile: string;
  email: string;
  favoriteProducts: number[];
  cartItems: number[];
};

const AuthenticationContext = createContext<{
  isLogin: boolean;
  isLoading: boolean;
  userInfo: UserInfo;
  changeLoading: (loading: boolean) => void;
  login: (userInformation: UserInfo) => void;
  logout: () => void;
}>({
  isLogin: true,
  isLoading: true,
  userInfo: {
    id: 0,
    token: "",
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    cartItems: [],
    favoriteProducts: [],
  },
  login: (userInformation: UserInfo) => {},
  changeLoading: (loading: boolean) => {},
  logout: () => {},
});

export default AuthenticationContext;

const AuthenticationProvider: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    id: 0,
    token: "",
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    cartItems: [],
    favoriteProducts: [],
  });
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function changeLoading(loading: boolean): void {
    setIsLoading(loading);
  }

  function login(userInformation: UserInfo) {
    setUserInfo(userInformation);
    setIsLogin(true);
    Cookies.set("token", userInformation.token, { expires: 7 });
  }

  function logout() {
    setUserInfo({
      id: 0,
      token: "",
      firstname: "",
      lastname: "",
      mobile: "",
      email: "",
      cartItems: [],
      favoriteProducts: [],
    });
    setIsLogin(false);
    Cookies.remove("token");
  }

  async function checkLoginInfo() {
    let token = Cookies.get("token");
    changeLoading(true);
    // token = "U2FsdGVkX18WOcJOYDZPN4LNRO0L85YqihcKkci8P5EhXzZ7jAjfWlGIoul9JQs1";

    if (token) {
      let res = await apiHandler("auth/check-login", { token }, "post");
      if (res.data.status) {
        login(res.data.result);
        Cookies.set("token", res.data.result.token, { expires: 7 });
      } else {
        Cookies.remove("token");
      }
    }
    changeLoading(false);
  }

  useEffect(() => {
    checkLoginInfo();
  }, []);
  // console.log("userInfo :>> " , userInfo);

  return (
    <AuthenticationContext.Provider
      value={{ userInfo, isLogin, isLoading, login, logout, changeLoading }}
    >
      {isLoading ? <Loader /> : null}
      {children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationProvider };
