import React, { Component } from 'react'
import Todolist from './Todolist'

export default class todo extends Component {
    state = {
        list: [
            {
            id: 1,
            title : '할일',
        },
        {
            id: 2,
            title : '할일2'
        },
    ],
    text:'',
    }
    checkTodo = (event) => {
        console.log("111");
        const text = this.state.text;
        const list = [ ... this.state.list];
        list.push({
            id:3,
            title:text
        })
        this.setState({list : list})
        event.preventDefault();
    }
    handleChange = (event) => {
        this.setState({text : event.target.value});
        console.log(event.target.value);
    }
  render() {
    return (
      <div>
      {this.state.text}
        <h1>todo</h1>
        <form onSubmit={this.checkTodo}>
            <input type="text" onChange={this.handleChange}/>
        </form>
        <Todolist list = {this.state.list}></Todolist>
      </div>
    )
  }
}
