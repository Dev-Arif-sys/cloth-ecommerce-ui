import React from 'react';
import Footer from "../../Shared/Footer/Footer";
import Header from '../Header/Header';
import Offer from '../Offer/Offer';
import Services from '../Services/Services';

const HomeUi = () => {
    return (
        <div>
            <Header></Header>
            <hr className='container my-5' />
            <Offer></Offer>
            <hr className='container my-5' />
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default HomeUi;