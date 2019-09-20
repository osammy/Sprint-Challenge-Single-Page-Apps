import React, { useState, useEffect } from "react";
import Banner from "../../../images/home.png";
import styled from "styled-components";
import { Card, Icon, Image } from "semantic-ui-react";
import Character from "./Character";
import SearchForm from "../../SearchForm";
import { getCharacters } from "../../../data";


const GridContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const url = "https://rickandmortyapi.com/api/character/?name=rick&status=alive";

function onSearch(name) {
    const memory ={};
    axios
    .get(url)
    .then(handleSearchSucces)
    .catch(handleSearchError)
}

function handleSearchSucces(response) {
    const character = response.data;
    setCharacters({ results:[character]});
    //memory[name]
}

function handleSearchError(err) {
    alert(err);
}

const Characters = () => {
  const [characters, setCharacters] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const characters = await getCharacters();
        setCharacters(characters);
      } catch (e) {
        alert("An error occured");
      }
    };

    fetchData();
  }, []);

  const { results, info } = characters;
  return (
    <div>
      <SearchForm />
      <Card.Group itemsPerRow={3}>
        {results.map(prop => <Character key={prop.id} character={prop} />)}
      </Card.Group>
    </div>
  );
};

export default Characters;
