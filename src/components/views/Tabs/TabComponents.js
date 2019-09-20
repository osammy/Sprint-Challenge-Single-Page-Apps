import React from "react";
import { Tab, Menu } from "semantic-ui-react";
import Home from "../Home/Home";
import Characters from "../Characters/Characters";
import Locations from "../Locations/Locations";
import Episodes from "../Episodes/Episodes";
import { NavLink } from "react-router-dom";

export const panes = [
  {
    menuItem: (
      <Menu.Item key="home">
        {/*Messages<Label>15</Label>*/}
        <NavLink to="/">Home</NavLink>
      </Menu.Item>
    ),
    render: () => <Tab.Pane attached={false} />
  },

  {
    menuItem: (
      <Menu.Item key="character">
        <NavLink to="/character">Character</NavLink>
      </Menu.Item>
    ),
    render: () => <Tab.Pane attached={false} />
  },
  {
    menuItem: (
      <Menu.Item key="location">
        <NavLink to="/location">Location</NavLink>
      </Menu.Item>
    ),
    render: () => <Tab.Pane attached={false} />
  },
    {
    menuItem: (
      <Menu.Item key="episode">
        <NavLink to="/episode">Episode</NavLink>
      </Menu.Item>
    ),
    render: () => <Tab.Pane attached={false} />
  }
];

export function getPanes(props) {
  const { characters, locations, episodes } = props;
  return function() {
    const panes = [
      {
        menuItem: "Home",
        render: () => <Tab.Pane attached={false} />
      },
      {
        menuItem: "Character",
        render: () => <Tab.Pane attached={false} />
      },
      {
        menuItem: "Locations",
        render: () => <Tab.Pane attached={false} />
      },
      {
        menuItem: "Episodes",
        render: () => <Tab.Pane attached={false} />
      }
    ];

    return panes;
  };
}
