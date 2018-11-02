import React from "react";
import "./App.css";
import {names} from "./dataStore2";

function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
  }

  function WelcomePerson(props){
    //   create variables       //take them from here
    const {firstName, lastName} = props.person;
      return <h2>Welcome, {firstName} {lastName}!</h2>
  }
  
  export default function App() {
    return (
      <div>
                  <header className="App-header">

        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
    {/* <Function      prop */}
        <WelcomePerson person={names[0]} />
        <WelcomePerson person={names[1]} />
        <WelcomePerson person={names[2]} />
        </header>
      </div>
    );
  }
  
