import { carouselPropsType } from '@/data/types';
import Image from 'next/image';
import React from 'react'
import { Carousel } from "react-responsive-carousel";

function ImageCarousel({images}: carouselPropsType) {
  return (
    <Carousel showThumbs={false}>
        {images.map((img, index) => {
           return <div key={index}>
            <Image
                src={img}
                alt={img}
                width={550}
                height={450}
            ></Image>
            <p></p>
            </div>
        })}
        </Carousel>
  )
}

export default ImageCarousel