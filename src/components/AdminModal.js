import './AdminModal.css'
import React from 'react'

function Modal({ setOpenModal },) {
    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>Are You Sure You Want to Continue?</h1>
          </div>

        </div>
      </div>
    );
  }
  
  export default Modal;