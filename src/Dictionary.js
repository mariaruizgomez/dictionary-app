import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";


export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>

      <form
        className="col-6 d-flex me-5 justify-content-center"
        onSubmit={search}
      >
        <input
          type="search"
          placeholder="Type a word"
          autoFocus="on"
          className="form-control me-3"
          onChange={handleKeywordChange}
        />
        <div>
          <button className="btn btn-secondary" title="Search">
            Search
          </button>
        </div>
      </form>
      <Results results={results} />
    </div>
  );
}
