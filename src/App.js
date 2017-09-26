import React, { Component } from 'react';
import Header from './components/Header.react';
import Footer from './components/Footer.react';
import Paper from './pages/Paper.react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Paper />
        <Footer />
      </div>
    );
  }
}




export default App;
