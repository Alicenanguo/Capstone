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
    dispatch(searchThunk(keyword)).then(() => setIsLoaded(true));
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
            {searchArr?.length ? (
              <div className="search-result-num">
                {searchArr?.length} search result for "{keyword}"
              </div>
            ) : (
              <>
                <div className="no-search-result">
                  Sorry, we could not find any item for "{keyword}"
                </div>
                <div className="text-find-else">
                  <NavLink to={"/"}>Find somthing you love</NavLink>
                </div>
              </>
            )}
          </div>

          <div className="search-main">
            <div className="search-result-info">
              {searchArr?.map((el, i) => {
                return (
                  <div className="search-info-list">
                    <NavLink
                      to={`/products/${el?.id}`}
                      key={el.id}
                      className="search-link"
                    >
                      <div className="search-product-img-container">
                        <img
                          src={el?.preview_image}
                          className="search-product-img"
                          alt="images"
                        ></img>
                      </div>
                      <div className="search-product-name">{el?.name}</div>
                      {el?.review_nums > 0 && (
                        <>
                          <div className="search-product-stars">
                            <span className="search-product-num-reviews">
                              {Number(el?.average_rating) % 1 ? (
                                <span>
                                  {[
                                    ...Array(Math.floor(el?.average_rating)),
                                  ].map((star) => (
                                    <i className="fa-solid fa-star"></i>
                                  ))}
                                  <i
                                    className="fa fa-star-half-o"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              ) : (
                                <span>
                                  {[...Array(el?.average_rating)].map(
                                    (star) => (
                                      <i className="fa-solid fa-star"></i>
                                    )
                                  )}
                                </span>
                              )}
                              ({el?.review_nums})
                            </span>
                          </div>
                        </>
                      )}
                      <div className="search-product-price">
                        ${parseFloat(el?.price).toFixed(2)}
                      </div>
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Search;
