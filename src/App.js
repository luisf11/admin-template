import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './component/SideBar/Sidebar.css'
import Nav from './component/Nav/Nav'
import SideBar from './component/SideBar/SideBar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Nav />
        <SideBar />
       
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
