import React from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import './CheckoutLayout.css';

const CheckoutLayout = () => {
    return (
        <div>
            <div className='container d-md-flex mt-3'>
                <div className='checkout-left'>
                <CheckoutForm></CheckoutForm>
                </div>

                <div className='checkout-right'>
                <h3>This is checkout right</h3>
                </div>

            </div>
        </div>
    );
};

export default CheckoutLayout;