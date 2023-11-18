import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
// import { Hourglass } from 'react-loader-spinner'
import {useNavigate} from 'react-router-dom'

export default function Register() {

let user ={
    name:  "",
    email: "",
    password:"",
    rePassword:"",
    phone:""
}

const navigate = useNavigate()


const [errMsg , setErrMsg] = useState(null);
const [successMsg , setsuccessMsg] = useState(null)
// const [IsLoading , setIsLoading] = useState(flase)

 async function registerNewUser( values ){

  // setIsLoading(true)
      try{
         const { data } = await axios.post( 'https://ecommerce.routemisr.com/api/v1/auth/signup' , values )
        

         if( data.message === 'success'){
            setsuccessMsg('Account Has Created Successfully')
            setTimeout( function(){
              navigate('/login')
            },1000)
         }
      }
  
   catch( error ){
    console.log('error occurred');
   
    setErrMsg(error.response.data.message)
   }
 
 
}
const formikObj = useFormik({
  initialValues: user,
  onSubmit: registerNewUser,

  validate: function(values){
    setErrMsg(null)
    const errors = {};
    
    if( values.name.length < 4 ) {
      errors.name = ' Name must be at least 4 '
    }
    if ( values.email.includes('@') === false || values.email.includes('.') === false ){
      errors.email = ' Email is InValied'
    }

    if ( ! values.phone.match( /^01[0125][0-9]{8}$/ ) ){
      errors.phone = 'Phone is InValied'
    }
    if( values.password.length > 6 && values.password.length > 12) {
      errors.password = ' password is invalied '
    }
    if ( values.rePassword !== values.password) {
      errors.rePassword = ' repassword is not matched '
    }
    console.log(errors);
    return errors ; 
  }

})


  return <>
  
  <div className="container">
    { errMsg ? <div className="alert alert-danger"> {errMsg}</div> : ''}
    { successMsg ? <div className="alert alert-success"> {successMsg} </div> : ''}
      <div className="w-75 m-auto p-3 ">
    <h1>register now</h1>
    <form onSubmit={formikObj.handleSubmit} >

      <label htmlFor="name">Name:</label>
      <input onBlur={formikObj.handleBlur }  onChange={ formikObj.handleChange } value={ formikObj.values.name } id='name' type="text" className= 'form-control mb-3'/>
      { formikObj.errors.name && formikObj.touched.name ?  <div className="alert alert-danger">{ formikObj.errors.name}</div> : '' }
     

      <label htmlFor="email">Email:</label>
      <input onBlur={formikObj.handleBlur }  onChange={ formikObj.handleChange } value={ formikObj.values.email } id='email' type="email" className= 'form-control mb-3'/>
      { formikObj.errors.email && formikObj.touched.email ? <div className="alert alert-danger">{ formikObj.errors.email}</div>  : '' }
      

      <label  htmlFor="password">password:</label>
      <input onBlur={formikObj.handleBlur } onChange={ formikObj.handleChange } value={ formikObj.values.password } id='password' type="password" className='form-control mb-3 ' />
      { formikObj.errors.password && formikObj.touched.password ?  <div className="alert alert-danger">{ formikObj.errors.password}</div> : '' }


      <label  htmlFor="rePassword">RePassword:</label>
      <input onBlur={formikObj.handleBlur } onChange={ formikObj.handleChange } value={ formikObj.values.rePassword } id='rePassword' type="password" className='form-control mb-3 ' />
      { formikObj.errors.rePassword && formikObj.touched.rePassword  ? <div className="alert alert-danger">{ formikObj.errors.rePassword}</div> : ''}
       



      <label htmlFor="phone">Phone:</label>
      <input onBlur={formikObj.handleBlur } onChange={ formikObj.handleChange } value={ formikObj.values.phone } id='phone' type="tel" className='form-control mb-3 ' />
      { formikObj.errors.phone && formikObj.touched.phone ?  <div className="alert alert-danger">{ formikObj.errors.phone }</div> : ''}
      
      <button disabled={ !formikObj.isValid } type='submit' className='btn w-100 mt-3' style={{backgroundColor:'#4fa74f'}}>
        Register Now 
        
        
        {/* <Hourglass
              visible={true}
              height="40"
              width="40"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={['#306cce', '#72a1ed']}
            /> */}
        </button>
   
    </form>
    </div>
    </div>
    
  
  
  </>

}