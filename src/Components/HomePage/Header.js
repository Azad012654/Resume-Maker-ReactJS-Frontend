import { React, useState, useRef } from 'react'
import './Header.css'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Utills/Firebase'
import { Link } from 'react-router-dom';
import Login from '../LogInPage/Login';
import Homepage from './Homepage';
import { useNavigate } from 'react-router-dom';
// import './Header.scss'
const Header = () => {

  const divStyle = useRef(null);
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [userDropDown, setUserDropDown] = useState(false);
  const [navResp,setnavResp]=useState(false)
  
  const toggleDropDown = () => {
    if (userDropDown === true) {
      setUserDropDown(false);
    } else {
      setUserDropDown(true);
    }
  }

  const logout = () => {
    navigate('/')
    toggleDropDown();
    auth.signOut();

  }

  const displayRespNav = () =>{
    const trans = 'transform: translateX(0%);'
    const Revtrans = 'transform: translateX(100%);'
    divStyle.current.style=trans;
    if (divStyle.current && navResp==false) {
      divStyle.current.style.cssText = trans;
      
      setnavResp(true)
    }
     else {
      divStyle.current.style.cssText = Revtrans;
      setnavResp(false)
    }
  }
  if(loading){
    return (
      <div className='container'>
        <div className='loader'>
    <div className='loader--dot'></div>
    <div className='loader--dot'></div>
    <div className='loader--dot'></div>
    <div className='loader--dot'></div>
    <div className='loader--dot'></div>
    <div className='loader--dot'></div>
    <div className='loader--text'></div>
  </div>
      </div>
    )
  }

  return (
    <div className='main-header'>
      <div className='caption'>
        <Link className='caption' to="/"><h2>My First Resume</h2></Link>
      </div>

      <ul ref={divStyle} className='list-items'>
        
      <div className='settings-resp'>
        { user?  (<>
          <div className='settings-container'>
      <p >Welcome, {user.displayName}</p>
        <img  onClick={toggleDropDown} src={user.photoURL}></img>
          </div>
          <div className='mobile-login-btn'>
          <button onClick={logout}>Log Out</button>
          <button onClick={displayRespNav}><Link style={{color:'black',fontWeight:'bold',textShadow:'none'}} className='login-link' to="/dashboard" >Go to Dashboard</ Link></button>
            {/* {user.accessToken} */}

          </div>
          </>
        ) : (
          <div className='mobile-login-btn'>
            <button onClick={displayRespNav}><Link style={{color:'black',fontWeight:'bold',textShadow:'none',textDecoration:'none',fontFamily:'cursive'}} className='login-link' to="/Login" >LOGIN</ Link></button>
          </div>
        )
        }
        </div>
        <div className='menu-items'>
        <a href='#'>Resume</a>
        <a href='#'>Bio-Data</a>
        <a href='#'>Cover Letter</a>
        </div>
      </ul>
      <div className='settings'>
        {!user ? (
          <div className='buttons'>

            <button><Link style={{textDecoration:'none', fontWeight:'bold', fontSize:'medium',fontFamily:'serif'}} to="/Login" > LOGIN</ Link></button>

          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <p style={{ fontSize: '13px', color: 'white', fontWeight: 'bold' }}>Welcome, {user.displayName}</p>
            <div className='image-container'>
              <img onClick={toggleDropDown} src={user.photoURL}></img>
              {userDropDown && (
                <div className="dropdown-content">
                  <button onClick={logout}>Log Out</button>
                  <button onClick={() => setUserDropDown(!userDropDown)}><Link to="/dashboard" > Dashboard</ Link></button>

                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className='responsive-menu' onClick={displayRespNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>

    </div>

  )
}

export default Header