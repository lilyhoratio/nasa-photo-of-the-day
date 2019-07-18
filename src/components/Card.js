import React from "react";

function Card(props) {
    // console.log("nasa data!!!!", props)
    const {title, date, explanation, mediaType, url} = props

    return (
        <div>
            <h1>{title}</h1>
            <p>{date}</p>
            <p>{explanation}</p>
            {mediaType == "video" ? (
                <iframe max-width="500" height="340" src={url}></iframe>
            ) : ( 
                <img max-width="500" height="340" src={url}></img>
            )}
        </div>
        
    )
}

export default Card;