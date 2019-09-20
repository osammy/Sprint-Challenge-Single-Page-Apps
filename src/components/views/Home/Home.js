import React from "react";
import Banner from "../../../images/home.png";
import styled from "styled-components";

function Home() {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    & > div {
      width: 700px;
      padding:30px;

      img {
          width:100%;
      }
    }
  `;

  return (
    <Container>
      <div >
        <h1>Welcome to Rick and Morty App </h1>
        <div>
          <img src={Banner} alt="banner" />
        </div>
      </div>
    </Container>
  );
}


export default Home;