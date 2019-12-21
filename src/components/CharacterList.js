import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import PageBar from "./PageBar";
import { Button } from "reactstrap";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');
  const [sheet, setSheet] = useState(1);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get(`https://rickandmortyapi.com/api/character/?page=${sheet}`)
    .then(response => {
      // console.dir(response.data);
      // console.dir(response.data.results);
      // console.dir(response.data.results[0]);
      setCharacters([...characters, ...response.data.results]);
      setResults([...results, ...response.data.results]);
    })
    .catch(error => {
      console.log('Data not returned', error);
    })
  }, [sheet]);

  // * * * GET MORE CHARACTERS

  function getMoreCharacters() {
    setSheet(sheet + 1);
  }

  // * * * PAGINATION
  const pageSize = 4;
  const pageCount = Math.ceil(results.length / pageSize);
  const [currentPage, setCurrentPage] = useState(0);

  const handleClick = (event, index) => {
    event.preventDefault();
    setCurrentPage(index);
  };

  useEffect(() => {
    if (query.length > 0) setCurrentPage(0);
  }, [query]);

  return (
    <>
    <SearchForm characters={characters} setResults={setResults} query={query} setQuery={setQuery} />

    <PageBar handleClick={handleClick} currentPage={currentPage} pageCount={pageCount} />

    <Button color="primary" size="sm" onClick={getMoreCharacters}>
      More Characters
    </Button>

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

