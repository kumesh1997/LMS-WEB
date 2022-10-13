import React from 'react'
import { BorderedButton } from '../../Components/BorderedButton/BorderedButton'
import ModalCloseButton from '../../Components/ModalCloseButton'

function Enroll({course = "Course Name", closeModel}) {
 
  
  return (
    <div className='shadow-md xl:p-5 lg:p-5 sm:p-0 w-full h-auto bottom-0 left-0 right-0 top-0 bg-slate-800 bg-opacity-80 z-50 overflow-auto touch-auto fixed duration-1000 ease-in-out'>
      <div className='w-full h-auto align-middle bg-white p-2 rounded-lg'>
          <div className=' flex justify-end'> <ModalCloseButton ClickHandler={closeModel}/></div>
           {/* Enroll page header */}
          <div className=' text-center bg-lms-green p-2 text-white'>
              <h4>Enroll to {course}</h4>
          </div>

       {/* Enroll page Body */}
          <div className=' shadow-lg flex justify-center m-6 xl:p-4 lg:p-4 sm:p-0 xl:bg-lms-white lg:bg-lms-white sm:bg-transparent'>
            <form id='form' onSubmit={""}>
              <div className=' flex'>
                  <input type={'text'} placeholder='Enroll ID' className=' p-2 w-full' />
                  <BorderedButton children={'Enroll'} clickHandler={""}/>
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Enroll