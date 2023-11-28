import React from "react";
import Card from "./Card";
import img1 from "../../images/chat-app.png";
import img2 from "../../images/movie-app.png";
import img3 from "../../images/todo-app.png";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #f3f3f3;
  @media(max-width:768px){
    flex-direction:column;
  }
`;
const MyTitle = styled.h1`
  font-size: 34px;
  text-align: center;
  background-color: #f3f3f3;
  margin:0px;
  padding: 1rem 0rem;
  @media (max-width:768px){
  font-size: 26px;
  }
`;
class Cards extends React.Component {
    render() {
        return (
            <>
                <MyTitle>My Projects </MyTitle>
                <Container>
                    <Card
                        title="Chat App"
                        src={img1}
                    ></Card>
                    <Card
                        title="Todo App"
                        src={img2}
                    ></Card>
                    <Card
                        title="Movie App"
                        src={img3}
                    ></Card>
                </Container>
            </>
        );
    }
}
export default Cards;
