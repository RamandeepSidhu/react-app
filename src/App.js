import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "Success");
    }
  };

  return (
    <div >
    <Navbar title="PixlerLab" mode={mode} toggleMode={toggleMode} />
              <Alert alert={alert} />
      <Routes>
                <Route path="about" element={<About />} />
                <Route
                  path="*"
                  element={
                    <Textform
                      heading="Enter Your Daily Status Report "
                      mode={mode}
                      toggleMode={toggleMode}
                      showAlert={showAlert}
                    />
                  }
                />
      </Routes>
      </div>
  );
}

export default App;
