import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import auth from '../../Firebase/Firebase.init';
import { Link } from 'react-router-dom';

const Login2 = () => {
const [success,setSuccess]=useState(false)
const [loginError,setloghinError]=useState('')
const emailRef=useRef()
const handleLogIn=(e)=> {
    e.preventDefault();
    setSuccess(false)
    setloghinError('')
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email,password)
    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{console.log(result.user)
        
        if(result.user.emailVerified){
            setloghinError('Plese verfied your email first')
        }
        else{
           setSuccess(true)
        }
    })
    .catch(error=>setloghinError(error.message))
}
const handleForgetPassword=()=>{
const email=emailRef.current.value;
if(!email){
    console.log('please provide vaild email address')
}
else{
sendPasswordResetEmail(auth,email)
 .then(()=>{
    alert('Password reset link send to your email adress')
 })
 
}
}
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogIn} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="User Name" />
          <label className="label">Photo Url</label>
          <input type="text" name='photoUrl' className="input" placeholder="Photo Url" />
          <label className="label">Email</label>
          <input type="email" ref={emailRef} name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div onClick={handleForgetPassword}><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
      {
        success && <p>user log in success</p> 
      }
      {
        loginError && <p>{loginError}</p>
      }
      <p>New to this website please <Link to='/signUp'>SignUp</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login2;