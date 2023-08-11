import React from 'react'
import { deleteUser } from '../Store/Slices/UserSlice'
// import { deleteAllUserAction } from '../Actions'
import { useDispatch } from 'react-redux'
export default function DeleteAll() {
  const dispatch = useDispatch()
  const deleteAllHandler = () => {
    dispatch(deleteUser())
    // dispatch(deleteAllUserAction())
  }
  return (
    <div>
      <button className='mx-2 btn btn-danger btn-sm' onClick={deleteAllHandler}>
        DeleteAll
      </button>
    </div>
  )
}
