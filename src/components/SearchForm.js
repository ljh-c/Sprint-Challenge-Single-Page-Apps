import React, { useEffect } from "react";

export default function SearchForm({ characters, setResults, query, setQuery }) {
  const handleChange = event => {
    // console.log(event.target.value);
    setQuery(event.target.value);
  };

  useEffect(() => {
    // returns new filtered array
    const search = characters.filter(char => {
      return char.name.toLowerCase().includes(query.toLowerCase());
    });

    setResults(search);
  }, [query]);

  return (
    <section className="search-form">
      <form>
        <label htmlFor="char-name">Search</label>
        <input 
          id="char-name"
          type="text"
          name="char-name"
          placeholder="search by name"
          value={query}
          onChange={handleChange}
        />
      </form>
    </section>
  );
}
