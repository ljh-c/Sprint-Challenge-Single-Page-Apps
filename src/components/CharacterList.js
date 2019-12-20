import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
      console.dir(response.data);
      console.dir(response.data.results);
      console.dir(response.data.results[0]);
      setCharacters(response.data.results);
    })
    .catch(error => {
      console.log('Data not returned', error);
    })
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
