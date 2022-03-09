import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './CheckoutForm';

const CheckoutForm = () => {
    return (
        <div>
            <h5 className='fw-bold ms-4'>Billing Details</h5>

            <Form className='m-4'>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label> Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Your name" />
                    </Form.Group>


                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="abc@gmail.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Your Country</Form.Label>
                    <Form.Control placeholder="United States" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City/State</Form.Label>
                        <Form.Control />
                    </Form.Group>



                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip/Postal Code</Form.Label>
                        <Form.Control type="nuber" />
                    </Form.Group>
                </Row>




            </Form>

            {/* Payment method integration */}

            <h5 className='fw-bold ms-4'>Payment Method</h5>
            <div className='d-flex ms-4 mt-3 justify-content-between align-content-center'>
                <p className='fw-bold'>Credit Card</p>
                <img src='https://e7.pngegg.com/pngimages/415/124/png-clipart-mastercard-visa-bank-card-payment-mastercard-text-service.png' width='100' className='me-5' />
            </div>
            <Form className='m-4'>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label> Card Number</Form.Label>
                        <Form.Control type="text" placeholder="Your name" />
                    </Form.Group>


                </Row>


                <Row className="mb-3">




                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Security Code</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>
                </Row>


                <Button variant="primary" type="submit">
                    Submit
                </Button>




            </Form>

        </div>
    );
};

export default CheckoutForm;