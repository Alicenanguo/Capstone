import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";
import { getThunkAll, getThunkOne } from "../../store/category";
import StarRating from 'react-star-ratings'
import './Categories.css'


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
        <div className="category_contanier">
                <div className="category_name">
                <i class="fa-solid fa-champagne-glasses"></i>
                Enjoy Your {singleCategory?.name}
                {/* {console.log("singleCate_in_component",singleCategory)} */}
            </div>

            <div className="products_under_category">
                {allProducts?.map(el => (
                    <div  className="cate_all_products_container" key={el.id}>
                        <NavLink to={`/products/${el.id}`}>
                            <img
                                id='category_img'
                                className="cate_product_image"
                                src={el?.preview_image}
                                alt={el?.name}
                                onError={e => { e.currentTarget.src = "/default.jpeg"; }}
                            />
                        </NavLink>

                        <div className="getall_review_stars">
                <StarRating
                  numberofStars={5}
                  rating={el?.average_rating}
                  starRatingColor='rgb(57,57,57)'
                  starEmptyColor='rgb(227,227,227)'
                  starDimension='18px'
                  starSpacing='2px'

                  />
                  <span className="cate_review_num">
                      ({el?.review_nums})
                  </span>
                        </div>



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
