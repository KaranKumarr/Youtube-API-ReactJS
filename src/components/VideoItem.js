import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, handleVideoSelect }) => {



    return (
        <div onClick={() => handleVideoSelect(video)} className="item video-item" >
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt="" />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );

};

export default VideoItem;