import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";

import { getAllProducts } from "../../../store/product";
import { getThunkOne } from "../../../store/category";
import "./getProducts.css";

const GetProducts = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  let product = useSelector((state) => state.products.allProducts);
  // console.log('product++++++', product)

  let user = useSelector((state) => state.session.user);
  console.log("cur_user", user);

  // useEffect(() => {
  //   dispatch(getAllProducts()).then(() => setIsLoaded(true));
  // }, [dispatch]);

  let productArr;
  if (isLoaded) {
    productArr = Object.values(product);
  }
  console.log("productArr", productArr);



  return (
    isLoaded && (
    <div>
         {product && productArr.map(product => (
                       <div className='product_item' key={product?.id}>
                       <NavLink to={`/products/${product.id}`}>
                           <img className='product_img_all' src={product?.preview_image} alt={product.name} />
                            </NavLink>
                            </div>
                        ))
        }
        </div>


    )
  );
};

export default GetProducts;