import React from 'react';
import SalesAnalysis from '../SalesAnalysis/SalesAnalysis';
import SalesChart from '../SalesAnalysis/SalesChart/SalesChart';
import './DashboardContent.css';

const DashboardContent = ({setBar}) => {
   
    return (
        <div >
            <div className='dashboard-header px-md-5 px-2'>
                <div> <h4 className='text-center '> <i onClick={()=> setBar(true)} class="bi bi-list"></i> BrandName</h4></div>
                <div>
                <input type='text' placeholder='search here'/>
                </div>
            
            </div>
            <div className='dashboard-content' onClick={()=>setBar(false)}>
                <h2>gello</h2>
               <SalesAnalysis></SalesAnalysis>
               <SalesChart></SalesChart>
            </div>
            
        </div>
    );
};

export default DashboardContent;