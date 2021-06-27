import React from "react";
import SearchIcon from "../../../assets/searchIcon.png";
import { Container, Input } from "./styles";

function SearchBar() {
  return (
    <Container>
      <Input placeholder="Buscar no blog" />
    </Container>
  );
}

export default SearchBar;
