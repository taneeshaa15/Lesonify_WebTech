import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Screening from "./pages/Screening";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Assessment from "./pages/assesment/Assessment";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import WordGame from "pages/assesment/pages/DecisionMaking/DecisionMaking";
import MemoryGame from "pages/assesment/pages/memoryGame/memoryGame";
import Maths from "./pages/assesment/pages/math/math";
import Result from "./pages/Result";
import EEg from "pages/EEg";
import EEgGraph from "pages/EEgGraph";
import Attention from "pages/assesment/pages/Attention/attention";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Landing />}></Route>
        <Route path="/home" exact element={<Landing />}></Route>
        <Route path="/screening" exact element={<Screening />}></Route>
        <Route path="/signup" exact element={<Signup />}></Route>
        <Route path="/signin" exact element={<Login />}></Route>
        <Route path="/assesment" exact element={<Assessment />}></Route>
        <Route path="/problemSolving" exact element={<Maths />}></Route>
        <Route path="/memory" exact element={<MemoryGame />}></Route>
        <Route path="/wordGame" exact element={<WordGame />}></Route>
        <Route path="/attention" exact element={<Attention />}></Route>
        <Route path="/dashboard" exact element={<Dashboard />}></Route>
        <Route path="/result" exact element={<Result />}></Route>
        <Route path="/eeg-reports" exact element={<EEg />}></Route>
        <Route path="/eeg-graphs" exact element={<EEgGraph />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
