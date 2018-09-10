# Simple Routing Example


## Resources:
* https://tylermcginnis.com/react-router-nested-routes/
* https://medium.freecodecamp.org/beginners-guide-to-react-router-4-8959ceb3ad58


https://reactjs.org/docs/react-component.html
### Called in the following order when an instance of a component is being created and inserted into the DOM

* constructor()
* static getDerivedStateFromProps() - rare
* render()
* componentDidMount()

### An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

* static getDerivedStateFromProps()
* shouldComponentUpdate() - rare
* render()
* getSnapshotBeforeUpdate()
* componentDidUpdate()

### This method is called when a component is being removed from the DOM:
* componentWillUnmount()


