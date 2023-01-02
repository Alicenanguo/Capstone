import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";

import { getOneProductThunk } from "../../../store/product";

import "./OneProduct.css";

const GetOneProduct = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const { productId } = useParams();

  const single = useSelector((state) => state.products.singleProduct);

  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getOneProductThunk(productId)).then(() => setIsLoaded(true));
  }, [dispatch, productId]);

  if (!single) return null;

  return (
    <div className="getOneProduct_container">
      {isLoaded && (
        <div className="single_spots">
          {single.id && (
            <>
                          <div className="single_name">{single?.name}</div>

                          <div>${single?.price}</div>

                          <div>{single?.description}</div>

              <div className="product_img">

                  {single.product_image?.map((el) => (
                      <img
                      key={el.id}
                      className="single_img"
                      src={el.url}
                      alt={single.name}
                      />
                      ))}
                </div>


            </>
          )}
        </div>
      )}
    </div>
  );
};
export default GetOneProduct;
