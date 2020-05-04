// import { GET_DATA, ADD_SMURF } from '../actions/smurfAction'

// const initialState = {
//   smurfs: {},
//   newSmurf: {},
// }

// const smurfReducer = (state = initialState, action) => {
//   const { type, smurfs, newSmurf } = action
//   switch (type) {
//     case GET_DATA:
//       return {
//         ...state,
//         smurfs: {
//           name: smurfs.name,
//           age: smurfs.age,
//           height: smurfs.height,
//           id: smurfs.id,
//         },
//       }
//     case ADD_SMURF:
//       return {
//         ...state,
//         newSmurf: {
//           name: newSmurf.name,
//           age: newSmurf.age,
//           height: newSmurf.height,
//           id: newSmurf.id,
//         },
//       }
//     default:
//       return state
//   }
// }

// export default smurfReducer
