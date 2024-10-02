import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../Firebase/Firebase.config';

const Register = () => {

  const [registerError,setRegisterError] = useState('')

    const handleRegister = e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
        
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const userRegister = result.user
            console.log(userRegister)
        })
        .catch((error) => {
          console.log(error)
          setRegisterError(error.message)

          })
          setRegisterError('')
    }

    return (
   
        <div>
         <form onSubmit={handleRegister} className="card-body">
             
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Email</span>
               </label>
               <input
                 type="email"
                 name="email"
                 placeholder="email"
                 className="input input-bordered"
                 required
               />
             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text">Password</span>
               </label>
               <input
                 type="password"
                 name="password"
                 placeholder="password"
                 className="input input-bordered"
                 required
               />
     
             </div>
             <div className="form-control mt-6">
               <button className="btn btn-primary">Register</button>
             </div>
           </form> 
           {
            registerError && <p className='text-red-600'> {registerError}</p>
           }       
        </div>
    );
};

export default Register;