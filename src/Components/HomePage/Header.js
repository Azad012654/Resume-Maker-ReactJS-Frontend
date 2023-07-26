import {React, useState} from 'react'
import './Header.css'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../../Utills/Firebase'
import {Link} from 'react-router-dom';
import Login from '../LogInPage/Login';
import Homepage from './Homepage';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  const [user, loading]=useAuthState(auth);
  const [userDropDown,setUserDropDown]=useState(false);

  const toggleDropDown = ()=>{
    if(userDropDown===true){
      setUserDropDown(false);
    } else{
      setUserDropDown(true);
    }
  }

  const logout = ()=>{
    navigate('/')
    toggleDropDown();
    auth.signOut();
    
  }

  return (
    <div className='main-header'>
      <div className='caption'>
        <Link className='caption' to="/"><h2>My First Resume</h2></Link>
      </div>
      
        <ul className='list-items'>
          <a href='#'>Resume</a>
          <a href='#'>Bio-Data</a>
          <a href='#'>Cover Letter</a>
        </ul>
        <div className='settings'>
        { !user ? (
        <div className='buttons'>
       
          <button><Link to="/Login" > Login</ Link></button>
          
         
        </div>
        ) :(
        <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
          <p style={{fontSize:'13px',color:'white',fontWeight:'bold'}}>Welcome, {user.displayName}</p>
          <div className='image-container'>
        <img onClick={toggleDropDown} src={user.photoURL}></img>
        { userDropDown &&  (
            <div className="dropdown-content">
              <button onClick={logout}>Log Out</button>
              <button onClick={()=> setUserDropDown(!userDropDown)}><Link to="/dashboard" > Dashboard</ Link></button>
          
        </div>
        )}
        </div>
        </div>
      )}
        </div>
        
      </div>
    
  )
}

export default Header