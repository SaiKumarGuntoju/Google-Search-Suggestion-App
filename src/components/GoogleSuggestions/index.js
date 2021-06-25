import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickArrowButton = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchResults = suggestionsList.filter(element =>
      element.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="page-container">
        <div className="google-container">
          <img
            className="logo"
            alt="google logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          />
          <div className="search-input-suggestions-container">
            <div className="search-input-container">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                onChange={this.onChangeSearchInput}
                className="search-input"
                type="search"
                value={searchInput}
              />
            </div>
            <ul className="suggestions-list">
              {searchResults.map(eachItem => (
                <SuggestionItem
                  key={eachItem.id}
                  onClickArrowButton={this.onClickArrowButton}
                  eachItem={eachItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
