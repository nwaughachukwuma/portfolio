import React, { useState } from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap'
import uuidV4 from 'uuid/v4'


const carouselItems = [
    {
        imgSrc: "https://dl.dropbox.com/s/9wdy1nx5of5xjtf/Screenshot%202020-01-07%20at%2017.11.31.png?dl=0",
        imgAlr: "First slide",
        captionHeader: "Hich App",
        captionBody: "Hich is a ridesharing app focused on the college communities in the USA",
        textColor: '#F00',
        productPage: 'https://play.google.com/store/apps/details?id=com.hichapp.Hich'
    },
    {
        imgSrc: "https://dl.dropbox.com/s/dcxd6y5rc2y9eka/Screenshot%202020-01-07%20at%2017.11.15.png?dl=0",
        imgAlr: "Second slide",
        captionHeader: "Hich App",
        captionBody: "Hich is a ridesharing app focused on the communities in the USA",
        textColor: '#000',
        productPage: 'https://play.google.com/store/apps/details?id=com.hichapp.Hich'
    },
    // msdat
    {
        imgSrc: "https://dl.dropbox.com/s/mcd2pppxbuftgpk/Screenshot%202020-01-07%20at%2023.07.24.png?dl=0",
        imgAlr: "Third slide",
        captionHeader: "MSDAT",
        captionBody: "Multi-source Data Analytics and Triangulation Dashboard",
        textColor: '#000',
        productPage: 'https://msdat.fmohconnect.gov.ng/central_analytics'
    },
    {
        imgSrc: "https://dl.dropbox.com/s/v7wiv6gr4a7dlkm/Screenshot%202020-01-07%20at%2023.08.07.png?dl=0",
        imgAlr: "Fourth slide",
        captionHeader: "MSDAT",
        captionBody: "It provides a single transparent view of key health indicators from multiple data sources.",
        textColor: '#000',
        productPage: 'https://msdat.fmohconnect.gov.ng/central_analytics'
    },
    {
        imgSrc: "https://dl.dropbox.com/s/r9dhm7nm8b4a7hc/Screenshot%202020-01-07%20at%2017.29.36.png?dl=0",
        imgAlr: "Fifth slide",
        captionHeader: "EventsApp (Beta)",
        captionBody: "EventsApp is a platform that aims to enhance the entire experience of creating and managing events",
        textColor: '#000'
    },
    {
        imgSrc: "https://dl.dropbox.com/s/gmmvf6cg2h12o0t/Screenshot%202020-01-07%20at%2017.29.55.png?dl=0",
        imgAlr: "Sixth slide",
        captionHeader: "EventsApp (Beta)",
        captionBody: "EventsApp is a platform that aims to enhance the entire experience of creating and managing events",
        textColor: '#000'
    },
    {
        imgSrc: "https://dl.dropbox.com/s/17msex5cc1ltsf2/Screenshot%202020-01-07%20at%2017.37.25.png?dl=0",
        imgAlr: "Seventh slide",
        captionHeader: "DHIS2 import tracker",
        captionBody: "A simple web tool that aims to optimize data entry experience on DHIS2.",
        textColor: '#FFF',
        productPage: 'http://dhis2.hbruw.com.ng/'
    },
    {
        imgSrc: "https://dl.dropbox.com/s/ko5zw0vb7sm8e41/Screenshot%202020-01-07%20at%2023.27.08.png?dl=0",
        imgAlr: "Eight slide",
        captionHeader: "DHIS2 import tracker",
        captionBody: "Focuses on reducing the time and efforts required to clean and convert data to the appropriate JSON format before uploading to a DHIS2 instance",
        textColor: '#FFF',
        productPage: 'http://dhis2.hbruw.com.ng/'
    },
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
                <h2 className="display-3 about-header">Some Past Projects</h2>
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