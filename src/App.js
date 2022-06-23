
// import Registration  from './components/registration';
// import Form from './components/form';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import Login from "./components/login";
import Register from "./components/register";
import Todo from "./todo";
import Landing from "./components/landing";
// import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (


    <div className="App">

      {/* Pages go here */}

      <Router>
              <Routes>
                    <Route path="/login" element = {<Login/>}/>
                    <Route path="/register" element = {<Register/>}></Route>
                    <Route path="/todo" element = {<Todo/>}></Route>
              </Routes>
      </Router>

      {/* testing the array */}
      {/* <Register/> */}

      {/* Working Form  */}
      {/* <Form/> */}

      {/* Login */}
      {/* <Login/> */}

      {/* registation page/index page
        <Registration/> */}


    </div>
  );
}

export default App;
