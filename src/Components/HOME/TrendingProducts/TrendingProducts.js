import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import picture from '../../../images/hdm141-removebg-preview.png';
import './TrendingProducts.css';

const TrendingProducts = () => {
    return (
        <div>
            <div className="text-center container">
                <h1 className='my-5'>Trending Products</h1>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card">
                            <img src={picture} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <Link to='/placeOrders'>
                                    <Button className="link-button my-4" variant="dark">
                                        Order Now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={picture} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <Link to='/placeOrders'>
                                    <Button className="link-button my-4" variant="dark">
                                        Order Now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={picture} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                <Link to='/placeOrders'>
                                    <Button className="link-button my-4" variant="dark">
                                        Order Now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={picture} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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