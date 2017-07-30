import React, { Component } from 'react';
import Entry from './components/pages/Entry';
import SignUp from './components/pages/examples/SignUp';
import Landing from './components/pages/examples/Landing';
import Profile from './components/pages/examples/Profile';
import Docs from './components/pages/Docs';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'


class App extends Component {


  render() {
    return (
          <Router>
            <div>
                <Route exact path="/" component={Entry}/>
                <Route path="/examples/signup" component={SignUp}/>
                <Route path="/examples/landing" component={Landing}/>
                <Route path="/examples/profile" component={Profile}/>
                <Route path="/components-documentation" component={Docs}/>
            </div>
          </Router>);
  }
}

export default App;
