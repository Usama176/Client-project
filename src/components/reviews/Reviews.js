import React from 'react';
import './reviews.css';

const Reviews = (props) => {
    return (
        <div className="reviewsContainer">
            <h3 className="clientReview">{props.review}</h3>
            <span className="clientInfo">{props.name},</span>
            <span className="clientInfo">{props.city}</span>
        </div>
    );
}

export default Reviews;
