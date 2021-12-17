import React, { useState } from "react";
import Person from "../components/Person/Person";
import Cockpit from "../components/Cockpit/Cockpit";
import "./App.css";

export default function UserProfile() {
  const [toggle, setToggle] = useState("Show");
  const [personData, setPersonData] = useState([
    { id: 1, name: "max", age: 25 },
    { id: 2, name: "William", age: 22 },
    { id: 3, name: "Jack", age: 28 },
  ]);
  const [bgcolor, setBgcolor] = useState("white");

  const changeName = (e) => {
    // alert('inputing in first text')
    console.log(e.target.value);
    console.log(e.target.id);
    let _id = e.target.id;
    const new_personData = Array.from(personData);
    new_personData.splice(_id - 1, 1, {
      id: _id,
      name: e.target.value,
      age: personData[_id - 1].age,
    });
    setPersonData(new_personData);
    // debugger;
  };

  const nameList = (e) => {
    var x = document.getElementById("showBtn").innerText;
    console.log(x);
    if (x === "Show") {
      // alert('show')
      setToggle("Hide");
    } else {
      setToggle("Show");
    }
  };

  const person_array = personData.map((person) => (
    <Person
      id={person.id}
      name={person.name}
      age={person.age}
      onChange={changeName}
    ></Person>
  ));

  const style = {
    backgroundColor: "green",
    color: "white",
  };

  let persons = null;
  if (toggle === "Hide") {
    persons = <>{person_array}</>;
    style.backgroundColor = "red";
    // document.getElementById("showBtn").style.backgroundColor = "red";
  } else {
    persons = "";
  }

  return (
    <div className="App">
      <Cockpit
        toggle={toggle}
        id="showBtn"
        onClick={nameList}
        style={style}
        personData={personData}
      />
      {persons}
    </div>
  );
}
