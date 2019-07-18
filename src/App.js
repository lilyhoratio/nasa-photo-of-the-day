import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card.js";
import Header from "./components/Header.js";

function App() {
  // for one object
  const [nasaObj, setNasaObj] = useState({});

  // for array of objects
  // const [nasaObj, setNasaObj] = useState([]);

  // axios directly in function would rerun the GET request each time the function is run
  // useEffect - whenever data changes from last render of function, useEffect runs callback. runs one time
  useEffect(() => {
    const dateArray = ["2019-01-01", "2019-05-12", "2019-07-18"]

    dateArray.forEach(newDate => {
      axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=21qDXlW15GNFOXLKsjJBrPnCHKPDftSc4Y4S6ce6&date=${newDate}`
        // "https://api.nasa.gov/planetary/apod?api_key=21qDXlW15GNFOXLKsjJBrPnCHKPDftSc4Y4S6ce6"
      )
      .then(res => {
        const nasaData = res.data;
        console.log(nasaData);
        setNasaObj(res.data);
      })
      .catch(error => console.log("API error", error));
    })

  }, []);

  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <Header/>
      <Card 
        title={nasaObj.title}
        date={nasaObj.date}
        explanation={nasaObj.explanation}
        mediaType={nasaObj.media_type}
        url={nasaObj.url}
      />
    </div>
  );
}

export default App;
