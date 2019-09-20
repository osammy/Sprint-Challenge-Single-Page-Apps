import React from "react";
import styled from "styled-components";
import { Card, Icon, Image } from 'semantic-ui-react';

const Residents = styled.div`
    display:flex;
    justify-content:flex-end;
    width:200px;
    padding:20px;
    background:#eee;
`;

const Episode = ({episode:theEpisode}) => {
const {name,air_date,episode, characters,} = theEpisode;
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{air_date}</Card.Meta>
        <Card.Description>
          Episode: {episode}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <a>
        <Icon name='user' />
        {characters.length} characters
      </a>
    </Card.Content>
    </Card>
  );
}


export default Episode;