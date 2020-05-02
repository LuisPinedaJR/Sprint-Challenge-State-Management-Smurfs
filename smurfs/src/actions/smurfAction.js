import axios from 'axios'

export const GET_DATA = 'GET_DATA'
export const ADD_SMURF = 'ADD_SMURF'

export function data() {
  return function(dispatch) {
    axios.get('http://localhost:3333/smurfs').then(res => {
      console.log('res.data', res.data[0])
      dispatch({
        type: 'GET_DATA',
        smurfs: res.data[0],
      })
    })
  }
}

export function addSmurf() {
  return function(dispatch) {
    axios.post('http://localhost:3333/smurfs').then(res => {
      console.log('res', res.data)
      dispatch({
        type: 'ADD_SMURF',
        newSmurf: res.data,
      })
    })
  }
}
