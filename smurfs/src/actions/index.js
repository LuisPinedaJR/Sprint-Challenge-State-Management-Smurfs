import axios from 'axios'

export const FETCHING_SMURFS = 'FETCHING_SMURFS'
export const SMURFS_FETCH_SUCCESS = 'SMURFS_FETCH_SUCCESS'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const ADDING_SMURF = 'ADDING_SMURF'
export const SMURF_ADDED = 'SMURF_ADDED'

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS })
  axios.get(`http://localhost:3333/smurfs`).then(response => {
    dispatch({ type: SMURFS_FETCH_SUCCESS, payload: response.data })
  })
}

export const addNewSmurf = newSmurf => dispatch => {
  dispatch({ type: ADDING_SMURF })

  axios.post('http://localhost:3333/smurfs', newSmurf).then(response => {
    dispatch({ type: SMURF_ADDED, payload: response.data })
  })
}

export const deleteSmurf = smurfId => dispatch => {
  dispatch({ type: FETCHING_SMURFS })
  axios
    .delete(`http://127.0.0.1:3333/smurfs/${smurfId}`)
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
}
