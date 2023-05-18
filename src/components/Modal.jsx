import React from "react"


const Modal = ({ modalOpen, setModalOpen, children }) => {

    return (
        <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
            <div className="modal-box relative">
                <label onClick={() => setModalOpen(false)} htmlFor="my-modal-3" className="btn btn-sm btn-circle text-lg absolute right-2 top-2 bg-white border-white">X</label>
                {children}
            </div>
        </div>
    )
}

export default Modal