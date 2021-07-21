import React, { useState } from 'react'
import { Carousel, Container, Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap'
import uuidV4 from 'uuid/v4'
import { carouselItems } from '../../utils/constants'

export function Products(props) {

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        console.log({selectedIndex})
        setIndex(selectedIndex);
        setDirection(e?.direction);
    };

    return (
        <Container>
            {/* Add products here */}
            <Row className="justify-content-md-center">
                <h2 className="display-3 about-header">Recent Projects</h2>
            </Row>
            <Row className="justify-content-md-center" style={{ maxHeight: '10%' }}>
                <Col sm={8} md={8}>
                    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
                        {carouselItems.map(el => (
                            <Carousel.Item key={uuidV4()}>
                                <a href={el.productPage} target="_blank" rel="noopener noreferrer">
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 150, hide: 400 }}
                                        overlay={<Tooltip {...props}>Click me</Tooltip>}
                                    >
                                        <h3 style={{}}>{el.captionHeader}</h3>
                                    </OverlayTrigger>
                                </a>
                                <label style={{ color: '#000' }}>{el.captionBody}</label>
                                <img
                                    className="img-responsive"
                                    src={el.imgSrc}
                                    alt={el.imgAlr}
                                    width="700"
                                    height="350"
                                />
                                {/* <Carousel.Caption style={{cursor: 'pointer'}} onClick={()=>{ 
                                    
                                    el.productPage && window.open(el.productPage, '_blank');
                                }}>
                                    <h3 style={{color: el.textColor && el.textColor}}>{el.captionHeader}</h3>
                                    <h5 style={{color: el.textColor && el.textColor}}>{el.captionBody}</h5>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default Products