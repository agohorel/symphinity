import styled from "styled-components";
import { Link } from "react-router-dom";
import color from "../stylesheets/Colors";

export const NavBar = styled.div`
  width: 100%;
  height: 64px;
  background-color: #1db954;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  position: fixed;
  top:0;
  z-index: 10;
`;

export const Logo = styled.h1`
  display: inline-block;
  color: #fff;
  line-height: 60px;
  font-size: 1.5em;
  margin-left: 20px;
  font-weight: bold;
  transition: .15s ease-out all;

  :hover {
    color: ${color.lightBlack};
  }
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
`;
