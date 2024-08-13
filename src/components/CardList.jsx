import React from 'react'
import Card from './Card'
import '../app.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import Slider from "react-slick";
import 'react-multi-carousel/lib/styles.css';
function CardList({flashcards}) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024, // Screen width under 1024px
            settings: {
              slidesToShow: 2,  // Show 2 slides
              slidesToScroll: 1,
              infinite: false,
              dots: true,
            },
          },
          {
            breakpoint: 600,  // Screen width under 600px
            settings: {
              slidesToShow: 1,  // Show 1 slide
              slidesToScroll: 1,
              initialSlide: 1,  // Start from the first slide
            },
          },
          {
            breakpoint: 480,  // Screen width under 480px
            settings: {
              slidesToShow: 1,  // Show 1 slide
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div className='card-list'>
        <Slider {...settings}>
            {flashcards.map(flashcard => {return <Card flashcard={flashcard} key={flashcard.id}/>}
                
            )}
        </Slider>
        
    </div>
  )
}

export default CardList