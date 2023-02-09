import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { searchThunk } from "../../store/product";
import "./Search.css";

const Search = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  const user = useSelector((state) => state.session.user);
  console.log("user_in_search", user);
  const productSearch = useSelector((state) => state?.products?.searchProducts);
  console.log("product_in_search", productSearch);


  useEffect(() => {
      dispatch(searchThunk(keyword))
    //   .then(() => setIsLoaded(true));
  }, [dispatch, keyword]);

  let searchArr;
  if (isLoaded) {
    searchArr = Object.values(productSearch);
  }
  console.log("SearchArr", searchArr);

    return (
        isLoaded && (
            <>
    <div className="search-container">
      <div className="search-title">
              {searchArr?.length ?
                  <div className='search-result-num'>
                      {searchArr?.length} search result for {keyword}
                  </div>
                  :
                  <div className="no-search-result">
                      Sorry, we could not find any item for {keyword}
                  </div>
              }
      </div>
                </div>
            </>
        )
  );
};

export default Search;
