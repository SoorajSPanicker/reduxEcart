import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { addTocart } from '../reduxcart/cartSlice';
import { Heart } from 'react-feather';
import { addTowishList } from '../reduxcart/wishlistSlice';






function Home() {
    const [product, upproduct] = useState([])
    const dispatch = useDispatch()
    const allproducts = async () => {
        const result = await axios.get("https://fakestoreapi.com/products")
        // console.log(result.data);
        upproduct(result.data)


    }
    console.log(product);
    useEffect(() => {
        allproducts()

    }, [])
    return (

        <div>
            <Container>
                <Row className='mt-5 '>
                    {
                        product.length > 0 ? product.map(i => (
                            <Col lg={4} md={6} sm={8}>
                                <Card className='mb-3 border border-primary' style={{ width: '18rem' }}>
                                    <Card.Img className='p-1' style={{ height: '250px' }} variant="top" src={i.image} />
                                    <Card.Body >
                                        <Card.Title style={{ display: 'flex', justifyContent: 'center' }}>{i.title.length > 35 ? i.title.slice(0, 35) + ".." : i.title}</Card.Title>
                                        <Card.Text style={{ display: 'flex', justifyContent: 'center' }}>

                                            <h3>{i.price}$</h3>
                                        </Card.Text>

                                        <div style={{ display: 'flex', justifyContent: 'center' }}>

                                            <Button onClick={() => dispatch(addTocart(i))} variant="primary" >Add to cart</Button>
                                            <Heart onClick={() => dispatch(addTowishList(i))} className='ms-3 mt-2 btn' size={50} color='red'></Heart>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </Col>
                        )) : <div className='text-center'><i class="fa-solid fa-spinner fa-spin fa-4x"></i></div>


                    }
                </Row>

            </Container>

        </div>
    )
}

export default Home
