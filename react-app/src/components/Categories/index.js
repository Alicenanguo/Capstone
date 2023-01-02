import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";
import { getThunkAll, getThunkOne } from "../../store/category";


const GetCategories = () => {
    const dispatch = useDispatch();
    const { id } = useParams()
    console.log("id+++++++",id)
    const [isLoaded, setIsLoaded] = useState(false);

    const allCategory = useSelector(state => state.categories.categories)
    console.log("allcategory",allCategory)
    const singleCategory = useSelector(state => state.categories.category)
    console.log("singleCate____",singleCategory)

    const allProducts = useSelector(state => state.categories.categories[id]?.products)

    useEffect(() => {
        dispatch(getThunkAll())
        .then(() =>dispatch(getThunkOne(id)))
        .then(() => setIsLoaded(true));
    }, [dispatch, id])




    return (
        isLoaded && (
        <div>
            <div className="category_name">
                {singleCategory?.name}
                {/* {console.log("singleCate_in_component",singleCategory)} */}
            </div>

            <div className="products_under_category">
                {allProducts?.map(el => (
                    <div className="cate_all_products_container" key={el.id}>
                        <NavLink to={`/products/${el.id}`}>
                            <img className="cate_product_image" src={el?.preview_image} alt={el?.name}>
                            </img>
                        </NavLink>
                        <div className="cate_product_price">
                            ${el?.price}
                        </div>
                    </div>

                ))}

            </div>
        </div>


        ))
}

export default GetCategories;
