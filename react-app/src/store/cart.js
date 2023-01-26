// todo:define types
const LOAD = 'carts/LOAD';
const CREATE= 'carts/CREATE';
const UPDATE = 'carts/UPDATE';
const DELETE = 'carts/DELETE';
const RESET = 'carts/RESET';

// todo:define action creators
const actionLoad = (cart) => ({
    type: LOAD,
    cart,
  });

const actionCreate = (product) => ({
    type: CREATE,
    product,
  });

const actionUpdate = (product) => ({
    type: UPDATE,
    product,
  });

const actionRemove = (id) => ({
    type: DELETE,
    id,
});

const actionReset = () => ({
    type: RESET,
});

// todo:thunks section
export const getCartProductsThunk = () => async (dispatch) => {
    const response = await fetch('/api/carts');
    if (response.ok) {
        const list = await response.json();
        dispatch(actionLoad(list));
    }
};

export const createCartThunk = (product) => async (dispatch) => {
    try {
        // console.log('id_in_cart_create_thunk',productId)
        const response = await fetch('/api/carts', {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(product),
        })
        if (response.ok) {
            const cart = await response.json();
            console.log("response_in_cerate_cart_thunk",cart)
            dispatch(actionCreate(cart));
            return cart;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const updateCartThunk = (id, product) => async (dispatch) => {
    try {
        const response = await fetch(`/api/carts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        if (response.ok) {
            const cart = await response.json();
            dispatch(actionUpdate(cart));
            return cart
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const deleteCartThunk = (id) => async (dispatch) => {
    try {
        const response = await fetch(`/api/carts/${id}`, {
            method: 'DELETE',
        })
        if (response.ok) {
            dispatch(actionRemove(id));
            return response;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const resetCartThunk = () => async (dispatch) => {
    try {
        const response = await fetch('/api/carts', {
            method: 'DELETE',
        })
        if (response.ok) {
            dispatch(actionReset());
            return response;
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// todo: reduce stuff
const initialState = { Cart: {} };

const cartReducer = (state = initialState, action) => {
    let newState = {};

    switch (action.type) {
        case LOAD:
            let Cart = {};
            console.log("action_in_get_cart_reduce",action)
            action.cart.Carts.forEach(el => { Cart[el.id] = el });
            newState = { ...state };
            newState.Cart = Cart;
            // console.log("newState", newState)
            return newState;

        case CREATE:
            newState = {
                ...state,
                Cart: { ...state.Cart }
            };
            const newCreate = { ...action.product };
            newState.Cart[action.product.id] = newCreate;
            // console.log("add_product_to_cart ", newState)
            return newState;

        case UPDATE:
            newState = {
                ...state,
                Cart: { ...state.Cart }
            };
            const updateCart = { ...action.product };
            newState.Cart[action.product.id] = updateCart;
            // console.log("add_product_in_cart ", newState)
            return newState;

        case DELETE:
            newState = {
                ...state,
                Cart: { ...state.Cart }
            };
            delete newState.Cart[action.id]
            return newState;

        case RESET:
            newState = { Cart: {} };
            return newState;


        default:
            return state;

    }
}

export default cartReducer;
