import React, { Component } from 'react'
import { render } from 'react-dom'
import './App.css'

class Exchange extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
      items: []
    }
  }
  componentDidMount () {
    fetch('http://api.open-notify.org/iss-now.json')
      .then(res => res.json())
      .then(json => {
        console.log(json.rates)
        this.setState({
          isLoaded: true,
          items: json.message,
          longitude: json.iss_position.longitude,
          latitude: json.iss_position.latitude
        })
      })
  }

  render () {
    var { items, isLoaded, longitude, latitude } = this.state
console.log(this.state)
    if (!isLoaded) {
      return <div><h2>NOWSERCHIG....</h2></div>
    } else {
      return (
        <div>
          <h1>{items}!</h1>
          <p>現在の国際宇宙ステーションの位置は</p>
          <p>緯度:{latitude}</p>
          <p>経度:{longitude}</p>
        </div>
      )
    }
  }
}

export default Exchange

render(<Exchange />, document.getElementById('root'))
