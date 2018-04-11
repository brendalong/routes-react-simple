import React, { Component } from 'react'
import {
   BrowserRouter as Router,
   Route,
   Link,
} from 'react-router-dom';
import Topic from './Topic';
import topics from './mydata';

 //match is an object - contains url
    // params — (object) Key/value pairs parsed from the URL corresponding to the dynamic segments of the path.
    // isExact — (boolean) true if the entire URL was matched (no trailing characters).
    // path — (string) The path pattern used to match. Useful for building nested <Route>s
    // url — (string) The matched portion of the URL. Useful for building nested <Link>s


function Topics({ match }) {
   return (
      <div>
         <h1>Topics</h1>
         <ul>
            {topics.map(({ name, id }) => (
               <li key={id}>
                  <Link to={`${match.url}/${id}`}>{name}</Link>
               </li>
            ))}
         </ul>

         <hr />
         {/* place routes here */}

         <Route path={`${match.path}/:topicId`} component={Topic} />
      </div>
   )
}

export default Topics;