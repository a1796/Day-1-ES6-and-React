import React, { Component } from 'react';
import './App.css';
import upper, {text1,text2, text3} from "./dataStore1";
import person from "./dataStore2";
import clock from "./Clock";

const {firstName, lastName, email} = person;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
        <p>{upper("uppercase me daddy")}</p>
        <p>{firstName + " " + lastName + " @ " + email}</p>

        </header>
      </div>
    );
  }
}

export default App;
