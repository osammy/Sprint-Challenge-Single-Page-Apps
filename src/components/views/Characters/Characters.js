import React, { useState, useEffect } from "react";
import Banner from "../../../images/home.png";
import styled from "styled-components";
import { Card, Icon, Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import Character from "./Character";
import SearchForm from "../../SearchForm";
import { getCharacters } from "../../../data";
import axios from "axios";

const GridContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const memory = {};

const Characters = () => {
  const [characters, setCharacters] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
    
        // const characters = await getCharacters();
        const url = "https://rickandmortyapi.com/api/character";
        axios(url)
        .then(response=>{
            setCharacters(response.data);
        })
        .catch(e => {
            alert(e);
        })
        
      
    };

    fetchData();
  }, []);

  function onSearch(name) {
    const url = `https://rickandmortyapi.com/api/character/?name=${name}`;
    console.log(url);
    axios
      .get(url)
      .then(handleSearchSucces)
      .catch(handleSearchError);
  }

  function handleSearchSucces(response) {
    const character = response.data;
    console.log(character);
    setCharacters(character);
    // memory[name]
  }

  function handleSearchError(err) {
    alert(err);
  }

  const { results, info } = characters;

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
    <div>
      <SearchForm onSearch={onSearch} />
      <Card.Group itemsPerRow={3}>
        {results.map(prop => <Character key={prop.id} character={prop} />)}
      </Card.Group>
    </div>
  );
};

export default Characters;
