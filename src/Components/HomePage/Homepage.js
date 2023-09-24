import React from 'react'
import Header from './Header'
import './Homepage.css'
import './Homepage.scss'
import { Link } from 'react-router-dom'
import PDFGenerator from '../PDFGenerator'

const Homepage = () => {
  return (
    <div className='home-page-container'>

      <div className='content'>

        {/* <div className='image1'></div> */}
        <div className='home-desc'>
          <div style={{width:'65%', marginLeft:'30px'}}>
          <h1 style={{fontSize:'30px', fontFamily:'Poppins'}}>Unlock your professional potential with our free classic resume maker.</h1>
          <h1 style={{fontSize:'28px',fontFamily:'Poppins', marginTop:'10px'}}>Create unlimited resumes for all industries.</h1>
          
          </div>
          
          <div class="container">
            <p style={{fontSize:'24px', marginTop:'25px', fontFamily:'cursive',fontWeight:'bold',color:'black'}}>Build your free resume within few minutes !</p>
            <p style={{fontSize:'24px', fontFamily:'cursive',fontWeight:'bold',color:'black'}}>Click below to try !</p>
            <button className='button'><Link className='try-btn' to="/pdf-generator">Start</Link></button>
          </div>
        </div>
        <div className='resume-image-container'></div>
        <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="url(#gradient)" fillOpacity="1" d="M0,288L80,256C160,224,320,160,480,160C640,160,800,224,960,218.7C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(86,100,102,1)" />
              <stop offset="47%" stopColor="rgba(10,12,22,1)" />
              <stop offset="100%" stopColor="rgba(8,122,165,1)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div>
      </div>
    </div>
  )
}

export default Homepage