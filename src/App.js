import React from "react";
import TabNav from "./components/views/Tabs/TabNav.js";
import Header from "./components/Header.js";
import { panes } from "./components/views/Tabs/TabComponents.js";
import Home from './components/views/Home/Home';
import Characters from './components/views/Characters/Characters';
import Locations from './components/views/Locations/Locations';
import Episodes from './components/views/Episodes/Episodes';


import { Route } from "react-router-dom";

// const characters = getCharacters();
// const locations = getLocations();
// const episodes = getEpisodes();
export default function App() {
  return (
    <main>
      <Header />
      <TabNav panes={panes} />
      <Route path="/" exact render={()=><Home />}  />
      <Route path="/character" render={()=><Characters />} />
      <Route path="/location" render={()=><Locations />} />
      <Route path="/episode" render={()=><Episodes />} />
    </main>
  );
}
