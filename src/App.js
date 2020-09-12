// PERUSS REACT-ETTIÄ
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// KOMPONENTIT
import NavBar from './Components/Layout/NavBar';
import Main from './Components/HomePage/Main';
import Login from './Components/Auth/Login'
import Logout from './Components/Auth/Logout'
import Register from './Components/Auth/Register'
import NewPost from './Components/Posts/NewPost';
import PostDetails from './Components/Posts/PostDetails';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/newpost" component={NewPost} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/post/:id" component={PostDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
