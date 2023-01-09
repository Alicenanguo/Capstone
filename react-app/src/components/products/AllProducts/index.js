import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";

import { getAllProducts } from "../../../store/product";
import { getThunkOne } from "../../../store/category";
import StarRating from "react-star-ratings";
import "./AllProducts.css";

const GetProducts = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  let product = useSelector((state) => state.products.allProducts);
  // console.log('product++++++', product)

  let user = useSelector((state) => state.session.user);
  console.log("cur_user", user);

  useEffect(() => {
    dispatch(getAllProducts()).then(() => setIsLoaded(true));
  }, [dispatch]);

  let productArr;
  if (isLoaded) {
    productArr = Object.values(product);
  }
  console.log("productArr", productArr);

  return (
    isLoaded && (
      <>
      {/* <div className="rabbit">
        <div className="recommend_pic">
        <img
        className="pic_get_all"
        src='https://as2.ftcdn.net/v2/jpg/01/37/87/23/1000_F_137872395_EqvoLs5itkB46bMoG2EYyvHtBQzvUcuZ.jpg'
        alt='rabbit'
        />
      </div> */}
        <div className="text">
        <i class="fa-regular fa-face-smile"></i>
          Recommand for You:
        </div>
        {/* </div> */}
        <div className="all_product_container">
          {product &&
            productArr.map((product) => (
              <>
                <div className="product_item" key={product?.id}>
                  <NavLink to={`/products/${product.id}`}>
                    <img
                      className="product_img_all"
                      src={product?.preview_image}
                      alt={product.name}
                      onError={e => { e.currentTarget.src = "https://as2.ftcdn.net/v2/jpg/01/37/87/23/1000_F_137872395_EqvoLs5itkB46bMoG2EYyvHtBQzvUcuZ.jpg"; }}

                    />
                  </NavLink>
                  {/* <div>{product.name}</div> */}
                <div className="all_product_price">${product?.price}</div>

                <div className="all_product_review">
                  <div className="all_product_review_stars">
                    <StarRating
                      numberofStars={5}
                      rating={product?.average_rating}
                      starRatingColor="rgb(57,57,57)"
                      starEmptyColor="rgb(227,227,227)"
                      starDimension="18px"
                      starSpacing="2px"
                      />
                  </div>

                  <div className="all_product_review_nums">
                    ({product?.review_nums})
                  </div>
                </div>
                      </div>
              </>
            ))}
        </div>
      </>
    )
  );
};

export default GetProducts;
