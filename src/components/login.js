import React, { Component } from 'react';
import "../components/login.css";
// import { Alert } from "react-bootstrap";
import { Link } from 'react-router-dom';
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';




class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      emailog:"",
      passwordlog:"",

    }
    this.handleLogin=this.handleLogin.bind(this)
  }

  emailoghandler = (event) => {
    this.setState({
      emailog: event.target.value
    })
  }

  passwordloghandler = (event) => {
    this.setState({
      passwordlog: event.target.value
    })
  }



  handleLogin = (event) => {
    var accounts = JSON.parse(localStorage.getItem('list'));

  //   for(let current of accounts){
  //     if(this.state.emailog === current.mail && this.state.passwordlog === current.pass){
  //       alert('You are logged in , redirecting you to the dashboard')
  //       // redirect user to dashboard
  //         window.location='/Landing';
  //     }else if(!this.state.emailog && !this.state.passwordlog){
  //       alert('Empty!')
  //       console.log('succussful login')
  //       // redirect user to dashboard
  //       window.location='/dashboard';
  //     }else if(this.state.emailog !== pass && this.state.passwordlog !== mail){
  //       alert('Please recheck you credientials')
  //     }
  // }

    try
    {
      let user_list = JSON.parse(localStorage.getItem("list"));

      for(let account of user_list) {
        if(this.state.emailog == account.email) {
          if(this.state.passwordlog == account.password) {
            alert('You are logged in , redirecting you to the todolist');
            window.location='/landing';
            throw("");
          }
          else {
            throw("Password is invalid.");
          }
        }
      }
      throw("Email not found!");
    }
    catch(err)
    {
      alert(err);
    }
    event.preventDefault()
  }





  render(){
    return(

  



      <div className=" container ">
          <form onSubmit={this.handleLogin}>

            <h1>Login</h1>
            <label>Email :</label> <input type="text" value={this.state.emailog} onChange={this.emailoghandler} placeholder="Inital value"/><br />
            <label>Password :</label> <input type="password" value={this.state.passwordlog} onChange={this.passwordloghandler} placeholder="Password of user..." /><br />

            <br></br>
            <input type="Submit" value="Submit" />
          </form>
          <p>Not registered yet? <Link to="/register">Register</Link></p>


        </div>


    )
  }

}

export default Login;


