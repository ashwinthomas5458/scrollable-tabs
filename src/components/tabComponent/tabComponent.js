import React, { useEffect, useState } from 'react';
import AddNewTab from './addNewTab';
import ConfirmationModal from './confirmationModal';
import './tabComponent.css';

const tabModal = [{ content: "Tab 1 Content" }, {content: "Tab 2 Content" }, {content: "Tab 3 Content" }];

const TabComponent = (props) => {
  const [tabs, setTabs] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);
  const [actionIndex, setActionIndex] = useState(-1);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [confirmationModalAnime, setConfirmationModalAnime] = useState(false);
  const [newTabModal, setNewTabModal] = useState(false);
  const [newTabModalAnime, setNewTabModalAnime] = useState(false);

  useEffect(() => {
    let tabData = [];
    if (props.data) tabData = [...props.data];
    else tabData = [...tabModal];
    setTabs(tabData);
  }, [props.data]);

  const tabChange = (e,key) => {
    if(!e.target.classList.contains('tc_deleteIcon')){
      let tabIndex = currentTab;
      if (key === "PREV") tabIndex = tabIndex - 1;
      else if (key === "NEXT") tabIndex = tabIndex + 1;
      else tabIndex = key;
      setCurrentTab(tabIndex);
    }
  }

  const removeTab=(i)=>{
    let tabList = [...tabs];
    tabList.splice(i, 1);
    if(currentTab==i&&i!=0) setCurrentTab(i-1);
    else if(currentTab==i&&i==0) setCurrentTab(tabList.length-1);
    else if(currentTab==tabList.length) setCurrentTab(tabList.length-1);
    setTabs(tabList);
  }

  const addNewTab=(tab)=>{
    let tabList =[...tabs];
    if(tab){
      tabList.push(tab);
    }
    else{
      let tempTab = {content: `Tab ${tabList.length+1} Content` };
      tabList.push(tempTab);
    }
    setTabs(tabList);
  }

  const showModalConfirmationModal=(i)=>{
    setActionIndex(i);
    setConfirmationModal(true);
    setTimeout(() => {
      setConfirmationModalAnime(true);
    }, 300);
  }

  const closeConfirmationModal=()=>{
    setConfirmationModalAnime(false);
    setTimeout(() => {
      setConfirmationModal(false);
    }, 300);
  }

  const showModalNewTabModal=()=>{
    setNewTabModal(true);
    setTimeout(() => {
      setNewTabModalAnime(true);
    }, 300);
  }

  const closeNewTabModal=()=>{
    setNewTabModalAnime(false);
    setTimeout(() => {
      setNewTabModal(false);
    }, 300);
  }

  return (
    <>
    <div className="tc_mainWrapper">
      {
        tabs && tabs.length ?
          <div className="tc_tabContainer">
            <div className="tc_tabHeadWrapper">
                {
                  currentTab > 0 ?
                    <div className="tc_chevronLeft" onClick={(e) => tabChange(e,"PREV")}></div>
                    :
                    null
                }
                <div className="tc_headOverflowContainer">
                  <div className="tc_tabHeadContainer">
                  {
                    tabs.map((tab, i) => {
                      return (
                        <div className={currentTab == i ? "tc_tabHead tc_tabHeadSelected" : "tc_tabHead"} onClick={(e) => tabChange(e,i)}>
                          {tabs.length>1? <div className="tc_deleteIcon" onClick={()=>showModalConfirmationModal(i)}></div>: null}
                          <h4>{tab.heading ? tab.heading : `Tab ${i + 1}`}</h4>
                        </div>
                      )
                    })
                  }
                  </div>
                </div>
                {
                  currentTab < (tabs.length - 1) ?
                    <div className="tc_chevronRight" onClick={(e) => tabChange(e,"NEXT")}></div>
                    :
                    null
                }
                {
                  tabs.length<10?
                  <div className="tc_addTabIcon" onClick={()=>showModalNewTabModal()}></div>
                  :
                  null
                }
            </div>
            <div className="tc_tabContent">
              {
                tabs[currentTab] ?
                  <p>{tabs[currentTab].content}</p>
                  :
                  null
              }
            </div>
          </div>
          :
          <></>
      }
    </div>
    {
      confirmationModal?
      <ConfirmationModal 
      modalActive={confirmationModalAnime} 
      closeModal={()=>closeConfirmationModal()} 
      confirm={()=>{
        removeTab(actionIndex);
        closeConfirmationModal();
      }}/>
      :
      null
    }
    {
      newTabModal?
      <AddNewTab
      modalActive={newTabModalAnime} 
      closeModal={()=>closeNewTabModal()} 
      confirm={(tab)=>{
        addNewTab(tab);
        closeNewTabModal();
      }}
      />
      :
      null
    }
    </>
  );
}

export default TabComponent;
