import React, { Component } from 'react';
import { Route } from "react-router";

import './App.css';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Movies from '../Movies/Movies';
import Series from '../Series/Series';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      errorKey: ''
    }
  };

  componentDidMount() {
    fetch('feed/sample.json')
      .then(response => response.json())
      .then(data => this.setState({data: data.entries}))
      .catch(error => this.setState({errorKey: error}))
  }

  render() {
    return (
      <div className="App">
        <Header />

          {!this.state.data.length ? <Loader /> :

            <div>

            <Route exact path='/' 
              render={() => 

                  <Home />

              }
            />

            <Route exact path='/movies' 
              render={() => 
                <Movies data={this.state.data}/>
              }
            />

            <Route exact path='/series' 
              render={() => 
                <Series data={this.state.data}/>
              }
            />  

            </div>  
           } 

          <Footer />  

      </div>
    );
  }
}

export default App;