import React, { useState, useEffect } from "react";
import Banner from "../../../images/home.png";
import styled from "styled-components";
import { Card, Icon, Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import Episode from "./Episode";
import axios from 'axios';
// import { getEpisodes } from "../../../data";

const GridContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Episodes = () => {
  const [episodes, setEpisodes] = useState({ results: [] });

    useEffect(() => {
    const fetchData = async () => {
    
        // const characters = await getCharacters();
        const url = "https://rickandmortyapi.com/api/episode";
        axios(url)
        .then(response=>{
            setEpisodes(response.data);
        })
        .catch(e => {
            alert(e);
        })  
    };

    fetchData();
  }, []);

  const { results, info } = episodes;

  if (results.length === 0)
    return (
      <div className="animated slideInLeft">
        <Segment>
          <Dimmer active inverted>
            <Loader inverted />
          </Dimmer>
        </Segment>
      </div>
    );

  return (
    <Card.Group itemsPerRow={3}>
      {results.map(prop => <Episode episode={prop} />)}
    </Card.Group>
  );
};

export default Episodes;
