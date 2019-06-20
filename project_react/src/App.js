import React from 'react';
import Header from './component/headercomponents/header'
import Body from './component/bodycomponents/body'
import Footer from './component/footercomponents/footer'

import './App.css';
// document.body.style.overflow = "hidden" //Makes the website not scroll horizontal

function App() {
  return (
    <div className="App">

      <Header /> 
      <Body /> 
      <Footer /> 
    </div>
  );
}

export default App;
