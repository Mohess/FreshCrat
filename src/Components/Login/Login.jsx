import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Login() {
  



  let user = {
    email:'',
    password:''
  }

  const navigate = useNavigate()

  function validation( values ){
    const error ={}

    if(values.email.includes('@') === false || values.email.includes('.') === false  )
    error.email = 'email is invalied'

    if(values.password.length < 4 || values.password.length > 10) {
      error.password = 'password is invalied'
    }

    return error
  }

 const formObj = useFormik({
    initialValues: user,
    onSubmit:loginUser,
    validate: validation
    
 
 
 
  })
  

 async function loginUser ( values ){

  try {
    const { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin' , values )
    console.log(data)
    setTimeout(function(){

      navigate('/home')

      

    },1000)

    
    
  } catch (error) {
    console.log(error);
  }


  
}


  return <>
  
    <div className="container">
      <div className="p-3" style={{translate:'50'}}>
    <h1>login now</h1>

    <form onSubmit={ formObj.handleSubmit }>
      
      <label htmlFor="email">Email:</label>
      <input id='email' onBlur={formObj.handleBlur} onChange={ formObj.handleChange}  type="email" value={formObj.values.email} className= 'form-control p-2'/>
      { formObj.errors.email && formObj.touched.email ? <div className="alert alert-danger">{ formObj.errors.email}</div>  : '' }

      <label  htmlFor="password">password:</label>
      <input id='password'  onBlur={formObj.handleBlur} onChange={ formObj.handleChange } type="password" value={formObj.values.password} className='form-control p-2 ' />
      { formObj.errors.password && formObj.touched.password ? <div className="alert alert-danger">{ formObj.errors.password}</div>  : '' }
  
  <button className="btn btn-success w-100 mt-3" type='submit'> Login </button>
    </form>
    </div>
    </div>



  </>
}
