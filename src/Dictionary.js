import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>

      <form onSubmit={search}>
        <input
          type="search"
          placeholder=""
          autoFocus="on"
          className="form-control"
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}
