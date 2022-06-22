import "../components/dasboard.css";
import { Link } from 'react-router-dom';


// 

import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

// 

function Dashboard() {


  let userList = JSON.parse(localStorage.getItem("list"));

  //const tableRows = this.state.list.map((element) =>{

  const tableRows = userList.map((element) =>{
    return(
      <tr>
      <td>{element.fullName}</td>
      <td>{element.email}</td>
      <td>{element.password}</td>
      <td>{element.profession}</td>
      <td>{element.image}</td>
      <td>{element.date}</td>
      <td>{element.phone}</td>
    </tr>
    )
  })




  return (




    // --------------------------------
    <div className='container'>
          
          <div>
          <h1 style={{ color: 'blue' }}>Employee Managment</h1>
          <h3>Database of employees</h3>
  
        <br></br>
        <button ><Link  to="/login">Log out</Link></button>
          </div>
          <Table hover>
              <thead>
                <tr>    
                  <th>Full name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Profession</th>
                  <th>Image</th>
                  <th>Date</th>
                  <th>Phone number</th>
                </tr>
              </thead>
              <tbody>
                {tableRows}
              </tbody>
            </Table>      
              
    </div>

    // --------------------------------

  )
}

export default Dashboard;