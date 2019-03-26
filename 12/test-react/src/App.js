import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    sec : 0,
  }
  componentDidMount(){
    window.setInterval(()=>{
      this.setState(state=>({
        sec: state.sec + 1
      }));
    },1000)
  }
  render() {
    return (
      <div className="App" style={{"font-size": "14rem"}}>
        {this.props.name}
        asdfsdaf<br/>
        {this.state.sec}
      </div>
    );
  }
}

export default App;
