// todo:define types
const LOAD = "products/LOAD";
const LOAD_ONE = "products/LOAD_ONE";
const LOAD_CURRENT = "products/LOAD_CURRENT";
const CREATE = "products/CREATE";
//const ADDIMG ='products/ADD_IMG'
const UPDATE = "products/UPDATE";
const DELETE = "products/DELETE";


// todo:define action creators

const actionLoad = (all) => ({
    type: LOAD,
    all,
  });

  const actionLoadSingle = (one) => ({
    type: LOAD_ONE,
    one,
  });

  const actionCurrentSpot = (userProduct) => ({
    type: LOAD_CURRENT,
    userProduct,
  });

  const actioCreate = (newProduct) => ({
    type: CREATE,
    newProduct,
  });



  const actionUpdate = (updateProduct) => ({
    type: UPDATE,
    updateProduct
  });

  const actionRemove = (productId) => ({
    type: DELETE,
    productId,
  });


  // todo:thunks section
export const getAllProducts = () => async (dispatch) => {
    const res = await fetch('api/products');

    if (res.ok) {
        const list = await res.json();
        dispatch(actionLoad(list))
    }

}

export const getHomeProducts = () => async (dispatch) => {
  const res = await fetch('api/products/home');

  if (res.ok) {
    const homePage = await res.json();
    console.log('home_product_in_thunk',homePage)
    dispatch(actionLoad(homePage))
  }
}

export const getOneProductThunk = (productId) => async (dispatch) => {
  const res = await fetch(`/api/products/${productId}`);

  if (res.ok) {
      const product = await res.json();
      dispatch(actionLoadSingle(product));

  }
}


  // todo: reduce stuff
const initialState = { allProducts: {}, singleProduct: {} };

const productReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case LOAD:
       let allProducts = {};
       action.all.products.forEach((product) => (allProducts[product.id] = product));
       newState.allProducts = allProducts;
         console.log('newState_getall:', newState)
      return newState;

    case LOAD_ONE:
      newState = { ...state };
      const singleProduct = action.one;
      newState.singleProduct = singleProduct;
      console.log('get_one_product_reduce', newState)
      return newState;




    default:
       return state;
  }
};

export default productReducer;
