import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationList"
import { Route, Link } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Header />
      
      <Link to={"/"} className="link">
        Home{' '}
      </Link>
      <Link to={"/characters"} className="link">
        Characters{' '}
      </Link>
      <span>&nbsp;</span>
      <Link to={"/locations"} className="link">
        Locations
      </Link>

      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route path="/characters">
        <CharacterList />
      </Route>
      <Route path="/locations">
        <LocationList />
      </Route>
    </main>
  );
}