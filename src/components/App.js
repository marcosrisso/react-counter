import React, { useState } from 'react';
import { Button, Header, Icon, Container } from 'semantic-ui-react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/index";
import { Redirect } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';




function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  const [theme, setTheme] = useState(true);

  const decrease = () => {
    dispatch(decrement());
    
  };

  const addition = () => {
    dispatch(increment());
  }

  const darkTheme = () => {
    setTheme(theme? theme : !theme);
  }

  const lightTheme = () => {
    setTheme(!theme? theme : !theme);
  }

  return (
    <div className={theme ? "App" : "App-light"}>
    <div>
      <Button.Group
      compact
      floated='left'
      size='mini'
      style={{ padding: "1%" }}>
    <Button
      onClick={lightTheme}
      inverted
      content='Light'
      color='white'

    />
    <Button.Or />
    <Button 
    onClick={darkTheme}
    inverted
    color='blue'
    content='Dark'
    />
  </Button.Group>
  </div>
  <Container
  textAlign='center'
  style={{ paddingTop: "15%"}}>
    <Header className={theme ? "whiteHeader" : "darkHeader"}
    size='huge'
    >React Counter  </Header>
    <Container 
    textAlign='center'
    style={{ fontSize: "2em", padding: "5%", fontWeight: "bold" }}
    className="number">{counter}</Container>
    <Button.Group>
     <Button icon
      labelPosition='left'
      color='red'
      onClick={decrease}>
      <Icon name='minus' />
      Sub
    </Button>
    <Button icon
    onClick={addition} 
    color='green'
    labelPosition='right'>
      Add
      <Icon name='add' />
    </Button>
    </Button.Group>
    </Container>
    </div>
  );
} 

export default App;
