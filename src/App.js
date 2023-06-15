// import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }



  const toggleBtn = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is On", "success")
      document.title = "TextUtils - Dark"
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is On", "success")
      document.title = "TextUtils - Light"
    }
  }

  return (
    <>    
    <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleBtn={toggleBtn} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter Your Text Below:" mode={mode} alert={showAlert} />}></Route>
          <Route path="/about" element={<About/>} ></Route>        
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;