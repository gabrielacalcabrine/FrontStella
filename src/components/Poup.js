import React from 'react';
function Popup({ message, onClose }) {
    return (
      <div className="popup">
        <div className="popup-content">
          <p>{message}</p>
          <button onClick={onClose}>Fechar</button>
        </div>
      </div>
    );
  }
  export default Popup;