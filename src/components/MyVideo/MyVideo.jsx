import React from "react";
import { Card, Button } from "react-bootstrap"

function MyVideo() {
    return (
        <div>
            <h2>My Youtube Video</h2>
            <iframe
                width="956"
                height="538"
                src="https://www.youtube.com/embed/OPD3R1b0pK8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MyVideo;
