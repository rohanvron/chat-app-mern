import React from 'react'

const Gender = () => {
  return (
    <div className='flex mt-2'>
        <div className='form-control mr-3'>
        <label className={"label gap-2 cursor-pointer"}>
            <span className='label-text'>Male</span>
            <input type='checkbox' className='checkbox border-cyan-500'></input>
        </label>
        </div>

        <div className='form-control'>
        <label className={"label gap-2 cursor-pointer"}>
            <span className='label-text'>Female</span>
            <input type='checkbox' className='checkbox border-cyan-500'></input>
        </label>
        </div>
      
    </div>
  )
}

export default Gender
