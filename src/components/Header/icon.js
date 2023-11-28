import React, { Component } from "react";
import { styled } from "styled-components";
import Navbar from './Navbar'

const Container = styled.div`
@media(max-width:768px){
  display: inline-block;
  cursor: pointer;
  position:fixed;
  top:30px ;
  right:30px ;
  margin:0rem 1rem;
  :nth-child(1){
  transform: ${props => props.opened ? `translate(0, 11px) rotate(-45deg)` : `translate(0,0px) rotate(0)`};
}
  :nth-child(2){
  opacity: ${props => props.opened ? `0` : `1`};
}
:nth-child(3){
    transform: ${props => props.opened ? `translate(0, -11px) rotate(45deg)` : `translate(0,0px) rotate(0)`};
  }
  div{
    width: 35px;
    height: 5px;
    background-color: #3c6e71;
    margin: 6px 0;
    transition: all 0.4s;
  }
  
}
`;

class Icons extends Component {
    constructor() {
        super()
        this.state = { opened: false }
    }

    clickHandler = () => {
        this.setState({ opened: !this.state.opened })
    }
    render() {
        return (
            <>
                <Container opened={this.state.opened} onClick={this.clickHandler}>
                    <div></div>
                    <div></div>
                    <div></div>
                </Container>
                <Navbar opened={this.state.opened}></Navbar>
            </>
        );
    }
}

export default Icons;
