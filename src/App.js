import React, { Component } from "react";
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { ClearButton } from './components/ClearButton';
import * as math from 'mathjs';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      input: ""
    };
    
  }

  addToInput = val => {
    this.setState({input: this.state.input + val});
  };

  handleEqual = () => {
     this.setState({input: math.evaluate(this.state.input)})
  }

  render() {
  return (
    <div className="App">
      
      <div className="calc-wrapper">
        <Input input={this.state.input}></Input>
        <div className="row">
          <Button handleCLick={this.addToInput}>7</Button>
          <Button handleCLick={this.addToInput}>8</Button>
          <Button handleCLick={this.addToInput}>9</Button>
          <Button handleCLick={this.addToInput}>/</Button>
        </div>
        <div className="row">
          <Button handleCLick={this.addToInput}>4</Button>
          <Button handleCLick={this.addToInput}>5</Button>
          <Button handleCLick={this.addToInput}>6</Button>
          <Button handleCLick={this.addToInput}>x</Button>
        </div>
        <div className="row">
          <Button handleCLick={this.addToInput}>1</Button>
          <Button handleCLick={this.addToInput}>2</Button>
          <Button handleCLick={this.addToInput}>3</Button>
          <Button handleCLick={this.addToInput}>+</Button>
        </div>
        <div className="row">
          <Button handleCLick={this.addToInput}>.</Button>
          <Button handleCLick={this.addToInput}>0</Button>
          <Button handleCLick={() => this.handleEqual()}>=</Button>
          <Button handleCLick={this.addToInput}>-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={() => this.setState({input: ""})}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}
}

export default App;
