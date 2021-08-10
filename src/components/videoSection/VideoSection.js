import React from 'react';
import { Player, BigPlayButton, PosterImage } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import './videoSection.css';
import MyVideo from '../../assets/videos/video.mp4';
import Thumbnail from '../../assets/images/thumbnail.jpg';

const VideoSection = () => {

    const videoSrc = MyVideo;
    const poster = Thumbnail;

    return (
        <div className="videoSec">
            <div className="videoSec_Body">
                <Player
                    src={videoSrc}
                    poster={poster}
                    fluid = {false}
                    width="100%"
                    height="auto"
                    className="video"
                >
                    <PosterImage className="poster"/>
                    <BigPlayButton className="big-play-button" position="center" />
                </Player>
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
