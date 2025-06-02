import React from 'react'

function Overlay({ onConfirm, onCancel, showOverlay }) {
  return (
    <div className={`custom-modal-overlay ${showOverlay ? 'visible' : ''}`}>
      <div className="custom-modal-content">
        <p>Are you REALLY sure you want to wipe the slate clean?</p>
        <div className="custom-modal-buttons">
          <button onClick={onConfirm}>Zap it!</button>
          <button onClick={onCancel}>Oops, No!</button>
        </div>
      </div>
    </div>
  )
}

export default Overlay
