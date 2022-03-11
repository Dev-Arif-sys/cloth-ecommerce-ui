import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import img1 from '../../../images/img6.png';
import img2 from '../../../images/img7.jpg';
import img3 from '../../../images/img8.jpg';
import img4 from '../../../images/img9.png';
import './TrendingProducts.css';

const TrendingProducts = () => {
    return (
        <div>
            <div className="text-center container">
                <h1 className='my-5'>Trending Products</h1>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <img src={img1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">E Sport Jersey</h5>
                                <p className="card-text">10 pieces left</p>
                                <p className="card-text">price 50$</p>
                                <Link to='/placeOrders'>
                                    <Button className="link-button my-4" variant="dark">
                                        Order Now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={img2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Black Mamba Hoodie</h5>
                                <p className="card-text">8 pieces left</p>
                                <p className="card-text">price 80$</p>
                                <Link to='/placeOrders'>
                                    <Button className="link-button my-4" variant="dark">
                                        Order Now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={img3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Jins Jacket</h5>
                                <p className="card-text">5 pieces left</p>
                                <p className="card-text">price 90$</p>
                                <Link to='/placeOrders'>
                                    <Button className="link-button my-4" variant="dark">
                                        Order Now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={img4} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Modern Jins</h5>
                                <p className="card-text">7 pieces left</p>
                                <p className="card-text">price 60$</p>
                                <Link to='/placeOrders'>
                                    <Button className="link-button my-4" variant="dark">
                                        Order Now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingProducts;