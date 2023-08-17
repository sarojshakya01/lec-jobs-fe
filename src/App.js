import { useState } from "react";
import "./App.css";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const loginUser = (user) => {
    setUserLoggedIn(true);
    setUser(user);
    window.sessionStorage.setItem("loggedInUser", JSON.stringify(user));
    window.sessionStorage.setItem("isLoggedIn", "true");
  };

  let userTemp = user;
  let userLoggedInTemp = userLoggedIn;
  if (!Object.keys(user).length || !userLoggedIn) {
    userTemp = window.sessionStorage.getItem("loggedInUser");
    userLoggedInTemp = window.sessionStorage.getItem("isLoggedIn") === "true";
    if (userLoggedInTemp) {
      userTemp = JSON.parse(userTemp);
    }
  }

  if (userLoggedInTemp) {
    return <Home user={userTemp} />;
  } else {
    return <Login loginUser={loginUser} />;
  }
};

export default App;
