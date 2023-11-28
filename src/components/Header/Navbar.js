import React from "react";
import { styled } from "styled-components";

const Ul = styled.ul`
  background-color: #353535;
  display:flex;
  li {
    font-size: 1.3rem;
    list-style: none;
    color: #eae7e8;
    margin: 2rem;
    cursor:pointer;
  }
  @media (max-width: 768px) {
     flex-direction: column; 
     width:170px;
     float:right;
     height:100vh;
     padding-top:2.5rem;
     position:fixed;
     top:0;
     z-index:-10;
     transition: all 0.4s;
     right:-170px;
     transform: ${(props) =>
    props.opened ? `translateX(-100%)` : `translateX(100%)`};
      } 
}
`;
const Navbar = ({ opened }) => {
  return (
    <Ul opened={opened}>
      <li>Home</li>
      <li>Projects</li>
      <li>Clients</li>
      <li>Contact</li>
    </Ul>
  );
};

export default Navbar;
