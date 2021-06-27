import styled from "styled-components";
import { color } from "../../constant/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 250px;
  width: 100%;
  margin-bottom: 100px;
  background-image: linear-gradient(${color.primary}, ${color.secondary});
`;

export const WrapperLogo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
`;

export const Logo = styled.h1`
  font-weight: 400px;
  font-size: 24px;
  color:${color.text}
`;
