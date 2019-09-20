import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Input, Button } from "semantic-ui-react";

export default function SearchForm({ onSearch }) {
  // STRETCH TODO: Add stateful logic for query/form data

  const [name, setName] = useState("");
  const handleInputChange = e => setName(e.target.value);

  const SearchContainer = styled.section`

    form {
      display: flex;
      justify-content: flex-end;
      margin:20px 0;
      input {
        border: 2px solid #ccc;
        padding: 1px 0;
      }
    }
  `;

  return (
    <SearchContainer className="search-form">
      <form onSubmit={() => onSearch(name)}>
        {/*<input
          onChange={handleInputChange}
          placeholder="name"
          value={name}
          name="name"
        />*/}
        <Input
          loading
          icon="user"
          placeholder="Name..."
          onChange={handleInputChange}
          value={name}
          name="name"
        />

        <Button type="submit">Search</Button>
      </form>
    </SearchContainer>
  );
}
