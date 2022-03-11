import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../../Redux/Actions/ProductAction';
import Collection from '../Collection/Collection';
import Loading from '../Loading/Loading';

const BestProducts = () => {

    const productData = useSelector(state => state.product)
    const dispatch = useDispatch()
    console.log(productData)
    useEffect(() => {
        dispatch(getProduct())
    }, [])

    const { products, loading, error } = productData
    const productscut = products.slice(0, 6)
    const [displayProduct, setDisplayProduct] = useState([])
    useEffect(() => {
        setDisplayProduct(productscut)
    }, [products])

    const [category, setCategory] = useState('')
    const handleProductNav = (category) => {
        setCategory(category)
        if (category == 'featured') {
            setDisplayProduct(products.slice(0, 8))
        } else if (category == 'onsale') {
            setDisplayProduct(products.filter(product => product.starCount < 2000 && product.starCount > 1500))
        } else if (category == 'toprated') {
            setDisplayProduct(products.filter(product => product.starCount > 2500))
        }
    }

    return (
        <div>
            <div className="m-5">
                <div className="text-center">
                    <h1>Our Best Products</h1>
                </div>
                <div>
                    {
                        loading ? < Loading></Loading> : error ? <h6 className='text-center'>{error}</h6> : <div className='products-container mt-2 row row-cols-1 row-cols-md-3 g-4 my-2'>
                            {
                                displayProduct?.map(product => <Collection key={product.key} product={product}></Collection>)
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default BestProducts;