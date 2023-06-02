import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, text: 'Even'}

  findRandom = () => Math.ceil(Math.random() * 100)

  incrementNumber = () => {
    const {count, text} = this.state

    const randomNum = this.findRandom()
    if (randomNum > 0 && randomNum < 100) {
      if (randomNum % 2 === 0) {
        this.setState(prevSate => ({count: randomNum, text: 'Even'}))
      } else {
        this.setState(prevSate => ({count: randomNum, text: 'Odd'}))
      }
    }
  }

  render() {
    const {count, text} = this.state
    return (
      <div className="main">
        <div className="card">
          <h1 className="heading">Count {count} </h1>
          <p className="evenOddDesc">Count is {text}</p>
          <button onClick={this.incrementNumber} className="btn" type="button">
            Increment
          </button>
          <p className="note">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
