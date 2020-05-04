// import axios from 'axios'

// export const GET_DATA = 'GET_DATA'
// export const ADD_SMURF = 'ADD_SMURF'

// export function data() {
//   return function(dispatch) {
//     axios.get('http://localhost:3333/smurfs').then(res => {
//       console.log('res.data line 9 ', res.data)
//       const data = res.data[0]
//       dispatch({
//         type: 'GET_DATA',
//         smurfs: data,
//       })
//     })
//   }
// }

// export function addSmurf(data) {
//   return function(dispatch) {
//     axios.post('http://localhost:3333/smurfs', data).then(res => {
//       console.log('res data line 21 in action', res.data)
//       const data = res.data.map(newSmurf => newSmurf)
//       dispatch({
//         type: 'ADD_SMURF',
//         newSmurf: data,
//       })
//     })
//   }
// }
