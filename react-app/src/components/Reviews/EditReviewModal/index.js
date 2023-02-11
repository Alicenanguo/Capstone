import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../../context/Modal';
import EditReview from './EditReview';
import './EditReview.css'


function EditReviewModal({productId}) {
    const [showModal, setShowModal] = useState(false);


  const sessionUser = useSelector(state => state.session.user)
  if (!sessionUser)   return null


  return (
    <>
      <div className='add_review'>
        <button className='add_review_button' onClick={() => setShowModal(true)}>Edit Review</button>
        </div>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
                  {sessionUser && <EditReview productId={productId} setShowModal={setShowModal} />}
        </Modal>
      )}
    </>
  );
}

export default EditReviewModal;
