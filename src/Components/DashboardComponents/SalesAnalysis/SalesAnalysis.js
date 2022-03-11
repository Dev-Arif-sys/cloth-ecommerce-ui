import React from 'react';
import './SalesAnalysis.css';

const SalesAnalysis = () => {
    return (
        <div className='sales-analysis'>

            <div className='upper-banner'>
                <div className='total-products'>
                    <p><i className="bi bi-bag"></i></p>
                    <h6>Total Product</h6>
                    <h5>70</h5>

                    <p className='mt-4'><small>Increased by 30%</small></p>
                </div>
                <div className='total-sales'>
                    <p><i className="bi bi-bag"></i></p>
                    <h6>Total Product</h6>
                    <h5>70</h5>

                    <p className='mt-4'><small>Increased by 30%</small></p>
                </div>
                <div className='total-profit'>
                    <p><i className="bi bi-bag"></i></p>
                    <h6>Total Product</h6>
                    <h5>70</h5>

                    <p className='mt-4'><small>Increased by 30%</small></p>
                </div>
            </div>
        </div>
    );
};

export default SalesAnalysis;