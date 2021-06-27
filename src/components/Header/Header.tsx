import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Container, Logo, WrapperLogo } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <WrapperLogo>
        <Logo>Codelândia</Logo>
        <Logo>blog</Logo>
      </WrapperLogo>
      <SearchBar />
    </Container>
  );
};

export default Header;
