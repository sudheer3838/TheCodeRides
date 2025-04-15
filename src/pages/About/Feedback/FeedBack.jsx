import React, { useState } from "react";
import ContactForm from '../../../components/ContactUs/Form/Form';

const FeedBackModal = () => {
  const [isFeedbackMode] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
    const modalElement = document.getElementById('FeedBackModal');
    const bootstrapModal = window.bootstrap?.Modal.getInstance(modalElement);
    bootstrapModal?.hide();
  };

  return (
    <div className="modal fade" id="FeedBackModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Your Opinion Matters – Share Your Feedback!</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleModalClose}
            ></button>
          </div>
          <div className="modal-body mt-3 mb-3">
            <ContactForm isFeedbackMode={isFeedbackMode} handleModalClose={handleModalClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBackModal;
