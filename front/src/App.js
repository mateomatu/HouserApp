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
import BurgerMenu from "./components/Layout/BurgerMenu";

function App() {
  const [auth, setAuth] = useState(AuthService.getLoggedUser());
  const [showSidebar, setShowSidebar] = useState(false)
  const authCtx = useContext(AuthContext);
  const userIsLogged = AuthService.isLogged();

  const showCartHandler = (open) => {
    setShowSidebar(open);
  }
  const closeCartHandler = (close) => {
    setShowSidebar(close);
  }

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
          { showSidebar && <BurgerMenu onCloseSidebar={closeCartHandler}/>} 
          <Header onOpenSidebar={showCartHandler} />
          <Switch>
            <Route path="/login" exact>
              { userIsLogged && <Redirect to="/" />}
              { !userIsLogged && <LoginPage />}
            </Route>
            <Route path="/" exact>
              { userIsLogged && <Redirect to="/home" />}
              { !userIsLogged && <Redirect to="/login" />}
            </Route>
            <Route path="/home">
              { userIsLogged && <HomePage />}
              { !userIsLogged && <Redirect to="/login" />}
            </Route>
            <Route path="/profile/">
              { userIsLogged && <ProfilePage />}
              { !userIsLogged && <Redirect to="/login" />}
            </Route>
            <Route path="/notifications/">
              { userIsLogged && <NotificationsPage />}
              { !userIsLogged && <Redirect to="/login" />}
            </Route>
            <Route path="/services/:serviceId">
              { userIsLogged && <LookForHousersPage />}
              { !userIsLogged && <Redirect to="/login" />}
            </Route>
          </Switch>
        </div>
        {userIsLogged && <Navbar />}
      </AuthContext.Provider>
    </Fragment>
  );
}

export default App;
