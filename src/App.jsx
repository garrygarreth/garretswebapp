import logo from './logo.svg';
import './App.css';
import Home from './Home.jsx';
import Aboutme from './Aboutme.jsx';
import React from 'react';
import './index.css';
import  Server from './Server.jsx';
import Favsongs from './Favsongs.jsx';


function App() {
  return (
    <>
    <Home/>
    <Aboutme/>
    <Server/>
   <Favsongs/>
   
    </>
  );
}

export default App;
