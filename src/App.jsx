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
      return <div>NOWSERCHIG....</div>
    } else {
      return (
        <div>
          <h1 Style='text-align:center'>{items}!</h1>
          <h2>'経度'{longitude}</h2>
          <h2>'緯度'{latitude}</h2>
        </div>
      )
    }
  }
}

export default Exchange

render(<Exchange />, document.getElementById('root'))
