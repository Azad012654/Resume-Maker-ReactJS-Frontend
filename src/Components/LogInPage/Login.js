import {React, useState, useEffect} from 'react'
import './Login.css';
import {FcGoogle} from 'react-icons/fc';
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import {auth} from '../../Utills/Firebase';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [user,setUser]=useState([]);
    const  googleProvider = new GoogleAuthProvider;
    useEffect(()=>{
        console.log(user);
    },[user])
    const googleLogin = async()=>{
        try{
            const result = await signInWithPopup(auth, googleProvider).then(()=>navigate('/dashboard'))
            .catch(()=> alert("Login Failed"));
            setUser();
            console.log(result)
            // if(user){
            //     navigate('/dashboard')
            // } else {
            //     alert("Login Failed")
            // }
        }catch(error){
            console.log(error)
        }

        

    }
    console.log(user)
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