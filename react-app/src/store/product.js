// todo:define types
const LOAD = "products/LOAD";
const LOAD_ONE = "products/LOAD_ONE";
const LOAD_CURRENT = "products/LOAD_CURRENT";
const CREATE = "products/CREATE";
//const ADDIMG ='products/ADD_IMG'
const UPDATE = "products/UPDATE";
const DELETE = "products/DELETE";

const LOAD_HOME ="product/LOAD_HOME"

// todo:define action creators

const actionLoad = (all) => ({
  type: LOAD,
  all,
});

const actionLoadSingle = (one) => ({
  type: LOAD_ONE,
  one,
});

const actionCurrentProduct = (userProduct) => ({
  type: LOAD_CURRENT,
  userProduct,
});

const actioCreate = (newProduct) => ({
  type: CREATE,
  newProduct,
});

const actionUpdate = (updateProduct) => ({
  type: UPDATE,
  updateProduct,
});

const actionRemove = (productId) => ({
  type: DELETE,
  productId,
});

// const actionLoadHome = (product) => ({
//   type: LOAD_HOME,
//   product,
// });

// todo:thunks section
export const getAllProducts = () => async (dispatch) => {
  const res = await fetch("/api/products");

  if (res.ok) {
    const list = await res.json();
    dispatch(actionLoad(list));
  }
};

export const getHomeProducts = () => async (dispatch) => {
  const res = await fetch("/api/products/home");

  if (res.ok) {
    const homePage = await res.json();
    console.log("home_product_in_thunk", homePage);
    dispatch(actionLoad(homePage));
  }
};

export const getOneProductThunk = (productId) => async (dispatch) => {
  const res = await fetch(`/api/products/${productId}`);

  if (res.ok) {
    const product = await res.json();
    dispatch(actionLoadSingle(product));
  }
};

export const getCurrentProduct = () => async (dispatch) => {
  const res = await fetch("/api/products/current")

  if (res.ok) {
    const currentProduct = await res.json();
    dispatch(actionCurrentProduct(currentProduct))
  }
}

export const createProductTHUNK = (product) => async (dispatch) => {
  const res = await fetch(`/api/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  console.log("res in create_thunk", res);
  if (res.ok) {
    const newProduct = await res.json();
    dispatch(actioCreate(newProduct));
    return newProduct;
  }
};

export const updateProductTHUNK = (product,productId) => async dispatch => {
  console.log("product_in_update_thunk".product)
  const res = await fetch(`/api/products/${productId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  })
  if (res.ok) {
    const update = await res.json();
    console.log('update_in_thunk',update)
    dispatch(actionUpdate(update));
    return update;
  }
}

export const deleteProductTHUNK = (productId) => async dispatch => {

  const res = await fetch(`/api/products/${productId}`, {
    method: 'DELETE',
  })
  if (res.ok) {
    dispatch(actionRemove(productId))
    return res
  }

}


// todo: reduce stuff
const initialState = { allProducts: {}, singleProduct: {} };

const productReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case LOAD:
      let allProducts = {};
      console.log('action_all_')
      action.all.products.forEach(
        (product) => (allProducts[product.id] = product)
      );
      newState.allProducts = allProducts;
      console.log("newState_getall:", newState);
      return newState;

    case LOAD_ONE:
      newState = { ...state };
      const singleProduct = action.one;
      newState.singleProduct = singleProduct;
      console.log("get_one_product_reduce", newState);
      return newState;

    case LOAD_CURRENT:
      newState = {...state}
      let current = {};

      action.userProduct.products.forEach((product) => (current[product.id] = product));
      newState.allProducts = current
        return newState;

    case CREATE:
      let newCreate = {
        ...state,
        singleProduct: {
          ...state.singleProduct,
          [action.newProduct.id]: action.newProduct,
        },
      };
      console.log("newState_create:", newCreate);
      return newCreate;

    case UPDATE:
      let updateState = {
        ...state,
        singleProduct:{ ...state.singleProduct, ...action.updateProduct}
      }
      console.log('newState_update:', updateState)
      return updateState;

    case DELETE:
       const deleted = {
          ...state,
          allProducts: { ...state.allProducts },
          singleProduct:{}
        }
        delete deleted.allProducts[action.ProductId]
        return deleted;




    default:
      return state;
  }
};

export default productReducer;
