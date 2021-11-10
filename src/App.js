import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";
import NavBar2 from"./components/NavBar2.js";
import logo from "./assets/logo.svg";
import Button from "reactstrap/lib/Button";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return ( 
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar2 />
        <Container className="flex-grow-1 mt-5">
              <center><h1>Unauth0rized... </h1></center>
              <center>{error.message}</center>
              <center>Can't find the link? Click button below to resend a verfication link.</center>
              <center><Button title ="[Insert API call here to call api/v2/jobs/verification-email]">Resend Magic Link</Button></center>
              <center><img src={logo} className="rounded-circle img-fluid profile-picture mb-3 mb-md-0" height = "100" width ="100" alt="React logo"/></center>
        </Container>
        <Footer />
      </div>
    </Router>
    )
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/external-api" component={ExternalApi} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
