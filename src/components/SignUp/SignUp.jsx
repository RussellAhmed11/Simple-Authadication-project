import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../Firebase/Firebase.init';

const SignUp = () => {
    const [errorMessage,setErrorMessage]=useState('')
    const handleSignUp=(e)=>{
        setErrorMessage('')
     e.preventDefault();
     const email=e.target.email.value
     const password=e.target.password.value
     console.log(email,password)
     createUserWithEmailAndPassword(auth,email,password)
     .then(user=>console.log(user))
     .catch(error=>{
      setErrorMessage(error.message)
     })
    }
    return (
        <div className="card bg-base-100 mx-auto my-2 w-full max-w-sm shrink-0 shadow-2xl border-2">
            <h1 className="text-3xl font-bold ml-4">SignUp Now!</h1>
            <div className="card-body">
                <form onSubmit={handleSignUp} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" required/>
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" required />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">SignUp</button>
                </form>
                {
                    errorMessage&& <p>{errorMessage}</p>
                }
            </div>
        </div>

    );
};

export default SignUp;