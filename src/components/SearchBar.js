import React from 'react';

class SearchBar extends React.Component {

    state = { inputText: '' };

    handleInputChange = (event) => {
        this.setState({ inputText: event.target.value });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
    };

    render() {


        return (
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.handleFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.inputText} onChange={this.handleInputChange} />
                    </div>
                </form>
            </div>
        );
    }

}

export default SearchBar;