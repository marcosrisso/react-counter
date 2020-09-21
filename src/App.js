import React, { useState } from 'react';
import { Button, Header, Icon, Container } from 'semantic-ui-react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/index";
import { Redirect } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';




function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  const [theme, setTheme] = useState(); 

  const decrease = () => {
    dispatch(decrement());
    
  };

  const addition = () => {
    dispatch(increment());
  }

  const darkTheme = () => {
    
  }

  const lightTheme = () => {

  }

  return (
    <div className="App">
    <div>
      <Button.Group
      compact
      floated='left'
      size='mini'
      style={{ padding: "1%" }}>
    <Button

      inverted
      content='Light'
      color='white'

    />
    <Button.Or />
    <Button 
    onClick
    inverted
    color='blue'
    content='Dark'
    />
  </Button.Group>
  </div>
  <Container
  textAlign='center'
  style={{ paddingTop: "15%"}}>
    <Header id='header'
    size='huge'
    style={{
      color: 'white'
    }}
    >React Counter <span className="number">{counter}</span> </Header>
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
