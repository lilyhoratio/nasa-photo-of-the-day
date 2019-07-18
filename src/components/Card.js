import React from "react";
// import Iframe from 'react-iframe';

function Card(props) {
    console.log("nasa data!!!!", props)

    const {title, date, explanation, mediaType, url} = props

    return (
        <div>
            <h1>{title}</h1>
            <p>{date}</p>
            <p>{explanation}</p>
            <iframe width="420" height="315" src={url}></iframe>
        </div>
        
    )
}

export default Card;