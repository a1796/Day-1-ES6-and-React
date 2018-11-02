import React from "react";
import "./App.css";

export default class Clock extends React.Component {
    constructor(props) {
      super(props);
      //1. When <Clock /> is passed to render(), reacts
      //calls the constructor of the CLock component.
      //Since Clock needs to display the current time,
      //it initializes this.state with an object including the
      //current time. We will later update this state.
      this.state = {date: new Date()};
    }

    //3. When the Clock output is inserted in the DOM, React calls
    //the componentDidMount() lifecycle method. Inside it, the Clock
    //component asks the browser to set up a timer to call the
    //component's tick() method once a second.
    componentDidMount(){
        this.timerID = setInterval( () => this.tick(), 1000);
    }

    //5. If the Clock component is ever removed form the DOM
    //React calls the componentWIllUnmount() lifecycle method so the timer is stopped.
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    //4. Every second the browser calls the tick() method.
    //Inside it, the Clock component schedules a UI update by calling
    //setState() with an object containing the current time.
    //Thanks to the setState() call, React know the state has changed
    //and calls the render() method again to learn whats hould be on the screen.
    //This time, this.state.date in the render() method will be different,
    //and so the render output will include the updated time.
    //React updates the DOM accordingly.
    tick() {
        this.setState({date: new Date()});
    }
    
    //2. React then calls the Clock component's render() method.
    //This is how React learns what should be displayed on the screen.
    //React then updates the DOM to match the CLock's render output.
    render() {
      return (
        <div>
        <header className="App-header">

          <h1>Hello, nigga</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </header>
        </div>
      );
    }
  }