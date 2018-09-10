import React, { Component } from 'react';

class Home extends Component {
   constructor(){
      //if using a constructor, must call super to use `this` in this components
      super();
      console.log("Home: constructor")
   }

   /*
   Called in the following order when an instance of a component is
   being created and inserted into the DOM

   constructor()
   static getDerivedStateFromProps()
   render()
   componentDidMount()
   */



   componentDidMount(){
      console.log("Home: componentDidMount");
   }

   componentWillUnmount(){
      console.log("Home: componentWillUnmount");
   }

   render(){
      console.log("Home: render")
      return (
         <h1>
            Home. {this.props.name}
         </h1>
      )
   }

}

export default Home;