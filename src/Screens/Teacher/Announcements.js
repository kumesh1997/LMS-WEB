import React from 'react'
import { BorderedButton } from '../../Components/BorderedButton/BorderedButton'
import ModalCloseButton from '../../Components/ModalCloseButton'
import { useFormik } from 'formik'
import * as yup from 'yup'

function Announcements({closeModel})  {
 
  // const [studentEmail, setStudentEmail]=useState('')
  // const [subject, setSubject]=useState('')
  // const [body, setBody] = useState('dfdsgd')
  
  const formik = useFormik({
    initialValues: {
      studentEmail: 'abc@gmail.com',
      subject: 'hi',
      body:'hellloww'
    },
    validationSchema: yup.object({

      studentEmail: yup.string()
      .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,"Invalid email!")
      .required('Required!'),
      
      subject: yup.string()
      .max(100,'Subject is too large!')
      .min(1,'Subject is too short!')
      .required('Required!'),
      
      body: yup.string()
      .max(700,'Body is too large!')
      .min(1,'Body is too short!')
      .required('Required!'),
      
    }),
    onSubmit: values => {
      const StudentEmail = values.studentEmail;
      const Subject = values.subject;
      const Body = values.body;
      const Email = { toEmail:StudentEmail, subject:Subject, body:Body }
      fetch('localhost:3006/teacher/send-email', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Email)
      })
      .then(()=>{
        alert('added')
      }).catch((error) => 
      alert(error))
    }
  }) 
  
  return (
    <div className='shadow-md xl:p-5 lg:p-5 sm:p-0 w-full h-auto bottom-0 left-0 right-0 top-0 bg-slate-800 bg-opacity-80 z-50 overflow-auto touch-auto fixed duration-1000 ease-in-out'>
      {/* <div className='w-full h-auto align-middle bg-white p-2 rounded-lg'>
          <div className=' flex justify-end'> <ModalCloseButton ClickHandler={closeModel}/></div> */}
           {/* Student Register header */}
          <div className=' text-center bg-lms-green p-2 text-white'>
              <h4>Announcements</h4>
          </div>

       {/* Form */}
          <div className=' shadow-lg flex justify-center m-6 xl:p-4 lg:p-4 sm:p-0 xl:bg-lms-white lg:bg-lms-white sm:bg-transparent'>
            <form id='form' onSubmit={formik.handleSubmit} noValidate>
              <div >
                <input
                    type="text"
                    placeholder='Student Email'
                    className=' p-2 w-full'
                    value={ formik.values.studentEmail}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                <div>
                  {formik.touched.studentEmail && formik.errors.studentEmail ? (
                    <div className='red'>
                      {formik.errors.studentEmail}
                    </div>
                  ):null}
                </div>
                <input
                    type="text"
                    placeholder='Email Subject'
                    className=' p-2 w-full'
                    value={formik.values.subject}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                <input
                    type="text"
                    placeholder='Email Body'
                    className=' p-2 w-full' 
                    value={formik.values.body}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                <BorderedButton children={'Submit'} Type={'type' } />
              </div>
            </form>
          </div>
      </div>
    // </div>
  )
}

export default Announcements