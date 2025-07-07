import React from 'react'

function Modal({ onClose }) {
  return (
    <div className='backdrop' style={{
      position: 'fixed',
      top:0,
      left:0,
      right:0,
      bottom:0,
      backgroundColor:'rgba(0,0,0,0.5)',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      zIndex: 9999,
    }}>
      <div className="modal" tabIndex="-1" style={{display:'block', background:'white', borderRadius:'8px', maxWidth:'500px', width:'100%'}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
