import { createContext, useState, useEffect } from "react";
import {
  signupUser,
  loginUser,
  updateUser,
  deleteUser,
} from "../controllers/user";
import {
  getArticles,
  createArticle,
  deleteArticle,
} from "../controllers/article";
import { automaticLogout } from "../libs/automaticLogout";
import PropTypes from "prop-types";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const message = "Yes!!!";
  const [user, setUser] = useState();
  const [articles, setArticles] = useState();
  const [publish, setPublish] = useState(false);

  useEffect(() => {
    if (automaticLogout() === false) {
      setUser(JSON.parse(localStorage.getItem("dataUser")));
    }
  }, []);

  useEffect(() => {
    (async () => {
      const response = await getArticles();
      const responseConvert = JSON.parse(response);
      setArticles(responseConvert);
      setPublish(false)
    })();
  }, [publish]);

  return (
    <ApiContext.Provider
      value={{
        message,
        user,
        setUser,
        signupUser,
        loginUser,
        updateUser,
        deleteUser,
        createArticle,
        deleteArticle,
        articles,
        setPublish,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

ApiContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
