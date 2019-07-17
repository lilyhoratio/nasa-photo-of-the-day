import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Main from "./../src/components/Main.js";

function App() {

  const [nasaObj, setNasaObj] = useState({})


  // axios directly in function would rerun the GET request each time the function is run
  // useEffect - whenever data changes from last render of function, useEffect runs callback. runs one time
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=21qDXlW15GNFOXLKsjJBrPnCHKPDftSc4Y4S6ce6")
      .then(res => {
        const nasaData = res.data
        setNasaObj(res.data)
      })
      .catch(error => console.log("API error", error))
  },[])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Main title={nasaObj.title}/>
    </div>
  );
}

export default App;
