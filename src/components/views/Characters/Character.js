import React from "react";
// import styled from "styled-components";
import { Card, Icon, Image } from 'semantic-ui-react';

function Character({character}) {
const {name,status,gender, episode, image, origin, location} = character;
  return (
  <Card>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>{gender}, {status}</span>
      </Card.Meta>
      <Card.Description>
        <b>Origin</b> {origin.name}
      </Card.Description>
      <Card.Description>
        <b>Location:</b> {location.name}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {episode.length} Episodes
      </a>
    </Card.Content>
  </Card>
  );
}


export default Character;