import React, { Fragment, useContext, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

/* Components */
import Header from "./components/Layout/Header";
import Navbar from "./components/Layout/Navbar";

/* Pages */
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import NotificationsPage from "./pages/NotificationsPage";
import LookForHousersPage from "./pages/LookForHousersPage";
import LoginPage from "./pages/LoginPage";

/* Services */
import AuthService, { AuthContext } from "./services/User/User-service";

/* Styles */
import "./App.css";

function App() {
  const [auth, setAuth] = useState(AuthService.getLoggedUser());
  const authCtx = useContext(AuthContext);
  const userIsLogged = AuthService.isLogged();

  return (
    <Fragment>
      <AuthContext.Provider
        value={{
          user: auth,
          updateAuthState(data) {
            setAuth(data);
          },
        }}
      >
        <div className="content">
          <Header />
          <Switch>
            <Route path="/login" exact>
              <LoginPage />
            </Route>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/profile/">
              <ProfilePage />
            </Route>
            <Route path="/notifications/">
              <NotificationsPage />
            </Route>
            <Route path="/services/:serviceId">
              <LookForHousersPage />
            </Route>
          </Switch>
        </div>
        {userIsLogged && <Navbar />}
      </AuthContext.Provider>
    </Fragment>
  );
}

export default App;
