// Write your code here.

import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem/index'

class Faqs extends Component {
  state = {isClicked: [], click: false}

  onclickPlusOrMinusBtn = id => {
    const {faqsList} = this.props
    const {click} = this.state
    const clicked = faqsList.map(eachItem => eachItem.id === id)
    if (click === false) {
      this.setState({isClicked: clicked})
    } else {
      this.setState({isClicked: []})
    }
    this.setState(prevState => ({click: !prevState.click}))
  }

  render() {
    const {faqsList} = this.props
    const {isClicked} = this.state

    return (
      <div className="bgContainer">
        <div className="faqsBg">
          <h1>FAQs</h1>
          <ul className="itemsSection">
            {faqsList.map(eachItem => (
              <FaqItem
                item={eachItem}
                isClickedList={isClicked}
                onclickPlusOrMinusBtn={this.onclickPlusOrMinusBtn}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
