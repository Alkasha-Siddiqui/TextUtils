// import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {

  const [mode, setMode] = useState('light');

  const toggleBtn=() =>{
    if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
  }else{
    setMode('light')
    document.body.style.backgroundColor='white';

  }
  }

  return (
    <>
     <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleBtn={toggleBtn}/>
     <div className="container">
      <TextForm heading="Enter Your Text Below:" mode={mode}/>
      {/* <About/> */}
     </div>
    </>

  );
}

export default App;


