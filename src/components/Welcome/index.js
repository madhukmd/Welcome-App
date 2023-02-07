// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {status: 'Subscribe'}

  onStatusChange = () => {
    const {status} = this.state

    if (status === 'Subscribe') {
      this.setState({status: 'Subscribed'})
    } else if (status === 'Subscribed') {
      this.setState({status: 'Subscribe'})
    }
  }

  render() {
    const {status} = this.state

    let subColor

    if (status === 'Subscribed') {
      subColor = 'green'
    } else {
      subColor = ''
    }

    return (
      <div className="bgContainer">
        <div className="Container">
          <h1 className="heading">Welcome</h1>
          <p className="paragraph">Thank you! Happy Learning</p>
          <button
            type="button"
            className={`btn ${subColor}`}
            onClick={this.onStatusChange}
          >
            {status}
          </button>
        </div>
      </div>
    )
  }
}
export default Welcome
