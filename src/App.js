import React, { Component } from 'react'
import Cards from './components/cards/Cards'
import Navbar from './components/navbar/Navbar'

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Cards/>
      </div>
    )
  }
}

export default App
