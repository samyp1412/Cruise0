import React from "react";

import boatLogo from "../assets/Capture.PNG"

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={boatLogo} alt="Customer logo" width="120" />
    <h1 className="mb-4">Ahoy! Come Journey with us to Modernization.</h1>

    <p className="lead">
      This is a Proof of Concept prepared for Travel0 to demonstrate modernization features of Auth0. This is prepared using <a href="https://reactjs.org">React.js</a>
    </p>
  </div>
);

export default Hero;
