import React, { useReducer, useState } from 'react'
import { FormReducer, INITIAL_STATE } from '../contexts/FormReducer'

function LoginPage() {
   const [isSigned, setIsSigned] = useState(true)
   const [state, dispatch] = useReducer(FormReducer, INITIAL_STATE)

   const handleChange = (e, text) => {
      e.preventDefault();
      text === "login"
         ? dispatch({ type: "CHANGE_INPUT", payload: { username: e.target[0].value, password: e.target[1].value, email: '' } })
         : dispatch({ type: "CHANGE_INPUT", payload: { username: e.target[1].value, password: e.target[2].value, email: e.target[0].value } })
   }

   return (
      <div className='rounded-lg border absolute left-1/3 top-1/4 z-50' onClick={e => e.stopPropagation()}>
         <div className="form-modal">
            <div className=' shadow-lg h-auto bg-white rounded-lg  flex flex-col  items-center'>
               <div className="form-toggle flex items-center">
                  <button id="login-toggle" className={isSigned ? "text-orange-500 btn" : "btn"} onClick={() => setIsSigned(true)}>log in</button>
                  <button id="signup-toggle" className={isSigned ? "btn" : "text-orange-500 btn"} onClick={() => setIsSigned(false)}>sign up</button>
               </div>
               {isSigned ? (
                  <div>
                     <form onSubmit={(e) => handleChange(e, "login")} id="login-form" className='form'>
                        <input className='formInput' type="text" placeholder="Enter email or username" name='email' />
                        <input className='formInput' type="password" placeholder="Enter password" name='password' />
                        <button type="submit" className="login mt-10">login</button>
                     </form>
                  </div>
               ) : (
                  <div>
                     <form onSubmit={(e) => handleChange(e, "signup")} id="signup-form" className='form'>
                        <input className='formInput' type="email" placeholder="Enter your email" name='email' />
                        <input className='formInput' type="text" placeholder="Choose username" name='username' />
                        <input className='formInput' type="password" placeholder="Create password" name='password' />
                        <button type="submit" className="login">create account</button>
                        <hr />
                        <p className='my-2'>Clicking <strong>create account</strong> means that you are agree to our <a href="javascript:void(0)">terms of services</a>.</p>
                     </form>
                  </div>
               )}
            </div>
         </div>
      </div>
   )
}

export default LoginPage