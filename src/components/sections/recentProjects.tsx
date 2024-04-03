import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { carouselItems } from '../../../utils/constants'

export function Products() {

    const [index, setIndex] = useState(0);

    const handleSelect = (index: number) => {
        setIndex(index);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <br />
            <h1 className="mt-5 mb-0.5 text-4xl sm:text-5xl font-normal text-grey-900">Past Projects</h1>
            
            <div className="flex justify-center p-5 mx-10 sm:mx-40">
                <Carousel className="w-60 sm:w-full h-auto max-w-[620px]" autoPlay infiniteLoop interval={5000} onChange={handleSelect} centerMode centerSlidePercentage={100} dynamicHeight={false}>
                {carouselItems.map(el => (
                    <div key={el.imgSrc} className="border-1 border-red-400 p-0.5 aspect-w-16 aspect-h-9">
                        <a className="font-bold text-blue-500 text-md" href={el.productPage} target="_blank" rel="noopener noreferrer">
                            <h3 style={{}}>{el.captionHeader}</h3>
                        </a>
                        <label className="text-sm tracking-tight sm:text-md text-black-500">{el.captionBody}</label>
                        <img
                            className="m-0.5 rounded-lg object-contain h-auto object-center w-full max-w-60"
                            src={el.imgSrc}
                            alt={el.imgAlr}
                        />
                    </div> 
                ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Products