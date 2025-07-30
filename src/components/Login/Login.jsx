import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../Firebase/Firebase.init';
import { useState } from 'react';

const Login = ()=>{
    const [user,setUser]=useState();
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn=()=>{
      signInWithPopup(auth,provider)
      .then((result)=>{
        console.log('signout sucsess')
       setUser(result.user) 
      })
      .catch((error)=>{
        console.log(error) 
      });
      
    }
    const handleGoogleSignOut=()=>{
        signOut(auth)
        .then(() => {
        setUser(null)  
        })
        .catch((error) => {
            console.log(error)
        });
    }
    return (
        <div>
           {
            user ?  <button onClick={handleGoogleSignOut} style={{"marginRight":'20px'}}>Sign Out</button>
            :
            <button onClick={handleGoogleSignIn} style={{"marginRight":'20px'}}>Log in with google</button>
           }
           {user && <div>
            <h1>{user.displayName}</h1>
            <h2>{user.email}</h2>
            <img src={user.photoURL
} alt="" />
            </div>}
        </div>
    );
};

export default Login;