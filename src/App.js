import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react'
import Alert from './components/Alert';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //whether darkmode is enable or not
  const [alert, setAlert] = useState(null);


  const showAlert = (message ,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }





  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#232b41';
      showAlert("Dark mode has been enabled" ,"success"); 
      document.title = 'TextUtiles - Dark Mode';

      // setInterval(() => {
      //   document.title = 'TextUtiles is Amazing Mode'
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Install TextUtiles Now'
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled" ,"success");
      document.title = 'TextUtiles - Light Mode';


    }
  }
  return (
    <>
  <Router>
{/* <Navbar  title="TextUtils" aboutText="About TextUtils"/> */}
<Navbar  title="TextUtils" mode={mode} toggleMode = {toggleMode} />
{/* <Navbar  /> */}

<Alert alert={alert} />
<div className="container my-3">
<Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
          <TextForm  showAlert={showAlert}  heading = "Enter the text to analyze below" mode={mode} />
          </Route>
        </Switch>
        </div>
        </Router>

    </>
  );
}

export default App;
