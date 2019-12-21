import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Collapse, Card, CardBody } from "reactstrap";

export default function LocationList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location`)
    .then(response => {
      // console.dir(response.data);
      console.dir(response.data.results);
      setLocations([...locations, ...response.data.results]);
    })
    .catch(error => {
      console.log('Data not returned', error);
    })
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <section className="location-list">
      <h2>Locations</h2>
      {locations.map(location => {
        return (
          <div key={location.id}>
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>{location.name}</Button>
            <Collapse isOpen={isOpen} style={{ marginBottom: '1rem' }}>
              <Card>
                <CardBody>
                  Population: <strong>{location.residents.length}</strong>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        );
      })}
    </section>
  );
}

