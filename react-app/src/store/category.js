// todo:define types
const LOAD = "categories/LOAD";
const LOAD_ONE = "categories/LOAD_ONE";


// todo:define action creators
const actionLoad = (all) => ({
    type: LOAD,
    all,
  });

  const actionLoadSingle = (one) => ({
    type: LOAD_ONE,
    one,
  });

 // todo:thunks section
export const getThunkAll = () => async (dispatch) => {
    const res = await fetch('/api/categories');

    if (res.ok) {
        const list = await res.json();
        console.log('thunk_getAll',list)
        dispatch(actionLoad(list))
    }
 }

export const getThunkOne = (id) => async (dispatch) => {
    console.log('work')
    const res = await fetch(`/api/categories/${id}`);
    console.log('work2')

    if (res.ok) {
        const single = await res.json();
        console.log('thunk_one_category',single)
        dispatch(actionLoadSingle(single))
    }
}

 // todo: reduce stuff
const initialState = { categories: {}, category:{} };
const categoryReducer = (state = initialState, action) => {
     let newState = {};
     switch (action.type) {
         case LOAD:
             let categories = {}
             action.all.categories.forEach((category => categories[category.id] = category))
             newState.categories = categories
             console.log('newState_categories:', newState)
             return newState;
         case LOAD_ONE:
            newState = {...state};
             newState.category = action.one
             console.log('newState_one_categories',newState)
            return newState;



        default:
            return state;


    }
 }


 export default categoryReducer;
