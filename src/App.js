import React from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    // fires before component is mounted
    super(props); // makes this refer to this component
    this.state = {
      toggleName: "Show",
      name: "Max",
      personData:[{id:1, name:'max', age:25},
                  {id:2, name:'William', age:22},
                  {id:3, name:'Jack', age:28},]
    }; // set state
  }

  changeName = (e) => {
    // alert('inputing in first text')
    console.log(e.target.value)
    console.log(e.target.id)
    let _id=e.target.id
    const new_personData=Array.from(this.state.personData)
    new_personData.splice(_id-1,1, {id:_id, name:e.target.value, age:this.state.personData[_id-1].age})    
    this.setState({ personData: new_personData });
    debugger
  };

  nameList = (e) => {
    var x = document.getElementById("showBtn").innerText;
    console.log(x);
    if (x === "Show") {
      // alert('show')
      this.setState({ toggleName: "Hide" });
      
    } else {
      this.setState({ toggleName: "Show" });
    }
  };


  
  render() {
    const person_array=this.state.personData.map(person=><Person id={person.id} name={person.name} onChange={this.changeName}></Person>)
    let persons=null
    if (this.state.toggleName==='Show'){
      persons = (
        <>
          {person_array}
        </>
      );
    } else {
      persons=''
    }
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working</p>
        <button id="showBtn" onClick={this.nameList}>
          {this.state.toggleName}
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
