import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { getCurrentProduct } from "../../../store/product";

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
      return "Sorry, you do not have any product for selling.";
    }
  }

  return (
    <div className="manage_listing_container">
      {isLoaded && (
        <>
          <div className="currentUser_product">
            <div className="all_your_selling">
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
                      />
                    </div>

                    <div className="listing_right">
                      <div className="listing_product_address">
                        <NavLink to={`/products/${el?.id}`}>
                          <div className="listing_product_name">{el?.name}</div>
                        </NavLink>
                        <p className="listing_product_description">
                          {el?.description}
                        </p>

                        <div className="listing_product_price">${el?.price}</div>
                      </div>

                      <div className="edit_delete_button">
                        <div
                          id="listing_edit_button"
                          to={`/products/${productId}/edit`}
                        >
                          {/* <UpdateSpotModal spot={spot} spotId={spot.id} /> */}
                        </div>
                        <div className="listing_delete_button">
                          {/* <DeleteSpot spotId={spot.id} /> */}
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
