import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

/* Components */
import Header from "./components/Layout/Header";
import Navbar from "./components/Layout/Navbar";

/* Pages */
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import NotificationsPage from "./pages/NotificationsPage";
import LookForHousersPage from "./pages/LookForHousersPage";

/* Styles */
import './App.css';

function App() {
  return (
    <Fragment>
      <div className="content">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/profile/:userId">
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
      <Navbar />
    </Fragment>
  );
}

export default App;
