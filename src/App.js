// PERUSS REACT-ETTIÄ
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// KOMPONENTIT
import NavBar from './Components/Layout/NavBar';
import Main from './Components/HomePage/Main';
import PostDetails from './Components/Posts/PostDetails';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/post/:id" component={PostDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
