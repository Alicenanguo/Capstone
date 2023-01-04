import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams, useHistory } from "react-router-dom";
import { createReviews, getAllProductReviews } from "../../../store/review";
import "./CreateReview.css";
import { getOneProductThunk } from "../../../store/product";

const CreateReviews = ({ productId, setShowModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);
  const product = useSelector((state) => state.products.singleProduct);

  console.log("-----------------------review");
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(5);

  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setHasSubmitted(true);

    const reviewInfo = {
      review,
      stars,
    };

    console.log("review_info_in_create_reviews", reviewInfo);

    const result = await dispatch(createReviews(reviewInfo, productId));
    // console.log("createReviews_result", result);
    //   .then(() => dispatch(getOneProductThunk(productId)))
    //   .then(() => dispatch(getAllProductReviews(productId)))
    //   .catch(async (res) => {
    //       const data = await res.json();
    //       console.log('data_in_add_review',data)
    //     if (data && data.errors) setValidationErrors(data.errors);

    //       console.log('res****************',res)
    //     if (res.status === 403) {
    //       setValidationErrors(["you have a review for this product"])
    //     }

    // })
    if (result.errors) {
      setValidationErrors([result.errors]);
    }
    console.log("res_in_create_reviews", result);
    console.log("errors_in_create_review", result.errors);
    // console.log("errors_in_create_reviews", validationErrors);

    if (!result.errors && validationErrors.length === 0) {
      setShowModal(false);
      await dispatch(getOneProductThunk(productId))
        .then(() => dispatch(getAllProductReviews(productId)))
        .then(() => history.push(`/products/${productId}`));
    }
  };
  console.log("errors_in_add_reviews", validationErrors);

  const cancelSubmit = (e) => {
      e.preventDefault();
      setShowModal(false);
      history.push(`/products/${productId}`);
    };

    const ratingStar = [1, 2, 3, 4, 5];

  return (
    <>
      <form className="createReviews_form_add" onSubmit={onSubmit}>
        <h2 className="review_info">Please Leave Your Review</h2>

        {hasSubmitted && validationErrors.length > 0 && (
          <div className="err-div">
            <ul className="error_container">
              {validationErrors?.map((error, idx) => (
                <li className="error" key={idx}>
                  {error}
                </li>
              ))}
            </ul>
          </div>
        )}

        <label className="review_stars">
          Rating
          <select
            id="stars"
            type="number"
            name="stars"
            onChange={(e) => setStars(e.target.value)}
            value={stars}
            required
          >
            {ratingStar.map((el) => (
              <option key={el}>{el}</option>
            ))}
          </select>
        </label>

        <div className="create_review_content">
          <label>
            <div>Review</div>

            <div>
              <textarea
                id="review"
                type="text"
                name="review"
                onChange={(e) => setReview(e.target.value)}
                value={review}
                required
              ></textarea>
            </div>
          </label>
              </div>

              <div>
        <button type="submit" id="submit_button">
          Create Review
              </button>
              <button className="cancel_product_button" onClick={cancelSubmit}>
              Cancel
                  </button>
                  </div>
      </form>
    </>
  );
};

export default CreateReviews;
