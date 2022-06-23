import React, { Component } from 'react';
// import React, { useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import Login from "../components/login";
// import ReactDOM from "react-dom/client";
// import {BrowserRouter,Routes, Route } from "react-router-dom";

class User {
    constructor(name,email,password,profession,image,phone_num) {
        this.fullName = name;
        this.email = email;
        this.password = password;
        this.profession = profession;
        this.image = image;
        this.phone = phone_num;
        this.date = Date();
    }
}

let users = [];

class Form extends Component {
    constructor(props) {
        super(props)


        this.state = {
            fullName: "",
            email: "",
            password: "",
            profession: "",
            image:"",
            phone:"",

            list: [],
        };

        // this.handleUsers = this.handleUsers.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    // handleUsers = (event) => {
    //     this.setState({
    //         list:[...this.state.list, this.list]
    //     })
    // }



    // handleUsers = (event) => {
    //     if(event.target.checked){
    //         this.setState({
    //             list: [ ...this.state.list, event.target.fullName],
    //           }, () => {
    //             console.log(this.state.fruits);
    //     }

    //     }

    // }


    // onAddItem = fullname => {
    //     this.setState(state => {
    //       const list = state.list.concat(item => item.fullName !== fullName);
    
    //       return {
    //         list,
    //       };
    //     });
    //   };



    // const[login, setLogin] = useState(true)




    fullnamehandler = (event) => {
        this.setState({
            fullName: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    professionhandler = (event) => {
        this.setState({
            profession: event.target.value
        })
    }

    imagehandler =(event) =>{
        this.setState({
            image:event.target.value
        })
    }

    phonehandler = (event) =>{
        this.setState({
            phone:event.target.value
        })
    }


    // append = () => {
    //     this.setState(state => {
    //       const list = [...state.list, state];
    
    //       return {
    //         fullName: "",
    //         email: "",
    //         password: "",
    //         profession: "",
    //         image:"",
    //         phone:"",
    //         list,
    //       };
    //     })
    // }

    handleSubmit = (event) => {

        // validation for the data input
        let pwd_expression =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
        let letters =/^[A-Za-z]+$/;
        let filter =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let numFilter =/^\d{10}$/;

        if(this.state.fullName === ""){
            alert('Please enter your name')
        }else if(!letters.test(this.state.fullName)){
            alert('Name field requires only alphabet characters!')
        }else if(this.state.email === ""){
            alert("Please enter your email!")
        }else if(!filter.test(this.state.email)){
            alert('Invalid email')
        }else if(this.state.password === " "){
            alert('Please enter password')
        }else if(!pwd_expression.test(this.state.password)){
            alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
        }else if(this.state.phone === " "){
            alert('Please enter your phone number')
        }else if(!numFilter.test(this.state.phone)){
            alert('invalid phone number, only numeric digits');
        }else if(this.state.profession === " "){
            alert('please fill in a proffession')
        }else{
            
        //     // stores to local storage
        //     // localStorage.setItem("fullname", JSON.stringify(this.state.fullName));
        //     // localStorage.setItem("email",JSON.stringify(this.state.email));
        //     // localStorage.setItem("password", JSON.stringify(this.state.password));
        //     // localStorage.setItem("phone",JSON.stringify(this.state.phone));
        //     // localStorage.setItem("profession",JSON.stringify(this.state.profession));
        //     // localStorage.setItem("image",JSON.stringify(this.state.image));

            // localStorage.setItem("list", JSON.stringify(this.state.list));

            users.push(new User(this.state.fullName,this.state.email,this.state.password,this.state.profession,this.state.image,this.state.phone));
            localStorage.setItem("list", JSON.stringify(users));

            window.location='/login';
        

        // copy a new array and add objects to the array   
            // this.setState(state => {
            //     const list = state.list.concat(state);
            //     return {
            //       fullName: "",
            //       email: "",
            //       password: "",
            //       profession: "",
            //       image:"",
            //       phone:"",
            //       list,
            //     };
            //   })

            alert(`User ${this.state.fullName}  Registered Successfully !!!!`)              
        }

        // alert(`User ${this.state.fullName}  Registered Successfully !!!!`)
        //localStorage.setItem("list", JSON.stringify(this.state.list));

        // this.setState({
        //     list:[...this.state.list, this.state.fullName]
        // })

        // this.setState({
        //     list:[...this.state.list, this.state]
        // })

        // this.setState(state => {
        //     const list = state.list.concat(state);
      
        //     return {
        //       fullName: "",
        //       email: "",
        //       password: "",
        //       profession: "",
        //       image:"",
        //       phone:"",
        //       list,
        //     };
        //   })
        //   }


     event.preventDefault()
        
    }


    // function handleClick(){
    //     setLogin(!login)
    // }




    render() {

        // let url = <Login/>

        return (
            <div className='container'>

                <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                    <label>FullName :</label> <input type="text" value={this.state.fullName} onChange={this.fullnamehandler} placeholder="FullName..." /><br />
                    <label>Email :</label> <input type="text" value={this.state.email} onChange={this.emailhandler} placeholder="Email..." /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    <label>Phone number :</label> <input type="text" value={this.state.phone} onChange={this.phonehandler} placeholder="Phone..." /><br />
                    <label>Profession :</label> <input type="text" value={this.state.profession} onChange={this.professionhandler} placeholder="Profession..." /><br />
                    {/* <label>Select Department :</label><select onChange={this.professionhandler} defaultValue="Select department">
                        <option defaultValue>Select department</option>
                        <option value="Managment">Managment</option>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Technical">Technical</option>
                        <option value="Communication">Communication</option>
                        <option value="Legal">Legal</option>
                    </select><br /> */}

                    <label>Upload Image</label> <input type="file" name="image" accept="image/png ,image/jpg" value={this.state.image} onChange={this.imagehandler} placeholder=" " /><br />
                    <br></br>
                    <input className='btn-submit' type="submit" value="Submit" />
                    <br></br>
                </form>

                <p>already registered? <Link to = "/login" >Login</Link></p>
            </div>
            
        )
    }
}

export default Form;
