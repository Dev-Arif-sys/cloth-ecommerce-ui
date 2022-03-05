import React from 'react';
import ReviewForm from '../ReviewForm/ReviewForm';

const Review = () => {
    return (
        <div className='container'>
            <h1>Review</h1>
            <div className='row'>
                <div className='col-lg-8 col-sm-12'>
                    <div className='px-5'>
                        <div className='border-bottom'>
                            <div className='d-flex justify-content-between my-3'>
                                <div className='d-flex'>
                                    <div className='p-1 d-flex align-items-center mx-2' style={{ cursor: "pointer", width: "50px", height: "50px" }}>
                                        <img className='border border-5 rounded-circle img-fluid' src="https://transvelo.github.io/electro-html/2.0/assets/img/300X300/img6.jpg" alt="" />
                                    </div>
                                    <div className='d-flex flex-column align-items-center'>
                                        <div className='fw-bold'>sazzad Hossain</div>
                                        <div className='fw-light' style={{ marginTop: "-5px" }}> <small className='text-start'>April 3, 2019</small></div>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <ul className='d-flex align-items-center'>
                                        <li className='list-group-item border-0'>1</li>
                                        <li className='list-group-item border-0'>1</li>
                                        <li className='list-group-item border-0'>1</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='pb-1 ms-5 ps-3'>
                                <p className='text-start'>I love the softness most of all, was impressed with their absorbency,
                                    which makes drying off after a shower a snap. The towels also dry out super fast.
                                    This was my first time using microfiber towels I'm glad I had read to pat dry rather than rub-
                                    otherwise my experience wouldn't have been so good. I'm a fan!</p>
                            </div>
                        </div>
                        <div className='border-bottom'>
                            <div className='d-flex justify-content-between my-3'>
                                <div className='d-flex'>
                                    <div className='p-1 d-flex align-items-center mx-2' style={{ cursor: "pointer", width: "50px", height: "50px" }}>
                                        <img className='border border-5 rounded-circle img-fluid' src="https://transvelo.github.io/electro-html/2.0/assets/img/300X300/img6.jpg" alt="" />
                                    </div>
                                    <div className='d-flex flex-column align-items-center'>
                                        <div className='fw-bold'>sazzad Hossain</div>
                                        <div className='fw-light' style={{ marginTop: "-5px" }}> <small className='text-start'>April 3, 2019</small></div>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <ul className='d-flex align-items-center'>
                                        <li className='list-group-item border-0'>1</li>
                                        <li className='list-group-item border-0'>1</li>
                                        <li className='list-group-item border-0'>1</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='pb-1 ms-5 ps-3'>
                                <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Nihil odit sint eos sit! Amet, qui possimus! Aliquam, optio cum.
                                    Necessitatibus rem cupiditate quidem accusantium maxime
                                    pariatur aspernatur eos ipsa dolores.</p>
                            </div>
                        </div>

                    </div >
                </div>
                <div className='col-lg-4 col-sm-12'>
                    <ReviewForm></ReviewForm>
                </div>

            </div>
        </div>
    );
};

export default Review;