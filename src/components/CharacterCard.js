import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

export default function CharacterCard({ char }) {
  return (
    <Card>
      <CardImg top width="100%" src={char.image} alt={char.name} />
      <CardBody>
        <CardTitle>
          <h3>{char.name}</h3>
        </CardTitle>
      </CardBody>
      <p>Status: <strong>{char.status}</strong></p>
      <p>Species: <strong>{char.species}</strong></p>
    </Card>
  );
}