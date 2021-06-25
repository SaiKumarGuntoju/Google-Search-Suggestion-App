import './index.css'

const SuggestionItem = props => {
  const {eachItem, onClickArrowButton} = props
  const {suggestion} = eachItem

  const arrowButton = () => {
    onClickArrowButton(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p>{suggestion}</p>
      <button type="button" onClick={arrowButton} className="arrow-button">
        <img
          alt="arrow"
          className="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
