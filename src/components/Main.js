import React from "react";

function Main(props) {
    console.log("nasa data!!!!", props)
    return (
        <h1>{props.title}</h1>
    )
}

export default Main;