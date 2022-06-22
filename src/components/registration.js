import React from 'react';
// import { ReactDOM } from 'react-dom';
import '../components/registration.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from "./Login";



class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            employee:{
                fullName: '',
                emailAddress: '',
                password: '',
                // gender: '',
                date:'',
                image:'',
                // department:'',
                employeeNumber:'',
        }
        };

    }

    changeHandler=e=>{
        const fullName = e.target.fullName;
        const value = e.target.value
        this.setState({employee:{
                  ...this.state.employee,
                  [fullName]: value
        }});



    }

    OnCreateEmployee=()=>{
        
        console.log(this.state.employee)
    }


    render(){
        return(
            <div>
                <form >
                    <div className="form">

                    <label>Full Name : <input type="text" name="full name "  value={this.state.fullName}  onChange={this.changeHandler} placeholder="full name"></input></label>

                    <label>Email : <input type="text" name="email"  value={this.state.emailAddress}  onChange={this.changeHandler} placeholder="email" ></input></label>

                    <label>Password : <input type="text" name="password"  value={this.state.password}  onChange={this.changeHandler} placeholder="password" ></input></label>

                    <label>Date : <input type="date" name="date"  value={this.state.date}  onChange={this.changeHandler} placeholder="date"></input></label>

                    {/* <label>Department : <input type="text" name="department"  value={this.state.department}  onChange={this.changeHandler} placeholder="date"></input></label> */}

                    <label>Image : <input type="file" name="image" accept="image/png ,image/jpg"   value={this.state.image}  onChange={this.changeHandler} placeholder="image"></input></label>

                    {/* <label>Gender : <input type="text" name="gender"  value={this.state.gender}  onChange={this.changeHandler} placeholder="gender"></input></label> */}

                    {/* <label>Gender :</label><select onChange={this.changeHandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select> */}

                    <label>EmployeeID : <input type="text" name="employeeID"  value={this.state.employeeNumber}  onChange={this.changeHandler} placeholder="EmployeeID" ></input></label>

                    </div>
                </form>
                <button onClick={this.OnCreateEmployee}>create</button>
            </div>
        )
    }


}


// const element=<NewEmployeeForm></NewEmployeeForm>

// ReactDOM.render(element,document.getElementById("root"));

export default Registration







