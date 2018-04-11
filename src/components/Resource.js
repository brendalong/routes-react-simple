import React, { Component } from 'react'
import {
   BrowserRouter as Router,
   Route,
   Link,
} from 'react-router-dom';
import topics from './mydata';

function Resource({ match }) {
   const topic = topics.find(({ id }) => id === match.params.topicId)
      .resources.find(({ id }) => id === match.params.subId)

   return (
      <div>
         <h3>{topic.name}</h3>
         <p>{topic.description}</p>
         <a href={topic.url}>More info.</a>
      </div>
   )
}

export default Resource;