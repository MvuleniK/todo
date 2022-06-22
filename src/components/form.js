import React, { Component } from 'react';
import './form.css';
// import Login from "../components/login";
import ReactDOM from "react-dom/client";
// import {BrowserRouter,Routes, Route } from "react-router-dom";



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


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            fullName: event.target.value
        })
    }
    lasthandler = (event) => {
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


    handleSubmit = (event) => {

        let pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
        let letters = /^[A-Za-z]+$/;
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let numFilter = /^\d{10}$/;

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
        }else if(this.state.department === " "){
            alert('please fill in a proffession')
        }else{
            
            // stores to local storage
            localStorage.setItem("fullname", JSON.stringify(this.state.fullName));
            localStorage.setItem("email",JSON.stringify(this.state.email));
            localStorage.setItem("password", JSON.stringify(this.state.password));
            localStorage.setItem("phone",JSON.stringify(this.state.phone));
            localStorage.setItem("profession",JSON.stringify(this.state.profession));
            localStorage.setItem("image",JSON.stringify(this.state.image));
        }

        alert(`User ${this.state.email}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            fullName: "",
            email: "",
            password: "",
            profession: "",
            image:"",
            phone:"",
        })


     event.preventDefault()
        
    }


    // function handleClick(){
    //     setLogin(!login)
    // }




    render() {

        // let url = <Login/>

        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                    <label>FullName :</label> <input type="text" value={this.state.fullName} onChange={this.firsthandler} placeholder="FullName..." /><br />
                    <label>Email :</label> <input type="text" value={this.state.email} onChange={this.lasthandler} placeholder="Email..." /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
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
                    <input type="submit" value="Submit" />
                </form>

                <p className="Login-link">
                Already registered log in? 
                {/* <BrowserRouter>
                    <Routes>
                        <Route path ="/" element={<Login/>}>

                        </Route>
                    </Routes>
                </BrowserRouter> */}
                    {/* <link to ="/Login">Login</link> */}
                </p>
            </div>
            
        )
    }
}

export default Form;
