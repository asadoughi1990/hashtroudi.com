import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function MediaCard(props) {
  return (
    <Card>
      <Card.Header
        style={{
          backgroundColor: props.color,
          color: "white",
          fontSize: "large",
        }}
      >
        {props.header}
      </Card.Header>
      <Card.Img variant="top" src={props.imgSrc} />
      <Card.Body>
        <Button
          href={props.target}
          style={{ backgroundColor: props.color, color: "white" }}
          size="lg"
          block
        >
          ورود
        </Button>
      </Card.Body>
    </Card>
  );
}
