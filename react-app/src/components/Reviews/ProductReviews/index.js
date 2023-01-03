import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";

import { getAllReviewsTHUNK } from "../../../store/review";
import "./ProductReviews.css";

const GetProductReviews = ({ productId }) => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const user = useSelector((state) => state.session.user);
  const product = useSelector((state) => state.products.singleProduct);
  console.log("product_getProductReviews", product);

  const reviews = useSelector((state) => state.reviews.productReviews);
  console.log("reviews_getproductReviews", reviews);

  useEffect(() => {
    dispatch(getAllReviewsTHUNK(productId)).then(() => setIsLoaded(true));
  }, [dispatch, productId]);

  let reviewsArr;
  console.log("reviewsArr____getproductReviews", reviews);
  if (isLoaded) {
    reviewsArr = Object.values(reviews);
  }

  return (
    isLoaded && (
      <>
        <div className="reviews_by_productId">
          {reviews &&
            reviewsArr.map((el) => (
              <div key={el?.id} className="review_el">
                <div>
                        <p className="review_by_name">{el?.user.first_name}{' '}{el?.user.last_name}</p>
                </div>
                <div className="review_create_time">
                        <p> {el?.createAt.slice(5, 11)},{' '}{el?.createAt.slice(12, 17)}</p>
                </div>
                <div>
                  <p className="review_content">{el?.review}</p>
                </div>
                {/* <div>{el.reviewImages && el.reviewImages.url}</div> */}
              </div>
            ))}
        </div>
      </>
    )
  );
};
export default GetProductReviews;
