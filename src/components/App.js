import React, { Component } from 'react';
import './App.css';
import Hello from './Hello';
import About from './About';
import Books from './Books';
import BooksID from './BooksID';
import Home from './Home';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

//Be sure to npm install react-router-dom
//react-router-dom includes three packages:
//react-router - core package
//react-router-dom - web
//react-router-native - mobile

// import route Components here
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
                {/* Link replaces the default <a href=""></a> HTML tag. It accepts a to="" prop that points to the URL location we want to go to. */}
                  <ul>
                    <li><Link to="/hello">Hello</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/books">Books</Link></li>
                    <li><Link to="/booksID">Books with ID</Link></li>
                  </ul>
                  <hr/>
        {/* Routes will go here */}
        {/* The component that will be created via Route will automatically be passed the followingprop objects: match, location, history */}
        {/* Route component renders a page if the current URL location matches the path prop specified in it. It also accepts component, render and children props. */}
        {/* All paths have /, so we need to include exact if we just want one item*/}
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/hello" component={Hello} />
                <Route path="/books" component={Books} />
                <Route path="/booksID" component={BooksID} />
        {/* Check out Switch as well */ }
        {/* As soon as Switch finds a match, it stops looking */}
        </div>
      </div>
      </Router>
    );
  }
}
export default App;