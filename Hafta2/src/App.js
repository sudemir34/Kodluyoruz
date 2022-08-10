import React, { Component } from 'react'
// import "./app.css"
import Dene from "./dene";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "admin",
      userId : "admin",
      isLoad : false
    };
  }

  handleUser = (event) => {
    this.setState({
      user :event.target.value
    })
  }
  handleUSerId = (event) => {
    this.setState({
      userId : event.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.user && this.state.userId){
      this.state.isLoad = true;
    }
  }
  render() {
    return (
      <div className='App'>
      {this.state.isLoad ? <Dene/> : (<div className='formBorder'>
        <form onSubmit={(e) => this.handleSubmit(e)} >
      <h1>User Login</h1>
        <input className='formInput' type="text" placeholder = "User.." value={this.state.user} onChange={this.handleUser}></input>
        <input className='formInput' type="password" placeholder = "UserID.." value={this.state.userId} onChange={this.handleUSerId}></input>
        <button className='formButton'>Sign In</button>
      </form>
      </div>)}
      </div>
    )
  }
}
