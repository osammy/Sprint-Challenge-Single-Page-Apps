import React from "react";
import TabNav from "./components/views/Tabs/TabNav.js";
import Header from "./components/Header.js";
import {getPanes} from "./components/views/Tabs/TabComponents.js";
import { getCharacters, getLocations, getEpisodes } from "./data";

const characters = getCharacters();
const locations = getLocations();
const episodes = getEpisodes();
export default function App() {
  return (
    <main>
      <Header />
       <TabNav panes={  getPanes({characters,locations, episodes})()  } /> 
    </main>
  );
}
