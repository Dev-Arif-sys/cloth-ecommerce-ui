import React, { useState } from 'react';
import DashboardContent from '../DashboardContent/DashboardContent';
import DashboardNavlink from '../DashboardNavlink/DashboardNavlink';
import './DashboardLayout.css';

const DashboardLayout = () => {
    const [showSideBar,setShowBar]=useState(false);
    console.log(showSideBar)
    const linkClass=['dashboard-left']
    if(showSideBar){
        linkClass.push('activeBar')
    }
    return (
        <div  id='dashboard-left'>
            <div className={linkClass.join(" ")} >
           <DashboardNavlink></DashboardNavlink>
            </div>
            <div className='dashboard-right'>
              <DashboardContent   setBar={setShowBar}></DashboardContent>
            </div>
        </div>
    );
};

export default DashboardLayout;