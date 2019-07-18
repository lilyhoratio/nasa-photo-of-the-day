import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card.js";
import Header from "./components/Header.js";
import 'semantic-ui-css/semantic.min.css';
import styled from 'styled-components';

const AppCardDiv = styled.nav`
  display: flex;
  flex-wrap: wrap;
`

function App() {
  // for one object
  // const [nasaObj, setNasaObj] = useState({});

  // for array of objects
  const [nasaObjs, setNasaObjs] = useState([]);
  useEffect(() => {
    const dateArray = ["2019-01-01", "2019-05-12", "2017-01-01", "2017-01-02", "2018-01-02", "2019-07-18"]
    dateArray.forEach(newDate => {
      axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=21qDXlW15GNFOXLKsjJBrPnCHKPDftSc4Y4S6ce6&date=${newDate}`
        // "https://api.nasa.gov/planetary/apod?api_key=21qDXlW15GNFOXLKsjJBrPnCHKPDftSc4Y4S6ce6"
      )
      .then(res => {
        const nasaData = res.data;
        console.log(`API DATA OBJECT ==== DATE${newDate}:${nasaData}`);
        // setNasaObj(res.data);

        setNasaObjs(nasaObjs => {
          console.log("OBJECT >>>>> ", nasaObjs)
          //empty array, then concat an object?
          return nasaObjs.concat(nasaData)
        })
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

      {/* for single card */}
      {/* <Card 
        title={nasaObj.title}
        date={nasaObj.date}
        explanation={nasaObj.explanation}
        mediaType={nasaObj.media_type}
        url={nasaObj.url}
      /> */}

      {/* for array of cards */}
      <AppCardDiv>
        {nasaObjs.map(nasaObj => (
          <Card 
            title={nasaObj.title}
            date={nasaObj.date}
            explanation={nasaObj.explanation}
            mediaType={nasaObj.media_type}
            url={nasaObj.url}
          />
        ))}
      </AppCardDiv>
    </div>
  );
}

export default App;
