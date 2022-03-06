import React from 'react';
import Footer from "../../Shared/Footer/Footer";
import BestProducts from '../BestProducts/BestProducts';
import Header from '../Header/Header';
import Offer from '../Offer/Offer';
import Ratings from '../Ratings/Ratings';
import Services from '../Services/Services';

const HomeUi = () => {
    return (
        <div>
            <Header></Header>
            <hr className='container my-5' />
            <BestProducts></BestProducts>
            <Offer></Offer>
            <hr className='container my-5' />
            <Ratings></Ratings>
            <hr className='container my-5' />
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default HomeUi;