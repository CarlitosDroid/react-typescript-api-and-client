import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Components
import Menu from "./components/Menu";

// Navigation
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CreateItem from "./components/CreateItem";


function App() {
  
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu/>} />
                <Route path="/create" element={<CreateItem/>} />
                <Route path="/read" element={<label>READ</label>} />
                <Route path="/read:id" element={<label>VARGAS</label>} />
                <Route path="/update" element={<label>UPDATE</label>} />
                <Route path="/delete" element={<label>DELETE</label>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
