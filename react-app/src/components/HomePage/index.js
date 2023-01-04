import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";
import { getThunkAll } from "../../store/category";
import { getHomeProducts } from "../../store/product";
import StarRating from 'react-star-ratings'
import "./HomePage.css";

function HomePage() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const user = useSelector((state) => state.session.user);

  const allCategories = useSelector((state) => state.categories.categories);
  //   const allArr = Object.values(allCategories);

  const products = useSelector((state) => state.products.allProducts);
  console.log("product_in_home_page", products);

  useEffect(() => {
    dispatch(getThunkAll())
      .then(() => dispatch(getHomeProducts()))
      .then(() => setIsLoaded(true));
  }, [dispatch]);

  let allArr;
  let productArr;
  if (isLoaded) {
    allArr = Object.values(allCategories);
    productArr = Object.values(products);
  }
  console.log("allCategories in homePAGE", allArr);

  return (
    isLoaded && (
      <div>
        <div className="user_welcome">
          {user ? (
            <p className="home_title">{`Welcome back, ${user.firstName}!`}</p>
          ) : (
            <div className="home_title" id='not_login'>
              <div className="first_line">Discover the magic of Nansty</div>
              <div className="sec_line">
                Get thoughtfully crafted goods, vintage treasures, and unique
                finds
              </div>
            </div>
          )}

          <div className="all_category_homepage">
            {allArr?.map((el) => (
              //   {
              //     console.log("+++++++++el", el);
              //   }
              <div className="category_list_homepage" key={el?.id}>
                <NavLink to={`/categories/${el?.id}`}>
                  <img
                    className="category_homepage_img"
                    src={el?.category_image}
                    alt={el?.name}
                  ></img>
                </NavLink>
                <p>{el?.name}</p>
              </div>
            ))}
          </div>

          <div className="homepage_all_products">
            {productArr?.map((el) => (
                <div className="product_show_cards" key={el?.id}>
                    <NavLink to={`/products/${el?.id}`}>
                    <img
                    className="products_homepage_img"
                        src={el?.preview_image}
                        alt={el?.name} />
                </NavLink>

                {/* <div className="getall_review_stars">
                <StarRating
                  numberofStars={5}
                  rating={el.average_rating}
                  starRatingColor='rgb(57,57,57)'
                  starEmptyColor='rgb(227,227,227)'
                  starDimension='18px'
                  starSpacing='2px'

                  />
                </div> */}

                  <div>${el?.price}</div>


              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}

export default HomePage;
