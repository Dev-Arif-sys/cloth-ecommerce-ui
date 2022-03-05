import React from 'react';

const Cart = () => {
    return (
        <div className='container'>
            <h1 className='text-center mb-5'>Cart</h1>
            <div className='mb-5'>
                <form>
                    <table class="table" cellSpacing={0}>
                        <thead>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody class='px-2'>
                            <tr>
                                <td scope="row"><a className='text-decoration-none text-dark fs-2' href="#">×</a></td>
                                <td className='p-2' style={{ width: '100px' }}>
                                    <img className='img-fluid p-1 border' src="https://transvelo.github.io/electro-html/2.0/assets/img/300X300/img6.jpg" alt="" />
                                </td>
                                <td>    Ultra Wireless S50 Headphones S50 with Bluetooth</td>
                                <td>$ 123</td>
                                <td>

                                </td>
                                <td>$ 345645646</td>
                            </tr>
                            <tr>
                                <td scope="row"><a className='text-decoration-none text-dark fs-2' href="#">×</a></td>
                                <td className='p-2' style={{ width: '100px' }}>
                                    <img className='img-fluid p-1 border' src="https://transvelo.github.io/electro-html/2.0/assets/img/300X300/img6.jpg" alt="" />
                                </td>
                                <td>product name</td>
                                <td>$ 123445</td>
                                <td>

                                </td>
                                <td>$ 345645646</td>
                            </tr>

                        </tbody>

                    </table>
                    <button style={{ backgroundColor: '#fdbf70' }} class="btn" type="button">Proceed to Checkout</button>

                </form>

            </div>
        </div >
    );
};

export default Cart;