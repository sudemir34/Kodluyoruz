import React, { Component } from 'react'
import Dene from "./Table";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      userId : "",
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
    if(this.state.user === "admin" && this.state.userId === "admin"){
      this.setState({isLoad : true})
    }
  }
  render() {
    return (
      <div >
      {this.state.isLoad ? <Dene/> : (<div className='formBorder'>
      <div >
        <form onSubmit={(e) => this.handleSubmit(e)} className='App'>
      <h1>User Login</h1>
        <input className='formInput' type="text" placeholder = "User.." value={this.state.user} onChange={this.handleUser}></input>
        <input className='formInput' type="password" placeholder = "UserID.." value={this.state.userId} onChange={this.handleUSerId}></input>
        <button className='formButton'>Sign In</button>
      </form>
      </div>
      </div>)}
      </div>
    )
  }
}
