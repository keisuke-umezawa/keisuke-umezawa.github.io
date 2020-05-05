import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import SideDrawer from './components/SideDrawer';
import About from './pages/About'
import Home from './pages/Home'


interface ISideDrawerState {
  isOpen: boolean;
}

class App extends Component<{}, ISideDrawerState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isOpen: false,
    };
  
    this.drawToggleClickHandler = this.drawToggleClickHandler.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
  
  }

  public render() {
    return (
      <Router>
        <div className="App">
          <Navbar drawToggleClickHandler={this.drawToggleClickHandler} />
          <SideDrawer show={this.state.isOpen} drawToggleClickHandler={this.drawToggleClickHandler} />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }

  private drawToggleClickHandler = () => {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen };
    });
  }
  
  private backdropClickHandler = () => {
    this.setState({ isOpen: false });
  }
}

export default App;
