import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './components/home';
import Navbar from './components/navbar/navbar';

import './styles/style.css'

class App extends Component {
  render() {
    return (
          <BrowserRouter>
            <div>
              <Navbar />
            
              <Route path="/home" component={Home} />
          
            </div>
          </BrowserRouter>
    );
  }
}

export default App;
