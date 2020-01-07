import React, { useState } from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap'
import uuidV4 from 'uuid/v4'


const carouselItems = [
    {
        imgSrc: "https://dl.dropbox.com/s/wfuysqkzo3ewx04/Screenshot%202020-01-07%20at%2017.11.31.png?dl=0",
        imgAlr: "First slide",
        captionHeader: "Hich App",
        captionBody: "Hich is a ridesharing app focused on the college communities in the USA",
        textColor: '#F00',
        productPage: 'https://play.google.com/store/apps/details?id=com.hichapp.Hich'
    },
    {
        imgSrc: "https://dl.dropbox.com/s/2u73hpew0kw089p/Screenshot%202020-01-07%20at%2017.11.15.png?dl=0",
        imgAlr: "Second slide",
        captionHeader: "Hich App",
        captionBody: "Hich is a ridesharing app focused on the communities in the USA",
        textColor: '#000',
        productPage: 'https://play.google.com/store/apps/details?id=com.hichapp.Hich'
    },
    {
        imgSrc: "https://dl.dropbox.com/s/lpw20qzf28mvt92/Screenshot%202020-01-07%20at%2017.29.36.png?dl=0",
        imgAlr: "Third slide",
        captionHeader: "EventsApp (Beta)",
        captionBody: "EventsApp is a platform that aims to enhance the entire experience of creating and managing events",
        textColor: '#000'
    },
    {
        imgSrc: "https://dl.dropbox.com/s/acwoaj0ylxcgml2/Screenshot%202020-01-07%20at%2017.29.55.png?dl=0",
        imgAlr: "Fourth slide",
        captionHeader: "EventsApp (Beta)",
        captionBody: "EventsApp is a platform that aims to enhance the entire experience of creating and managing events",
        textColor: '#000'
    },
    {
        imgSrc: "https://dl.dropbox.com/s/3so7ip94fr0syzu/Screenshot%202020-01-07%20at%2017.37.25.png?dl=0",
        imgAlr: "Fourth slide",
        captionHeader: "DHIS2 import tracker",
        textColor: '#FFF',
        productPage: 'http://dhis2.hbruw.com.ng/'
    }
]

export function Products() {

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <Container>
             {/* Add products here */}
            <Row className="justify-content-md-center">
                <h2 className="display-3 about-header">Past Projects</h2>
            </Row>
            <Row className="justify-content-md-center" style={{maxHeight: '10%'}}>
                <Col sm={8} md={8}>
                    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
                        {carouselItems.map(el => (
                            <Carousel.Item key={uuidV4()}>
                                <a href={el.productPage} target="_blank" rel="noopener noreferrer">
                                    <h3 style={{}}>{el.captionHeader}</h3>
                                </a>
                                <label style={{color: '#000'}}>{el.captionBody}</label>
                                <img
                                    className="img-responsive"
                                    src={el.imgSrc}
                                    alt={el.imgAlt}  
                                    width="700"
                                    height="300"                 
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