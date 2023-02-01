import { carouselPropsType } from '@/data/types';
import Image from 'next/image';
import React from 'react'
import { Carousel } from "react-responsive-carousel";

function ImageCarousel({images}: carouselPropsType) {
  return (
    <Carousel showThumbs={false} dynamicHeight={false} showStatus={false}>
        {images.map((img, index) => {
           return <div key={index}>
            <Image
                src={img}
                alt={img}
                width={450}
                height={350}
            ></Image>
            <p></p>
            </div>
        })}
        </Carousel>
  )
}

export default ImageCarousel