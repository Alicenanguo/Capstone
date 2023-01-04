import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { getCurrentProduct } from "../../../store/product";

import {deleteProductTHUNK} from '../../../store/product'

const DeleteProduct = ({ productId }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isLoaded, setIsLoaded] = useState(false);



  

    const onSubmit = async (e) => {
        e.preventDefault();
        if (window.confirm("Do you want to delete this Product?")) {
            const result = await dispatch(deleteProductTHUNK(productId))
            if (result) {
                dispatch(getCurrentProduct())
                history.push('/shop-manager')
                console.log('result_delete', result)
            }
        }
    }
    return (


            <button className="Product_delete_button" onClick={onSubmit}>

                Delete Product

            </button>

    )
}
export default DeleteProduct;
