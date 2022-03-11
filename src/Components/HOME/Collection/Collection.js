import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Collection.css';

const Collection = (props) => {
    const { image, price, title, company } = props.product || {}

    return (
        <div>
            <div className="col">
                <div className="card h-100 text-center">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{company}</p>
                        <p className="card-text">{price}</p>
                    </div>
                    <Link to='/placeOrders'>
                        <Button className="link-button my-4" variant="dark">
                            Order Now
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Collection;