import React, { Component } from 'react'
import './App.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { data } from '../actions/smurfAction'
import SmurfForm from './SmurfForm'

class App extends Component {
  componentDidMount() {
    this.props.data()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm />
        <h2>{this.props.name}</h2>
        <h2>{this.props.age}</h2>
        <h2>{this.props.height}</h2>
        <h2>{this.props.id}</h2>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  name: state.smurfReducer.smurfs.name,
  age: state.smurfReducer.smurfs.age,
  height: state.smurfReducer.smurfs.height,
  id: state.smurfReducer.smurfs.id,
})

const mapDispatchToProps = dispatch => bindActionCreators({ data }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
