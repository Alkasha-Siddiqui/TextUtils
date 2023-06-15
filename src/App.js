// import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert =(message, type) =>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  

  const toggleBtn=() =>{
    if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark Mode is On", "success")
  }else{
    setMode('light')
    document.body.style.backgroundColor='white';
    showAlert("Light Mode is On", "success")
  }
  }

  return (
    <>
     <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleBtn={toggleBtn}/>
     <Alert alert={alert}/>
     <div className="container">
      <TextForm heading="Enter Your Text Below:" mode={mode} alert={showAlert}/>
      {/* <About/> */}
     </div>
    </>

  );
}

export default App;


