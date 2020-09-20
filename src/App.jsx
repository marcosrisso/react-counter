import React from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/index";
import { Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';



function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  const decrease = () => {
    dispatch(decrement());
    
  };

  const addition = () => {
    dispatch(increment());
  }


  return (
    <div className="App">
    <h1>React Counter <span className="number">{counter}</span> </h1>
    <Button.Group widths='2'>
    <Button 
    onClick={decrease}
    style={{ 
      width: "60px",
      height: "30px",
      background: ""
     }}
    content='-'
    />
    <span>   </span>
    <Button 
    onClick={addition}
    style={{
      width: "60px",
      height: "30px",
      background: ''
    }}
    content='+'
    />
    </Button.Group>
    </div>
  );
} 

export default App;
