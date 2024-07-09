// Yaha dekh sakte hai kaise humne propes diya hai and other files me hamne use show kr diya

import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   // Switch,
//   Route,
// } from "react-router-dom"

function App() {


  const [mode,setMode] = useState('light');
  const [alert,setAlert]= useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been activated","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been activated","success");
    }

  //   setInterval(() => {
  //       document.title = "Textutils is Amazing Mode";
  //   }, 2000);

  //   setInterval(() => {
  //     document.title = "Install Textutils Now";
  // }, 1500);
    
  }
  const BlueMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0C62BD';
      showAlert("Blue Mode has been activated","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been activated","success");
    }

    
  }
  return (
    // <></> in tag ke bina hum other html use nahi kr payenge verna error mar dega agr hame ek se jyda tag ya container use krna hai to hame ye tag ka use krna hoga
    <>
    {/* <Router> */}
      <Navbar title="Manas" link="About Us" mode={mode} toggleMode={toggleMode} BlueMode={BlueMode}></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container">
        {/* <Switch> */}
          {/* <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
          </Route> */}
        {/* </Switch> */}
      {/* <About></About> */}
      {/* </Router> */}
      
      <TextForm showAlert={showAlert} mode={mode}></TextForm>
      </div>
    </>
  );
}

export default App;
