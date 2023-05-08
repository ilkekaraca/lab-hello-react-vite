// src/App.js

import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="navbar-img">
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png"
            alt="logo1"
          />
        </div>
        <div className="nav-img-2">
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png"
            alt="menu"
          />
        </div>
        <div>
          <h1>Say hello to ReactJS</h1>
          <h3>
            You will learn how to use this popular libary and become a master
          </h3>
          <Button btntext={"Awesome"} />
        </div>
      </div>
      <div className="gallery">
        <div className="gallery-1">
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
            alt="wrench-card"
          />
          <h3>Declarative</h3>
          <h4>React makes it painless to create interactive UI`s</h4>
        </div>
        <div className="gallery-1">
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
            alt="screw-driver-card"
          />
          <h3>Components</h3>
          <h4>Build encapsulated components that manage their state</h4>
        </div>
        <div className="gallery-1">
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
            alt="gear-card"
          />
          <h3>Single way</h3>
          <h4>A set of immutable values are passed to the componetn`s</h4>
        </div>
        <div className="gallery-1">
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
            alt="coding-card"
          />
          <h3>JSX</h3>
          <h4>Statically-typed designed to run on modern browsers</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
