// todo:define types
const LOAD = 'images/LOAD';
const CREATE = 'images/CREATE';
const DELETE = 'images/DELETE';

// todo:define action creators
const actionLoad = (image) => ({
    type: LOAD,
    image,
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
  
