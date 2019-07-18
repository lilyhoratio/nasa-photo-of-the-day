import React from "react";
import "./../Card.css";
import {Button, Header, Image, Modal} from "semantic-ui-react";
import styled from 'styled-components';


function Card(props) {
    // console.log("nasa data!!!!", props)
    const {title, date, explanation, mediaType, url} = props

    return (
        <div className = "card">
            <Header as="h2">{title}</Header>
            <p>{date}</p>
            <Modal trigger={<Button>See Image</Button>}>
                <Modal.Header as="h2">{title}</Modal.Header>
                <Modal.Header>{date}</Modal.Header>
                <Modal.Content style = {{flexDirection: "column"}} image>
                    <Image size='large' src={url}/>
                    <Modal.Description>
                        <p>{explanation}</p>
                    </Modal.Description>
                </Modal.Content>
            </Modal>

            {/* <h1 className="card-header">{title}</h1>
            <p>{date}</p>
            <p className = "card-explanation">{explanation}</p>
            {mediaType === "video" ? (
                <iframe max-width="500" height="340" src={url}></iframe>
            ) : ( 
                <img alt="space stuff" max-width="500" height="340" src={url}></img>
            )} */}
        </div>
    )
}

export default Card;