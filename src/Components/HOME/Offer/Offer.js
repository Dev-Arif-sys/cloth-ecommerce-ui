import React from 'react';
import img1 from '../../../images/img4.png';
import img2 from '../../../images/img5.png';
import './Offer.css';


const Offer = () => {
    return (
        <div className=""><h1 className='text-center text'>Our Offers</h1>
            <div className='offer-product-container m-5'>
                <div className='offer-product '>
                    <img src={img1} />
                    <div className='offer-product-text'>
                        <p>Best Product</p>
                        <h6 className='product-heading'>20% off</h6>
                        <button className='product-btn'>Buy Now</button>
                    </div>
                </div>

                <div className='offer-product'>
                    <img src={img2} />
                    <div className='offer-product-text'>
                        <p>Best Offer</p>
                        <h6 className='product-heading'>50% off</h6>
                        <button className='product-btn'>Buy Now</button>
                    </div>
                </div>
            </div></div>
    );
};

export default Offer;