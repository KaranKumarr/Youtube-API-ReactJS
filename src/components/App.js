import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../APIs/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    onInputSubmit = async (inputText) => {

        const response = await youtube.get('/search', {
            params: {
                q: inputText
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });

    };

    handleVideoSelect = video => {

        this.setState({ selectedVideo: video });

    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onInputSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetails video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}


export default App;;