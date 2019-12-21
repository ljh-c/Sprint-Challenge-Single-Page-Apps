import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

export default function CharacterCard({ char }) {
  return (
    <Card>
      <CardImg top width="100%" src={char.image} alt={char.name} />
      <CardBody>
        <CardTitle>
          <h3>{char.name}</h3>
        </CardTitle>
      </CardBody>
      <CardText>Status: <strong>{char.status}</strong></CardText>
      <CardText>Species: <strong>{char.species}</strong></CardText>
      <CardText>Location: <strong>{char.location.name}</strong></CardText>
    </Card>
  );
}