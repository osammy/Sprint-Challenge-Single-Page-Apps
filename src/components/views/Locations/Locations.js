import React, { useState, useEffect } from "react";
import Banner from "../../../images/home.png";
import styled from "styled-components";
import { Card, Icon, Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import Location from "./Location";
import axios from 'axios';
// import { getLocations } from "../../../data";

const GridContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Locations = () => {
  const [locations, setLocations] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
    
        // const characters = await getCharacters();
        const url = "https://rickandmortyapi.com/api/location";
        axios(url)
        .then(response=>{
            setLocations(response.data);
        })
        .catch(e => {
            alert(e);
        })
        
      
    };

    fetchData();
  }, []);

  const { results, info } = locations;
    if (results.length === 0)
    return (
      <div className="animated slideInLeft">
    <Segment>
      <Dimmer active inverted>
        <Loader inverted></Loader>
      </Dimmer>
    </Segment>
    </div>
    );
  return (
      <Card.Group itemsPerRow={3}>
        {results.map(prop => <Location location={prop} />)}
      </Card.Group>
  );
};

export default Locations;
