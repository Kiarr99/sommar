import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './component/headercomponents/header'
import Body from './component/bodycomponents/body'
import Footer from './component/footercomponents/footer'
import Menu from './component/menucomponents/menu'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path = "/hem" render = {props =>
          <div>
            <Header /> 
            <Body /> 
            <Footer /> 
          </div>
        } />
        <Route path="/meny" component={Menu}/>
      </div>
    </Router>
  );
}

export default App;
