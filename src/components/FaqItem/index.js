// Write your code here.

import './index.css'

const FaqItem = props => {
  const {item, onclickPlusOrMinusBtn, isClickedList} = props
  const {questionText, id, answerText} = item

  const onclickBtn = () => {
    onclickPlusOrMinusBtn(id)
  }

  const btnImg = isClickedList[id]
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const ansTextContainer = (
    <div>
      <hr className="hrLine" />
      <p className="text">{answerText}</p>
    </div>
  )

  const imgAltText = isClickedList[id] ? 'plus' : 'minus'

  return (
    <li className="listContainer">
      <div className="questionTextContainer">
        <p>{questionText}</p>
        <button type="button" className="btn" onClick={onclickBtn}>
          <img src={btnImg} alt={imgAltText} />
        </button>
      </div>
      {isClickedList[id] && ansTextContainer}
    </li>
  )
}

export default FaqItem
