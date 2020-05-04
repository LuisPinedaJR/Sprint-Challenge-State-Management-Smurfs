import React from 'react'
import { connect } from 'react-redux'
import { fetchSmurfs } from '../actions'

import { deleteSmurf } from '../actions/index'

class Smurfs extends React.Component {
  componentDidMount() {
    this.props.fetchSmurfs()
  }

  render() {
    return (
      <div>
        {this.props.smurfs.map(smurf => (
          <div>
            <h2>name:{smurf.name}</h2>
            <h3>age: {smurf.age}</h3>
            <h3>height: {smurf.height}</h3>
            <button onClick={() => this.props.deleteSmurf(smurf.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
  }
}

export default connect(mapStateToProps, { fetchSmurfs, deleteSmurf })(Smurfs)
