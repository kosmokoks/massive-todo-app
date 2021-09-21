import React from 'react';


const CustomModal = ({isModalOpen, closeModal, message, extraInfo}) => {
    if (!isModalOpen) {
        return null;
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <h2 className="modal-message">{message}</h2>
                <div className="modal-info">{extraInfo}</div>
                <button className="button" onClick={closeModal}>OK</button>
            </div>
        </div>
    )
};

export default CustomModal;
