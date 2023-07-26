import {React, useState} from 'react'
import './Login.css';
import {FcGoogle} from 'react-icons/fc';
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import {auth} from '../../Utills/Firebase';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [user,setUser]=useState();
    const  googleProvider = new GoogleAuthProvider;
    const googleLogin = async()=>{
        try{
            const result = await signInWithPopup(auth, googleProvider).then(()=>navigate('/dashboard'))
            .catch(()=> alert("Login Failed"));
            setUser(result.user);
            console.log(result.user)
            // if(user){
            //     navigate('/dashboard')
            // } else {
            //     alert("Login Failed")
            // }
        }catch(error){
            console.log(error)
        }

        

    }
    console.log()
  return (
    <div className='main-login-container'>
        
        <div className='login-btn'>
            <div>
            <button onClick={googleLogin}><FcGoogle />Sign-In Using Google</button>
            </div>
        </div>
    </div>
  )
}

export default Login