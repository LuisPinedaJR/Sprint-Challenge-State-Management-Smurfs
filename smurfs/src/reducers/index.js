import {
  FETCHING_SMURFS,
  SMURFS_FETCH_SUCCESS,
  ADDING_SMURF,
  SMURF_ADDED,
} from '../actions'

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
}

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return { ...state, fetchingSmurfs: true }

    case SMURFS_FETCH_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: [...state.smurfs, ...action.payload],
      }

    case SMURF_ADDED:
      return { ...state, smurfs: [...action.payload] }

    default:
      return state
  }
}

export default smurfReducer
// import { combineReducers } from 'redux'
// import smurfReducer from './smurfReducer'

// const rootReducer = combineReducers({
//   smurfReducer,
// })

// export default rootReducer

// import { combineReducers } from 'redux'
// import smurfReducer from './smurfReducer'

// const rootReducer = combineReducers({
//   smurfReducer,
// })

// export default rootReducer
