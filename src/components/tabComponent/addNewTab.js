import React, { useState } from 'react';

const AddNewTab = (props)=>{
    const [heading, setHeading] = useState("");
    const [content, setContent] = useState("");

    const closeModal=(e)=>{
        if(e.target.classList.contains('tc_cancelBtn')||e.target.classList.contains('tc_modal')||e.target.classList.contains('tc_closeIcon')) props.closeModal();
    }

    return(
        <div className={!props.modalActive? "tc_modal tc_addNewModal":  "tc_modal tc_addNewModal tc_modalActive"} onClick={(e)=>closeModal(e)}>
            <div className="tc_modalDialouge">
                <div className="tc_modalContent">
                    <div className="tc_container tc_flexColumn">
                        <div className="tc_modalHeader">
                            <h4>Add New Tab</h4>
                            <div className="tc_closeIcon"></div>
                        </div> 
                        <div className="tc_modalBody">
                          <div className="tc_inputWrap">
                              <label>Tab Heading</label>
                              <input type="text" value={heading} onChange={(e)=>setHeading(e.target.value)}/>
                          </div>
                          <div className="tc_inputWrap">
                              <label>Tab Content*</label>
                              <textarea cols="30" value={content} onChange={(e)=>setContent(e.target.value)} rows="4"></textarea>
                          </div>
                        </div>
                        <div className="tc_modalFooter">
                            <button className="tc_cancelBtn">Cancel</button>
                            {
                                content&&content.length?
                                <button className="tc_approveBtn" onClick={()=>props.confirm({heading: heading, content: content})}>Add</button>
                                :
                                <button className="tc_approveBtn tc_btnDisabled">Add</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewTab;