// import React from 'react'
// import { connect } from 'react-redux'
// //import { bindActionCreators } from 'redux'
// import { useForm } from 'react-hook-form'

// import { addSmurf } from '../actions/smurfAction'

// function SmurfForm(props) {
//   const { register, handleSubmit } = useForm()
//   // Submit your data into Redux store
//   const onSubmit = data => {
//     console.log('data', data)

//     props.addSmurf(data)
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input name="name" defaultValue={props.name} ref={register} />
//         <input name="age" defaultValue={props.age} ref={register} />
//         <input name="height" defaultValue={props.height} ref={register} />

//         <input type="submit" />
//       </form>
//     </div>
//   )
// }

// // const mapDispatchToProps = dispatch =>
// //   bindActionCreators({ addSmurf }, dispatch)

// //export default connect(mapDispatchToProps)(SmurfForm)
// export default connect(({ name, age, height }) => ({ name, age, height }), {
//   addSmurf,
// })(SmurfForm)

// // Connect your component with redux
// // connect(({ name, age, height }) => ({ name, age, height }), addSmurf)(SmurfForm)

// // import React, {useState} from 'react'
// // import { connect } from 'react-redux'
// // import { addSmurf } from '../actions/smurfAction'
// // import { bindActionCreators } from 'redux'

// // import styled from 'styled-components'

// // const Form = styled.form`
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   margin: 2%;
// // `
// // const Label = styled.label`
// //   padding: 1.5%;
// // `

// // const SmurfForm = props => {
// //     const [newSmurf, setNewSmurf] = useState({
// //       name: '',
// //       age: '',
// //       height: '',
// //       id: '',
// //     })
// //   return (
// //     <div>
// //       <Form onSubmit={addSmurf}>
// //         <Label>
// //           Smurf Name: <input type="text" name="name" value={} />
// //         </Label>
// //         <Label>
// //           Smurf age: <input type="text" name="age" />
// //         </Label>
// //         <Label>
// //           Smurf Height: <input type="text" name="height" />
// //         </Label>

// //         <button type="submit">Add Smurf</button>
// //       </Form>
// //     </div>
// //   )
// // }

// // const mapDispatchToProps = dispatch =>
// //   bindActionCreators({ addSmurf }, dispatch)

// // export default connect(mapDispatchToProps)(SmurfForm)
