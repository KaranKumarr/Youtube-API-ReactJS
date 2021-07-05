import React from 'react';


const VideoDetails = ({ video }) => {

    if (!video) {
        return <h4 style={{ border: '0.02rem solid gray', padding: '1rem', borderRadius: '0.5rem', letterSpacing: '0.1rem', fontFamily: '"Bona Nova", serif' }}>I built this React App to try to play with Youtube API, It is just a basic Youtube Videos Browser application, which should explain why UI looks very basic. You can type something in searchbar and hit enter to see results.</h4>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe alt={video.snippet.title} src={videoSrc} title="Video player" />
            </div>
            <div className="ui segment">
                <h4 className="ui header"> {video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>

        </div>

    );

};

export default VideoDetails;