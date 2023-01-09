import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";
import { getThunkAll } from "../../store/category";
import { getHomeProducts } from "../../store/product";
import StarRating from 'react-star-ratings'
import GetProducts from "../products/AllProducts";
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
      <>
          {user ? (
            <div className="home_title">{`Welcome back, ${user.firstName}!`}</div>
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
                <div className="home_category-img">
                <NavLink to={`/categories/${el?.id}`}>
                  <img
                    className="category_homepage_img"
                    src={el?.category_image}
                      alt={el?.name}
                      onError={e => { e.currentTarget.src = "/default.jpeg"; }}
                  ></img>
                </NavLink>
                  </div>
                <div className="home_category_name">{el?.name}</div>
              </div>
            ))}
        </div>

        <div className="user_welcome">
          <div className="homepage_all_products">
              {/* first card */}
            <div className="first_card">
              <div className="first_product">

                <NavLink className='w-100' to={`/products/${productArr[0].id}`}>
                  <img className="first_img"
                    src={productArr[0].preview_image}
                    alt={productArr[0].name}
                    onError={e => { e.currentTarget.src = "/default.jpeg"; }}
                    />
                <div className="home_price">${ productArr[0].price}</div>
                </NavLink>


              </div>

            <div className="second_product">
              <NavLink to={`/products/${productArr[1].id}`}>
                  <img className="second_img"
                    src={productArr[1].preview_image}
                    alt={productArr[1].name}
                    onError={e => { e.currentTarget.src = "/default.jpeg"; }}

                    />
                </NavLink>
                <div className="home_price">${ productArr[1].price}</div>
                </div>
            </div>

            {/* second card */}
            <div className="third_card">
              <div className="third_product">
              <NavLink to={`/products/${productArr[2].id}`}>
                  <img className="third_img"
                    src={productArr[2].preview_image}
                    alt={productArr[2].name}
                    onError={e => { e.currentTarget.src = "/default.jpeg";}}

                  />
                </NavLink>
                <div className="home_price">${ productArr[2].price}</div>

              </div>

            <div className="fourth_product">
              <NavLink to={`/products/${productArr[3].id}`}>
                  <img className="fourth_img"
                    src={productArr[3].preview_image}
                    alt={productArr[3].name}
                    onError={e => { e.currentTarget.src = "/default.jpeg"; }}
                    />
                </NavLink>
                <div className="home_price">${ productArr[3].price}</div>
                </div>
            </div>

            {/* 3 card */}
            <div className="third_card">
              <div className="fifth_product">
              <NavLink to={`/products/${productArr[4].id}`}>
                  <img className="fifth_img"
                    src={productArr[4].preview_image}
                    alt={productArr[4].name}
                    onError={e => { e.currentTarget.src = "/default.jpeg"; }}

                  />
                </NavLink>
                <div className="home_price">${ productArr[4].price}</div>

              </div>

            <div className="six_product">
              <NavLink to={`/products/${productArr[6].id}`}>
                  <img className="six_img"
                    src={productArr[6].preview_image}
                    alt={productArr[6].name}
                    onError={e => { e.currentTarget.src = "/default.jpeg"; }}

                    />
                </NavLink>
                <div className="home_price">${ productArr[6].price}</div>
                </div>
            </div>

             {/* 4 card */}
             <div className="fourth_card">
              <div className="seven_product">
              <NavLink to={`/products/${productArr[5].id}`}>
                  <img className="seven_img"
                    src={productArr[5].preview_image}
                    alt={productArr[5].name}
                    onError={e => { e.currentTarget.src = "/default.jpeg"; }}

                  />
                </NavLink>
                <div className="home_price">${ productArr[5].price}</div>

              </div>

            <div className="eight_product">
              <NavLink to={`/products/${productArr[7].id}`}>
                  <img className="eight_img"
                    src={productArr[7].preview_image}
                    alt={productArr[7].name}
                    onError={e => { e.currentTarget.src = "/default.jpeg"; }}

                    />
                </NavLink>
                <div className="home_price">${ productArr[7].price}</div>
                </div>
            </div>

          </div>

          {/* <div className="homepage_all_products">
            {productArr?.map((el) => (
                <div className="product_show_cards" key={el?.id}>
                    <NavLink to={`/products/${el?.id}`}>
                    <img
                    className="products_homepage_img"
                        src={el?.preview_image}
                        alt={el?.name} />
                </NavLink>

                  <div>${el?.price}</div>
              </div>
            ))}
          </div> */}

          <div>
            <GetProducts />
          </div>

        </div>
      </>
    )
    );
  }

  export default HomePage;
