import React, { useState, useEffect } from "react";
import Banner from "../../../images/home.png";
import styled from "styled-components";
import { Card, Icon, Image } from "semantic-ui-react";
import Episode from "./Episode";
import { getEpisodes} from "../../../data";

const GridContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Episodes = () => {
  const [episodes, setEpisodes] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const episodes = await getEpisodes();
        setEpisodes(episodes);
      } catch (e) {
        alert("An error occured");
      }
    };

    fetchData();
  }, []);

  const { results, info } = episodes;

  return (
    <Card.Group itemsPerRow={3}>
      {results.map(prop => <Episode episode={prop} />)}
    </Card.Group>
  );
};

export default Episodes;
