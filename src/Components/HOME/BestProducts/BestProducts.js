import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../../Redux/Actions/ProductAction';

const BestProducts = () => {
    
    const productData=useSelector(state=> state.product)
    const dispatch=useDispatch()
   console.log(productData)
    useEffect(() => {
        dispatch(getProduct())
    }, [])

    return (
        <div>
            <div className="m-5">
                <div className="text-center">
                    <h1>Our Best Products</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 my-2">
                    {/* {
                        .map(item => <Collection
                            key={item._id}
                            item={item}
                        ></Collection>)
                    } */}
                </div>
            </div>
        </div>
    );
};

export default BestProducts;