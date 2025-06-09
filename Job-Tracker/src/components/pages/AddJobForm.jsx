import React from 'react'
import "../Styles/Styles.css"

const AddJobForm = () => {
  return (
    <div className='flex justify-center items-center h-[calc(100vh-54px)] bg-gradient-to-br from-[#00feba] to-[#5b548a]'>
      <form className='text-black h-100 w-100 rounded-2xl flex flex-col justify-center bg-[#DBFCE7] m-4'>
        <p className='flex items-center justify-center text-4xl font-bold text-[#2c3e50] mb-6'>
  Jobs Applied for!
</p>
          <input type="text" placeholder='Company'/>
          <input type="text" placeholder='Status'/>
          <input type="text" placeholder='Applied for'/>
          <div className='flex justify-center'>
            <button className='btn'>Add</button>
          </div>
      </form>
    </div>
  )
}

export default AddJobForm
