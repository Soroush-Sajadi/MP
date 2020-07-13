import React from 'react';
import { BrowserRouter, Switch, Route } from'react-router-dom';
import Header from './Components/Code/Header';
import Home from './Components/Code/Home';
import MyWork from './Components/Code/MyWork';
import AboutMe from './Components/Code/AboutMe';
import Contacts from './Components/Code/Contacts';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
              <Switch>
                <Route exact path="/" render={() => <Home />}/>
                <Route exact path="/my work" render={() => <MyWork />}/>
                <Route exact path="/about me" render={() => <AboutMe />}/>
                <Route path="/contacts" render={() => <Contacts />} />
              </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
