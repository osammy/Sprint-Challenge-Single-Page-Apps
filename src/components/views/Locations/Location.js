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

const Location = ({location}) => {
const {name,type,dimension, residents,} = location;
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{type}</Card.Meta>
        <Card.Description>
          Dimension: {dimension}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <a>
        <Icon name='user' />
        {residents.length} residents
      </a>
    </Card.Content>
    </Card>
  );
}


export default Location;