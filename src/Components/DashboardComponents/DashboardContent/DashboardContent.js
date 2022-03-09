import React from 'react';
import SalesAnalysis from '../SalesAnalysis/SalesAnalysis';
import SalesChart from '../SalesAnalysis/SalesChart/SalesChart';
import './DashboardContent.css';

const DashboardContent = ({setBar}) => {
   
    return (
        <div >
            <div className='dashboard-header px-md-5 px-2 sticky-top'>
                <div> <h4 className='text-center '> <i onClick={()=> setBar(true)} class="bi bi-list"></i> BrandName</h4></div>
                <div>
                <input type='text' placeholder='search here'/>
                </div>
            
            </div>
            <div className='dashboard-content ' onClick={()=>setBar(false)}>
                <div className='mx-3'>
                <h4 className='text-center fw-bold py-2'>Your Dashboard</h4>
               <SalesAnalysis></SalesAnalysis>
               <SalesChart></SalesChart>
                </div>
              
            </div>
            
        </div>
    );
};

export default DashboardContent;