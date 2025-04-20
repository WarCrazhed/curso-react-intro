import React from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';

function Modal({ children, onClose }) {
    return ReactDOM.createPortal(
        <div className="modal-backdrop">
            <div className="modal">
                <button className="modal-close" onClick={onClose}>
                    <FaTimes />
                </button>
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal }