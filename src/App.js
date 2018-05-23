import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './components/home';
import Navbar from './components/navbar/navbar';
import FormaDodajKnjigu from './components/formaDodajKnjigu';
import FormaDodajZanr from './components/formaDodajZanr';
import BookList from './components/book-list';

import './styles/style.css'

class App extends Component {
  render() {
    return (
          <BrowserRouter>
            <div>
              <Navbar />
              <div className="prikaz-centar col-xs-1 text-center">
                <Route exact path="/" component={Home} />
                <Route path="/DodajKnjigu" component={FormaDodajKnjigu} />
                <Route path="/DodajZanr" component={FormaDodajZanr} />
                <Route path="/booklist" component={BookList} />
              </div>
            </div>
          </BrowserRouter>
    );
  }
}

export default App;
