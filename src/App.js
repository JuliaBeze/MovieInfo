import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./home/Landing";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <Landing/>
            <Footer/>
        </div>
    );
}

export default App;



