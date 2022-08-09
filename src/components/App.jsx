import React, { useState } from "react";
import "../../public/styles.css";

function App() {
  var [fullname, setFulname] = useState({
    fName: "",
    lName: ""
  });

  function updateFullname(event) {
    console.log(event);
    const { name, value } = event.target;

    setFulname((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullname.fName}
        {fullname.lName}
      </h1>
      <form>
        <input
          onChange={updateFullname}
          name="fName"
          placeholder="First Name"
          value={fullname.fName}
        />
        <input
          onChange={updateFullname}
          name="lName"
          placeholder="Last Name"
          value={fullname.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
