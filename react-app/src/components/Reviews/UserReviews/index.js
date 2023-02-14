import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams, useHistory } from "react-router-dom";
import StarRating from "react-star-ratings";

import { getUserReview } from "../../../store/review";
import { deleteReview } from "../../../store/review";
import EditReviewModal from "../EditReviewModal";
import "./userReview.css";

const UserReviews = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { reviewId } = useParams()

  const sessionUser = useSelector((state) => state.session.user);
  console.log("user_userReviews", sessionUser);

  const reviews = useSelector((state) => state.reviews.userReviews);
  const reviewsArr = Object.values(reviews);
  console.log("reviews_getspotReviews", reviewsArr);

  useEffect(() => {
    dispatch(getUserReview());
  }, [dispatch]);

  if (reviewsArr.length === 0) {
    return <div className="no_reviews">
    <i class="fa-solid fa-face-sad-tear"></i>
      Sorry! You do not have any reviews.
    </div>;
  }

  const handleDeleted = async (reviewId) => {
    if (window.confirm("Do you want to delete this Review?")) {
      const result = await dispatch(deleteReview(reviewId));
      console.log("resule_delte_reviews", result);
      if (result)
        // history.push('/reviews/current')
        dispatch(getUserReview());
    }
  };

  // if (!reviews.ReviewImages) return null
  // if (!reviews.ReviewImages?.length > 0) return null

  return (
    <div className="user_reviews_Info_conntainer">
      <p className="user_review_name">{`Hi, ${sessionUser.firstName}! check all your Reviws`}</p>

      <div className="user_single_review">
        {reviews &&
          reviewsArr.map((el) => (
            <div className="user_review_el" key={el.id}>
              <div className="user_review_img">
                <img
                  className="user_review_Img_review"
                  src={el?.product?.preview_image}
                  alt={el?.id}
                  onError={e => { e.currentTarget.src = "/default.jpeg"; }}
                />
              </div>

              <div className="user_review_right">
                <p className="user_list_review_name">{el?.product?.name}</p>

                <div className="list_star_group">
                  <div className="user_review_star">
                    <StarRating
                      numberofStars={5}
                      rating={el?.stars}
                      starRatingColor="rgb(57,57,57)"
                      starEmptyColor="rgb(227,227,227)"
                      starDimension="18px"
                      starSpacing="2px"
                    />
                    {/* <i className="fa-solid fa-star" />

                              {parseFloat(el?.stars).toFixed(1)} */}
                  </div>

                  <div className="user_review_content">
                    <p className="content">{el?.review}</p>
                  </div>
                </div>
                <div className="review_create_time">
                  {el?.createAt?.slice(5, 11)}, {el?.createAt?.slice(12, 17)}
                </div>

                <div className="userReview_delete_button">
                  <div  id="review_edit_button"
                    to={`/reviews/${reviewId}/edit`}>
                    <EditReviewModal reviewId={reviewId} />

                  </div>
                    <button onClick={() => handleDeleted(el.id)}>
                    Delete Review
                  </button>
                  {/* {console.log("el_______", el)} */}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserReviews;
