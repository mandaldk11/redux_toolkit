import { createSlice } from '@reduxjs/toolkit'
// import { deleteAllUserAction } from '../../Actions'
const UserSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
        },
        removeUser(state, action) {
            state.splice(action.payload, 1)
        },
        deleteUser(state, action) {
            state.splice(0, state.length)

            //  or  return [] both will work
        },


        // using different actions--

        // extraReducer(builder) {
        //     builder.addCase(deleteAllUserAction, () => {
        //         return []
        //     })
        // }

    }

})

// to use another slice reducer in another slice we use extraa reducer
// eg-    extraReducer(builder){
//     builder.addCase(UserSlice.actions.deleteUser,(state,payload)=>{
//         return []
//     })
// }

// console.log('..', UserSlice.actions)

export default UserSlice.reducer
export const { addUser, removeUser, deleteUser } = UserSlice.actions