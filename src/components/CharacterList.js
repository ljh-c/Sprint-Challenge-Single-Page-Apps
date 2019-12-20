import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import PageBar from "./PageBar";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
      // console.dir(response.data);
      // console.dir(response.data.results);
      // console.dir(response.data.results[0]);
      setCharacters(response.data.results);
      setResults(response.data.results);
    })
    .catch(error => {
      console.log('Data not returned', error);
    })
  }, []);

  // * * * PAGINATION
  const pageSize = 3;
  const pageCount = Math.ceil(results.length / pageSize);
  const [currentPage, setCurrentPage] = useState(0);

  const handleClick = (event, index) => {
    event.preventDefault();
    setCurrentPage(index);
  };

  return (
    <>
    <SearchForm characters={characters} setResults={setResults} />

    <PageBar handleClick={handleClick} currentPage={currentPage} pageCount={pageCount} />

    <section className="character-list grid-view">
      <h2>Characters</h2>
      {results.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
      .map(char => {
        return <CharacterCard char={char} key={char.id} />
      })}
    </section>
    </>
  );
}

