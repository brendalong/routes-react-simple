import React, { Component } from 'react';
import {
   BrowserRouter as Router,
   Route,
   Link,
} from 'react-router-dom';
import Topics from './Topics';
import Home from './Home'

//Be sure to npm install react-router-dom
//react-router-dom includes three packages:
//react-router - core package
//react-router-dom - web
//react-router-native - mobile

/*
//move to own component
function Home(props) {
   return (
      <h1>
         Home. {props.name}
    </h1>
   )
}
*/

class App extends Component {
   render() {
      return (
         <Router>
            <div style={{ width: 1000, margin: '0 auto' }}>
               <ul>
                  {/* Link replaces the default <a href=""></a> HTML tag. It accepts a to="" prop that points to the URL location we want to go to. */}

                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/topics'>Topics</Link></li>
               </ul>

               <hr />
               {/* Routes will go here */}
               {/* The component that will be created via Route will automatically be passed the followingprop objects: match, location, history */}
               {/* Route component renders a page if the current URL location matches the path prop specified in it. It also accepts component, render and children props. */}
               {/* All paths have /, so we need to include exact if we just want one item*/}

               <Route exact path='/' render={()=>{
                  return <Home name="Brenda" />
               }} />

               <Route path='/topics' component={Topics} />

               {/* Check out Switch as well */}
               {/* As soon as Switch finds a match, it stops looking */}
            </div>
         </Router>
      )
   }
}

export default App