// todo:define types
const LOAD = 'images/LOAD';
const CREATE = 'images/CREATE';
const DELETE = 'images/DELETE';

// todo:define action creators
const actionLoad = (id,images) => ({
    type: LOAD,
    id,
    images,
});

const actioCreate = (image) => ({
    type: CREATE,
    image,
});

const actionRemove = (imageId) => ({
    type: DELETE,
    imageId,
  });

  // todo:thunks section
export const getImageTHUNK = (id) => async (dispatch) => {
    const res = await fetch(`/api/products/${id}/images`)

    if (res.ok) {
        const images = await res.json();
        dispatch(actionLoad(id,images))
    }
  }
