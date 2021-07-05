import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, handleVideoSelect }) => {


    let VideoItems = videos.map((video) => {
        if (video.id.kind === 'youtube#video') {
            return <VideoItem key={video.id.videoId} handleVideoSelect={handleVideoSelect} video={video} />;
        } else {
            return null;
        }
    });

    return (

        <div className="ui relaxed divided list" >{VideoItems}</div>

    );

};

export default VideoList;