import React, { Component } from 'react'
import './App.css'
import './App.css'
import Smurfs from './Smurfs'
import CreateSmurfForm from './CreateSmurfForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateSmurfForm />
        <Smurfs />
      </div>
    )
  }
}

export default App
// import React, { Component } from 'react'
// import './App.css'

// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { data } from '../actions/smurfAction'
// import NewSmurf from './NewSmurf'
// import SmurfForm from './SmurfForm'

// class App extends Component {
//   componentDidMount() {
//     this.props.data()
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>SMURFS! 2.0 W/ Redux</h1>
//         <div>Welcome to your state management version of Smurfs!</div>
//         <div>Start inside of your `src/index.js` file!</div>
//         <div>Have fun!</div>
//         <SmurfForm />
//         <h2>{console.log('this.props', this.props.name)}</h2>
//         <NewSmurf />
//       </div>
//     )
//   }
// }
// const mapStateToProps = state => ({
//   name: state.smurfReducer.smurfs.name,
//   age: state.smurfReducer.smurfs.age,
//   height: state.smurfReducer.smurfs.height,
//   id: state.smurfReducer.smurfs.id,
// })

// const mapDispatchToProps = dispatch => bindActionCreators({ data }, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(App)
