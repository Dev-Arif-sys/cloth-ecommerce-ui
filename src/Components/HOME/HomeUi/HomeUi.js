import React from 'react';
import Footer from '../../SHARED/Footer/Footer.js';
import BestProducts from '../BestProducts/BestProducts';
import Header from '../Header/Header';
import Offer from '../Offer/Offer';
import Services from '../Services/Services';
import TrendingProducts from '../TrendingProducts/TrendingProducts';


const HomeUi = () => {
    return (
        <div>
            <Header></Header>
            <hr className='container my-5' />
            <BestProducts></BestProducts>
            <Offer></Offer>
            <hr className='container my-5' />
            <TrendingProducts></TrendingProducts>
            <hr className='container my-5' />
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default HomeUi;