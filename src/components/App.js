import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../APIs/youtube';

class App extends React.Component {

    onInputSubmit = (inputText) => {

        youtube.get('/search', {
            params: {
                q: inputText
            }
        });

    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onInputSubmit} />
            </div>

        );
    }

}


export default App;