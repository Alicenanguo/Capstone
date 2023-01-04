import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../../context/Modal';
import UpdateProduct from './EditProduct';
import './EditProduct.css'

function UpdateProductModal({product,productId}) {
  const [showModal, setShowModal] = useState(false);

  const seesionUser = useSelector(state => state.session.user)
  if (!seesionUser)   return null


  return (
    <>
      <button className='listing_edit_button' onClick={() => setShowModal(true)}>Edit Product</button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateProduct setShowModal={setShowModal} product={product} productId={productId} />
        </Modal>
      )}
    </>
  );
}

export default UpdateProductModal;
