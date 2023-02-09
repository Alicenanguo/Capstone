import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchThunk } from "../../store/product";
import "./NavBar.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [keyword, setKeyword] = useState("");
  

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!keyword.length) {
      return;
    }

    const res = await dispatch(searchThunk(keyword));
    if (res.ok) {
      history.push(`/search/${keyword}`);
    }
    setKeyword("");
  };
  return (
    <div className="searchBar-container">
      <form onSubmit={onSubmit} className="searchBar-form">
        <input
          className="searBar-input"
          placeholder="Search for anything"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="SearchBar-button" type="submit">
          <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
