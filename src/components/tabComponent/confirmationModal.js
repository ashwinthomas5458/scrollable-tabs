import React from 'react';

const ConfirmationModal = (props)=>{

    const closeModal=(e)=>{
        if(e.target.classList.contains('tc_cancelBtn')||e.target.classList.contains('tc_modal')||e.target.classList.contains('tc_closeIcon')) props.closeModal();
    }

    return(
        <div className={!props.modalActive? "tc_modal tc_confirmModal":  "tc_modal tc_confirmModal tc_modalActive"} onClick={(e)=>closeModal(e)}>
            <div className="tc_modalDialouge">
                <div className="tc_modalContent">
                    <div className="tc_container tc_flexColumn">
                        <div className="tc_modalHeader">
                            <h4>Delete Confirmation</h4>
                            <div className="tc_closeIcon"></div>
                        </div> 
                        <div className="tc_modalBody">
                           <p>Confirm action. Are you sure you want to delete this tab?</p> 
                        </div>
                        <div className="tc_modalFooter">
                            <button className="tc_cancelBtn">Cancel</button>
                            <button className="tc_approveBtn" onClick={()=>props.confirm()}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationModal;