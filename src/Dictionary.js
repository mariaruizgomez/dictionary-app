import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleDictionaryResponse);
    let pexelsApiKey =
      "5e18uCq69A7enlgU5hjwv8umIyYE2DKuBTANxlZoFjir6LhrVEdbdSpg";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSumit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <i class="fa-solid fa-book-open"></i>
        <h1>Dictionary</h1>
        <section>
          <form
            className="col-12 d-flex me-5 justify-content-center"
            onSubmit={handleSumit}
          >
            <input
              type="search"
              placeholder="Type a word"
              autoFocus="on"
              className="form-control me-3"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
            <div>
              <button className="btn" title="Search">
                Search
              </button>
            </div>
          </form>
          <div className="suggestions">
            <i class="fa-regular fa-lightbulb"></i>{" "}
            <strong>most-searched-for definitions: </strong>Trove, Sauté, canny,
            foray...{" "}
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
