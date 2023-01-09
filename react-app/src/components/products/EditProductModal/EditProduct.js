import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams, useHistory } from "react-router-dom";
import { getOneProductThunk, updateProductTHUNK, getAllProducts } from "../../../store/product";
import { getThunkAll } from "../../../store/category";
import "./EditProduct.css";

const UpdateProduct = ({ product, setShowModal }) => {
    console.log('product in updateproduct',product)
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector((state) => state.session.user);
  const allCategory = useSelector((state) => state.categories.categories);
  console.log(allCategory)
    const allArr = Object.values(allCategory);

    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [preview_image, setPreviewImage] = useState(product.preview_image);
  const [category_id, setCategoryId] = useState(product.category_id);
  console.log('category_id==============',category_id)

    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        dispatch(getThunkAll());
    }, [dispatch]);

    useEffect(() => {
        const errors = {};
        if (!name) errors.noName="Please enter a valid name";
        if (name.length > 255)
          errors.longName="Name could not greater than 255 characters";
        if (!description) errors.noDescription="Please enter a valid description";
        if (description.length > 2000)
          errors.longDescription="Description could not greater than 2000 characters";
        if (!price || price <= 0)
          errors.minusPrice="Please enter a price greater than 0";
        if (isNaN(price)) errors.noNumber="Price must be a number";
      if (!preview_image) errors.noImage = "need a image for the product";
      if ((!preview_image.startsWith('http://')) && (!preview_image.startsWith('https://')))
        errors.brokenImage_start = "Url must start with 'http://' or 'https://'";
        const endArr = ['pdf', 'png', 'jpg', 'jpeg', 'gif']
        let count = 0;
        endArr.map(el => {
          if (preview_image.includes(el)) count++
        }
        )
        if (count === 0) errors.brokenImage_end = "Url must end with 'pdf' or 'png' or 'jpg' or 'jpeg' or 'gif'";


        setValidationErrors(errors);
    }, [name, description, price, preview_image]);

    const onSubmit = async (e) => {
        e.preventDefault();

        setHasSubmitted(true);

        const productInfo = {
          name,
          description,
          price,
          preview_image,
          category_id,
        };

        const result = await dispatch(updateProductTHUNK(productInfo,product.id));
        console.log("result in update_product", result);

        const arr= Object.values(validationErrors)

    if (result && arr.length === 0) {
      history.push(`/products/${result.id}`);
    }
    };

    const cancelSubmit = (e) => {
        e.preventDefault();
        setShowModal(false);
        history.push("/shop-manager");
    };

    const handleChange = (event) => {
        const selectedIndex = event.target.selectedIndex;
        console.log(`Selected index in update: ${selectedIndex}`);
        setCategoryId(selectedIndex)
      };

    return (
        <>
        <form
          id="create_container_edit"
          className="updateProduct_form"
          onSubmit={onSubmit}
        >
          <div id="create_your_product_edit" >
            <div className="update_your_product">Edit Your Product</div>
          </div>

          <div className="update_selling_list_container">
            <div className="update_selling_list">
              <label>
                <div className="update_selling_title">Name</div>
                <textarea
                  rows={3}
                  id="name"
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
                {hasSubmitted && validationErrors.noName && (
                  <div className='errors_info'>*{validationErrors.noName}</div>
                )}
                {hasSubmitted && validationErrors.longName && (
                  <div className='errors_info'>*{validationErrors.longName}</div>
                )}
              </label>
            </div>

            <div className="update_selling_list">
              <label>
                <div className="update_selling_title">Price</div>
                <textarea
                  id="price"
                  type="number"
                  name="price"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  required
                />
                {hasSubmitted && validationErrors.minusPrice && (
                  <div className='errors_info'>*{validationErrors.minusPrice}</div>
                )}
                {hasSubmitted && validationErrors.noNumber && (
                  <div className='errors_info'>*{validationErrors.noNumber}</div>
                )}
              </label>
            </div>

            <div className="update_selling_list">
              <label>
                <div className="update_selling_title">Description</div>
                <textarea
                  id="description"
                  type="text"
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  required
                />
                {hasSubmitted && validationErrors.noDescription && (
                  <div className='errors_info'>*{validationErrors.noDescription}</div>
                )}
                {hasSubmitted && validationErrors.longDescription && (
                  <div className='errors_info'>*{validationErrors.longDescription}</div>
                )}

              </label>
            </div>

            <div className="update_selling_list">
              <label>
                <div className="update_selling_title">Image Url</div>
                <textarea
                  id="previewImage"
                  type="text"
                  name="previewImage"
                  onChange={(e) => setPreviewImage(e.target.value)}
                  value={preview_image}
                  required
                />
                {hasSubmitted && validationErrors.noImage && (
                  <div className='errors_info'>*{validationErrors.noImage}</div>
                )}
                {hasSubmitted && validationErrors.brokenImage_start && (
                  <div className='errors_info'>*{validationErrors.brokenImage_start}</div>
                )}
                {hasSubmitted && validationErrors.brokenImage_end && (
                <div className='errors_info'>*{validationErrors.brokenImage_end}</div>
              )}
              </label>
            </div>

            <div className="update_selling_list">
              <label className="update_selling_title">Category</label>

              <select className="cate_select_name" value={allCategory[category_id]?.name} onChange={handleChange} required>
                <option value="" disabled>
                  Select a category
                </option>
                {allArr.map((el) => (
                  <option className="cate_select_name" key={el?.id} value={el?.name}>
                    {el?.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="update_product_submit">
              <button type="update_submit" className="update_product_button">
                Edit Product
              </button>
              <button className="update_ancel_product_button" onClick={cancelSubmit}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </>

    )
}
export default UpdateProduct;
