import React, { useState } from "react";

export default function SearchForm() {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    console.log(event.target.value);
    console.log(query);
    setQuery(event.target.value);
  };

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
