"use client"
import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const SliderCLi = ({children}) => {
    const responsiveSettings = [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 100,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ];
  return (
    <Slide slidesToScroll={1} slidesToShow={3} responsive={responsiveSettings}>
      {children}
    </Slide>
  )
}

export default SliderCLi
