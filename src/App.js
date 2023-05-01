import "./App.css";
import FormTwoInput from "./FormTwoInput/FormTwoInput";

import { Routes, Route } from "react-router-dom";

import HomePage from "./FormTwoInput/HomePage";
import NavBar from "./FormTwoInput/NavBar";
import LoginPagge from "./FormTwoInput/LoginPagge";
import DataBaseContent from "./FormTwoInput/DataBaseContent";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<>
        <HomePage/>
        <FormTwoInput />
        <DataBaseContent/>
        </>} />
        <Route path="/loginPage" element={<>
        <LoginPagge/>
        </>} />
      </Routes>
    
    </div>
  );
}

export default App;
