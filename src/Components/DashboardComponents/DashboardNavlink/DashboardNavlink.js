import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardNavlink.css';

const DashboardNavlink = () => {
    return (
        <div >

      
        <div className='dashboard-link '>
            <Link className='dashboard-menulink' to='/dashboard/'>Dashboard</Link>
            <Link className='dashboard-menulink' to='/dashboard/'>Dashboard</Link>
            <Link className='dashboard-menulink' to='/dashboard/'>Dashboard</Link>
            <Link className='dashboard-menulink' to='/dashboard/'>Dashboard</Link>
            <Link className='dashboard-menulink' to='/dashboard/'>Dashboard</Link>
            <Link className='dashboard-menulink' to='/dashboard/'>Dashboard</Link>
            <Link className='dashboard-menulink' to='/dashboard/'>Dashboard</Link>
        </div>
        </div>
    );
};

export default DashboardNavlink;