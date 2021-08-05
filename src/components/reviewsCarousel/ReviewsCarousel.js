import React from 'react';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import Reviews from '../reviews/Reviews';
import { ClientReviews } from '../../reviewAndFAQText';
import './reviewsCarousel.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

const ReviewsCarousel = () => {
    return (
        <div className="wrapper carouselContainer">
            <h1 className="sectionTitle">Reviews</h1>
            <CarouselProvider
                className="carousel"
                naturalSlideWidth={200}
                naturalSlideHeight={60}
                totalSlides={ClientReviews.reviews.length}
                visibleSlides={1}
                dragEnabled={true}
                // for auto height
                isIntrinsicHeight={true}
            >
                <Slider>
                    {
                        ClientReviews.reviews.map((review, i) => {
                            return (
                                <Slide className="slide" key={i} index={i}>
                                    <Reviews
                                        review={review.clientReview}
                                        name={review.clientName}
                                        city={review.clientCity}
                                    />
                                </Slide>
                            );
                        })
                    }
                </Slider>
                <DotGroup className="dotGroup"/>
            </CarouselProvider>
        </div>
    );
}

export default ReviewsCarousel;
