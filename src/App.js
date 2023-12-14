import { useState } from "react";
import "./App.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Aboutus from "./components/Aboutus";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import Alerts from "./components/Alerts";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#282b30";
      showAlert("Dark Mode enabled...", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode enabled...", "success");
    }
  };
  return (
    <>
     
        <Navbar title="Text Editor v2.0" mode={mode} toggle={toggleMode} />
        <Alerts alert={alert} />
        <Textarea mode={mode} alert={showAlert} />
        {/*  <BrowserRouter><Routes>
          <Route
            path="/"
            element={}
          ></Route>
          <Route path="/about" element={<Aboutus />}></Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
