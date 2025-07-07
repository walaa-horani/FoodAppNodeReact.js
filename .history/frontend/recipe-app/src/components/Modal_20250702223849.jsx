import React from 'react'
import "../App.css"
function Modal({onClose }) {
  return (
    <div className='backdrop'  style={{
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
    <div className="modal" tabindex="-1" style={{display:'block', background:'white', borderRadius:'8px', maxWidth:'500px', width:'100%'}}>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button onClick={onClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button  onClick={onClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Modal