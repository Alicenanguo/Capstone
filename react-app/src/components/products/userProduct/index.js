import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import StarRating from 'react-star-ratings'

import { getCurrentProduct } from "../../../store/product";
import DeleteProduct from "../DeleteProduct";
import UpdateProductModal from "../EditProductModal";
import UploadPicture from "../../Images/Images";
import './userProduct.css'


function GetCurrentProduct() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoaded, setIsLoaded] = useState(false);
  const { productId } = useParams();

  const currentUser = useSelector((state) => state.session.user);
  console.log("currentUser", currentUser);

  const currentProduct = useSelector((state) => state.products.allProducts);
  console.log("products_getCurrent", currentProduct);

  if (!currentUser) {
    history.push("/");
  }

useEffect(() => {
    dispatch(getCurrentProduct())
    .then(() => setIsLoaded(true))
  }, [dispatch]);

  let currentProductArr;
  if (isLoaded) {
    currentProductArr = Object.values(currentProduct);
    if (currentProductArr.length === 0) {
      return <div className="no_reviews">
        <i class="fa-solid fa-face-sad-tear"></i>
        Sorry! you do not have any product for selling.
      </div>
    }
  }

  return (
    <div className="manage_listing_container">
      {isLoaded && (
        <>
          <div className="currentUser_product">
            <div className="user_review_name">
              All your products for selling
            </div>
            {currentProductArr?.length > 0 &&
              currentProductArr.map((el) => (
                <>
                  <div className="currentProduct_info" key={el.id}>
                    <div>
                      <img
                        className="listing_product_img"
                        src={el.preview_image}
                        alt={el.name}
                        onError={e => { e.currentTarget.src = "/default.jpeg"; }}
                      />
                    </div>

                    <div className="listing_right">
                      <div className="listing_product_address">
                        <NavLink id='listing_name' to={`/products/${el?.id}`}>
                          <div className="listing_product_name">{el?.name}</div>
                        </NavLink>
                        <p className="listing_product_description">
                          {el?.description}
                        </p>

                        <div className="listing_product_price">${el?.price}</div>

                        <div className="all_product_review">
                        <div className="all_product_review_stars">
                <StarRating
                  numberofStars={5}
                  rating={el?.average_rating}
                  starRatingColor='rgb(57,57,57)'
                  starEmptyColor='rgb(227,227,227)'
                  starDimension='18px'
                  starSpacing='2px'

                  />
                          </div>

                <div className="all_product_review_nums">({el?.review_nums})</div>
                </div>
                          </div>


                      <div className="edit_delete_button">
                        <div
                          id="listing_edit_button"
                          to={`/products/${productId}/edit`}
                        >
                        <UpdateProductModal product={el} productId={productId} />
                        </div>
                        <div className="listing_delete_button">
                          <DeleteProduct productId={el.id} />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </>
      )}
    </div>
  );
};
export default GetCurrentProduct;
