import React from 'react';
import './reviews.css';

const Reviews = (props) => {
    return (
        <div className="reviews_Container">
            <h3 className="client_Review">{props.review}</h3>
            <span className="client_Info">{props.name},</span>
            <span className="client_Info">{props.city}</span>
        </div>
    );
}

export default Reviews;
