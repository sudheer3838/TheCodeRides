import React from "react";
import ContactForm from '../../../components/ContactUs/Form/Form'

const HireMeModal = () => {
  return (
    <div className="modal fade" id="hireMeModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Ready to Work Together?</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body mt-3 mb-3">
            <ContactForm />
          </div>          
        </div>
      </div>
    </div>
  );
};

export default HireMeModal;
