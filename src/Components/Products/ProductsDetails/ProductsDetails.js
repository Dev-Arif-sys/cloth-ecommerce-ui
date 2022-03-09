import React from 'react';

const ProductsDetails = () => {
    return (
        <div class="container">
            <div className='my-5'>
                <div className='row d-flex'>
                    <div className='col-md-12 col-lg-4 col-sm-12 py-3'>
                        <div className='mb-2'>
                            <img className='img-fluid' src="https://transvelo.github.io/electro-html/2.0/assets/img/300X300/img6.jpg" alt="" />
                        </div>
                        <div className='d-flex'>
                            <div className='border' style={{ cursor: "pointer", width: "135px", height: "auto" }}>
                                <img className='img-fluid' src="https://transvelo.github.io/electro-html/2.0/assets/img/300X300/img6.jpg" alt="" />
                            </div>
                            <div className='mx-2 border' style={{ cursor: "pointer", width: "135px", height: "auto" }}>
                                <img className='img-fluid' src="https://transvelo.github.io/electro-html/2.0/assets/img/300X300/img6.jpg" alt="" />
                            </div>
                            <div className='border' style={{ cursor: "pointer", width: "135px", height: "auto" }}>
                                <img className='img-fluid' src="https://transvelo.github.io/electro-html/2.0/assets/img/300X300/img6.jpg" alt="" />
                            </div>
                            <div className='mx-2 border' style={{ cursor: "pointer", width: "135px", height: "auto" }}>
                                <img className='img-fluid' src="https://transvelo.github.io/electro-html/2.0/assets/img/300X300/img6.jpg" alt="" />
                            </div>
                            <div className='border' style={{ cursor: "pointer", width: "135px", height: "auto" }}>
                                <img className='img-fluid' src="https://transvelo.github.io/electro-html/2.0/assets/img/300X300/img6.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-4 col-sm-12 bg-white pt-2'>
                        <div className='text-start'>
                            <span >Headphones</span>
                            <h2 className='mt-2'>Ultra Wireless S50 Headphones S50 with Bluetooth</h2>
                            <a href="#">
                                <div>
                                    <small>1</small>
                                    <small>1</small>
                                    <small>1</small>
                                    <small>1</small>
                                    <span>(3 customer reviews)</span>
                                </div>
                            </a>
                            <div className='mt-3'>
                                <ul>
                                    <li>4.5 inch HD Touch Screen (1280 x 720)</li>
                                    <li>Android 4.4 KitKat OS</li>
                                    <li>1.4 GHz Quad Core™ Processor</li>
                                    <li>20 MP Electro and 28 megapixel CMOS rear camera</li>

                                </ul>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

                        </div>
                    </div>
                    <div className='col-md-6 col-lg-4 col-sm-12 bg-white pt-2'>
                        <div class="text-start card border-2">
                            <div class="card-body">
                                <div className='border-bottom'>
                                    <p>Availability: <span> 26 in stock</span></p>
                                </div>
                                <div className='fs-1 fw-bold'>$685.00</div>
                                <div>
                                    <div className='mb-2'>Quantity</div>
                                    <div className='d-flex border rounded w-100'>
                                        <div className='flex-grow-1 flex-basis-0 p-1 w-100'>
                                            <div class="input-group number-spinner">
                                                <input type="number" min="0" class="border-0 text-center" value="1" />
                                                <button class="btn btn-default"><i class="fas fa-minus"></i></button>
                                                <button class="btn btn-default"><i class="fas fa-plus"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='my-3'>
                                    <div className='mb-2'>Color</div>
                                    <div>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>White</option>
                                            <option value="2">Black</option>
                                            <option value="3">Pink</option>
                                            <option value="1">Red</option>
                                            <option value="2">Blue</option>
                                        </select>
                                    </div>

                                </div>
                                <div class="d-grid gap-2 mx-auto">
                                    <button style={{ backgroundColor: '#fdbf70' }} class="btn" type="button">Add to Cart</button>
                                    <button style={{ backgroundColor: '#fdbf70' }} class="btn" type="button">Buy now</button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >

    );
};

export default ProductsDetails;