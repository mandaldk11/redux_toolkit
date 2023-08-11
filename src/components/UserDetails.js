import React from 'react'
import DeleteAll from './DeleteAll'
import fakeUserData from '../Api'
import { useDispatch, useSelector } from 'react-redux'
import { addUser,removeUser } from '../Store/Slices/UserSlice'

export default function UserDetails() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.users)

    const addNewUser = (payload) => {
        console.log(payload)
        dispatch(addUser(payload))

    }

    const removeHandler =(payload)=>{
        dispatch(removeUser(payload))
    }
    return (
        <>
            <div className='container mx-2 my-2' style={{ display: "flex", justifyContent: 'space-between' }}>
                <h4 style={{ color: 'green' }}>List of user Details</h4>
                <button className=' btn btn-outline-success btn-sm' onClick={() => addNewUser(fakeUserData())} r >Add new User</button>
            </div>
            <ol>
                {data.map((user, id) => {
                    return (
                        <>
                            <li key={id}>
                                <div  className=' my-2' style={{ display: "flex", justifyContent: 'space-between' }} key={id}>
                                    <h5> {user}</h5>
                                    <button className='btn btn-outline-warning btn-sm' onClick={()=>removeHandler(id)}>Delete</button>
                                </div>
                            </li>

                        </>
                    )
                })}
            </ol>
            <br />
            <hr />
            <DeleteAll />
        </>
    )
}
