import { createUserWithEmailAndPassword, sendEmailVerification, updateCurrentUser } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../Firebase/Firebase.init';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [success, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const handleSignUp = (e) => {
        setErrorMessage('')
        setSuccess(false)
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        const checkbox = e.target.checkbox.Checked
        const name=e.target.name.value;
        const photo=e.target.photUrl.value
        if (!checkbox) {
            setErrorMessage('please accepate our terms')
        }
        console.log(email, password)
        if (password.length < 6) {
            setErrorMessage("password should be more then 6 charectar or more")
            return;
        }
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!passwordRegex.test(password)) {
            setErrorMessage("At least 6 characters, at least one letter and one number")
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(user => {
                console.log(user)
                setSuccess(true)
                sendEmailVerification(auth.currentUser)
                    .then('sent email verification messege')
            })
            .catch(error => {
                setErrorMessage(error.message)
                setSuccess(false)
            })
            const profile={
                displayName:name,
                photoUrl:photo
            }
            updateCurrentUser(auth.currentUser,profile)
            .then(()=>console.log("profile update success"))
            .catch(error=>console.log('profile update error'))
    }
    return (
        <div className="card bg-base-100 mx-auto my-2 w-full max-w-sm shrink-0 shadow-2xl border-2">
            <h1 className="text-3xl font-bold ml-4">SignUp Now!</h1>
            <div className="card-body">
                <form onSubmit={handleSignUp} className="fieldset relative">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="User Name" />
                    <label className="label">Photo Url</label>
                    <input type="text" name='photoUrl' className="input" placeholder="Photo Url" />
                    <label className="label">Email</label>
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" required />
                    <label className="label">Password</label>
                    <div>
                        <input type={showPassword ? 'text' : 'password'} name='password' className="input" placeholder="Password" required />
                        <button onBlur={() => setShowPassword(!showPassword)} className='btn btn-xs absolute right-6 top-27'><FaEye /></button>
                    </div>
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <label className="label">
                        <input type="checkbox" name='checkbox' defaultChecked className="checkbox" />
                        Accepate our terms and condition
                    </label>
                    <button className="btn btn-neutral mt-4">SignUp</button>

                </form>
                {
                    errorMessage && <p className='text-red-600'>{errorMessage}</p>
                }
                {
                    success && < p className='text-blue-600'>Successfully SignUp</p>
                }
                <p>Already have Account please <Link to='/login2'>Login</Link> </p>
            </div>
        </div>

    );
};

export default SignUp;