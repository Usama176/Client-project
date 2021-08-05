import React from 'react';
import VideoSection from '../../components/videoSection/VideoSection';
import HowItWorksSection from '../../components/howItWorksSection/HowItWorksSection';
import ReviewsCarousel from '../../components/reviewsCarousel/ReviewsCarousel';
import FAQ from '../../components/FAQ/FAQ';
import TwoWaysSec from '../../components/twoWaysSection/TwoWaysSec';
import Footer from '../../components/footer/Footer';
import './index.css';

const BecomeAnArtistPage = () => {
    return (
        <div className="becomeAnArtistPage">
            <VideoSection/>
            <HowItWorksSection/>
            <TwoWaysSec/>
            <ReviewsCarousel/>
            <FAQ/>
            <Footer/>
        </div>
    );
}

export default BecomeAnArtistPage;
