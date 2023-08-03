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
          <h1>Create your free plain resume within minutes</h1>
          <h1>Make unlimited resumes for all types of industries.</h1>
          <h1>More designs comming soon.</h1>
          <div class="container">
            <button className='button'><Link className='try-btn' to="/pdf-generator">Start</Link></button>
          </div>
        </div>
        {/* <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="url(#gradient)" fill-opacity="1" d="M0,96L48,101.3C96,107,192,117,288,106.7C384,96,480,64,576,80C672,96,768,160,864,160C960,160,1056,96,1152,74.7C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="rgba(86,100,102,1)" />
              <stop offset="47%" stop-color="rgba(10,12,22,1)" />
              <stop offset="100%" stop-color="rgba(8,122,165,1)" />
            </linearGradient>
          </defs></svg> */}
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