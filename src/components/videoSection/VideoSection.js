import React from 'react';
import VideoPlayer from 'react-video-js-player';
import './videoSection.css';
import Thumbnail from '../../assets/images/thumbnail.jpg';
import MyVideo from '../../assets/videos/video.mp4';

const VideoSection = () => {

    const videoSrc = MyVideo;
    const poster = Thumbnail;

    return (
        <div className="videoSec">
            <div className="videoSec_Body">
                <VideoPlayer 
                    src={videoSrc}
                    poster={poster}
                    className="videoSec_Video"
                />
                <div className="videoSec_TxtBtnCont">
                    <div className="videoSec_Text">
                    <h4>“Literature, painting, music - the most basic lesson that all art teaches us is to stop, look, and listen to life on this planet, including our own lives, as a vastly richer, deeper, more mysterious business than most of the time it ever occurs to us to suspect as we bumble along from day to day on automatic pilot.”</h4>
                    </div>
                    <div className="videoSec_BtnCont">
                        <button className="videoSec_Btn">Become an Artist</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoSection;
