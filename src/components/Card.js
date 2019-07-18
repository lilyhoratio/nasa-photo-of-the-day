import React from "react";
import "./../Card.css";

function Card(props) {
    // console.log("nasa data!!!!", props)
    const {title, date, explanation, mediaType, url} = props

    return (
        <div className = "card">
            <h1 className="card-header">{title}</h1>
            <p>{date}</p>
            <p className = "card-explanation">{explanation}</p>
            {mediaType === "video" ? (
                <iframe max-width="500" height="340" src={url}></iframe>
            ) : ( 
                <img alt="space stuff" max-width="500" height="340" src={url}></img>
            )}
        </div>
        
    )
}

export default Card;