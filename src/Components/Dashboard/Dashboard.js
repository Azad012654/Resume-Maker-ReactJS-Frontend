import { React, useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Utills/Firebase'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import resumeThumbnail from '../../Assets/resume-thumbnail.png';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import './Dashboard.css';
const Dashboard = () => {

  const navigate = useNavigate();
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [certificate, setCertificate] = useState([]);
  const [skills, setSkills] = useState([]);
  const [personalData, setPersonalData] = useState([]);
  const [user, loading] = useAuthState(auth);
  const [loggedUser, setLoggedUser] = useState();
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [DeleteMessage, setDeleteMessage] = useState(false);


  const handleMouseEnter = (event) => {
    setShowMessage(true);

  };

  const handleMouseLeave = () => {
    setShowMessage(false);
  };

  const handleMouseEnterDelete = (event) => {
    setDeleteMessage(true);

  };

  const handleMouseLeaveDelete = () => {
    setDeleteMessage(false);
  };






  useEffect(() => {
    setLoggedUser(user.email)
  }, [])

  useEffect(() => {
    try {
      const fetchEducation = async () => {
        await fetch(`https://resume-builder-fatj.onrender.com/get-education/${encodeURIComponent(loggedUser)}`)
          .then((response) => {
            return response.json();
          }).then((data) => {
            setEducation(data);
          })
      }

      const fetchExperience = async () => {
        await fetch(`https://resume-builder-fatj.onrender.com/get-experience/${encodeURIComponent(loggedUser)}`)
          .then((experience_response) => {
            return experience_response.json();
          }).then((data) => {
            setExperience(data);
          })


      }
      console.log(user.email)
      const fetchProjects = async () => {
        await fetch(`https://resume-builder-fatj.onrender.com/get-projects/${encodeURIComponent(loggedUser)}`)
          .then((project_response) => {
            return project_response.json();
          }).then((data) => {
            setProjects(data);
          })
      }

      const fetchCertificate = async () => {
        await fetch(`https://resume-builder-fatj.onrender.com/get-certificate/${encodeURIComponent(loggedUser)}`)
          .then((project_response) => {
            return project_response.json();
          }).then((data) => {
            setCertificate(data);
          })
      }

      const fetchSkills = async () => {
        await fetch('https://resume-builder-fatj.onrender.com/get-skills/')
          .then((project_response) => {
            return project_response.json();
          }).then((data) => {
            setSkills(data);
          })
      }

      const fetchPersonalData = async () => {
        await fetch(`https://resume-builder-fatj.onrender.com/get-personal/${encodeURIComponent(loggedUser)}`)
          .then((project_response) => {
            return project_response.json();
          }).then((data) => {
            setPersonalData(data);
          })
      }
      fetchEducation();
      fetchExperience();
      fetchProjects();
      fetchCertificate();
      fetchSkills();
      fetchPersonalData();
    } catch (error) {
      console.log(error)
    }



  }, [loggedUser]);

  //Select Resume Function Starts

  function selectResume(resumeId) {

    const newEducation = [];
    education.map((item) => {
      if (item.resumeId === resumeId) {
        newEducation.push(item);
      }
    })

    const newExperience = [];
    experience.map((item) => {
      if (item.resumeId === resumeId) {
        newExperience.push(item);
      }
    })

    const newSkill = [];
    skills.map((item) => {
      if (item.resumeId === resumeId) {
        newSkill.push(item);
      }
    })

    const newProjects = [];
    projects.map((item) => {
      if (item.resumeId === resumeId) {
        newProjects.push(item);
      }
    })

    const newCertification = [];
    certificate.map((item) => {
      if (item.resumeId === resumeId) {
        newCertification.push(item);
      }
    })

    const newPersonal = [];
    personalData.map((item) => {
      if (item.resumeId === resumeId) {
        newPersonal.push(item);
      }
    })
    setTimeout(() => {
      navigate(`/pdf-generator/${resumeId}`, {
        state: {
          newEducation,
          newExperience,
          newSkill,
          newProjects,
          newCertification,
          newPersonal,
        },
      });

    }, 1000)

  }

  const deleteResume = async (resumeId) => {

   await fetch(`https://resume-builder-fatj.onrender.com/delete-resume/${encodeURIComponent(resumeId)}`, {
      method: 'delete'
    }).then((response) => {
      if(response.ok){
        window.location.reload();
      }

    })
    setCount(count => count);

  }
  
  //----------------ends----------------------
  if (education.length<0) {
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
  } else
    return (
      <div className='dashboard-container'>
        <div className='resume-section'>
          <div className='resume-header'>
            <p>RESUMES</p>
          </div>
          <div className='resume-container'>
            {
              personalData.length > 0 ? (personalData.map((item, index) => {
                if (item.resumeId) {
                  return (
                    <div className='resume-details' >
                      <div style={{ color: 'whitesmoke', marginBottom: '10px', fontFamily: 'Poppins' }}>Resume {index + 1}</div>
                      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={index} onClick={() => selectResume(item.resumeId)} className='resumes-thumbnail'>
                        {showMessage && (
                          <div className="floating-message">
                            Click to Edit
                          </div>
                        )}
                        <div className='image-container-dashboard' style={{ border: '3px solid black', borderRadius: '50%', height: '8rem', width: '8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <img style={{ width: '5rem', height: '5rem', objectFit: 'cover' }} src={resumeThumbnail} alt='image'></img>
                        </div>

                        <div className='resume-date'>Created On : {item.createdAt} </div>

                      </div>
                      <div onMouseEnter={handleMouseEnterDelete} on onMouseLeave={handleMouseLeaveDelete} className='resume-delete-btn'>
                        <DeleteForeverOutlinedIcon onClick={() => deleteResume(item.resumeId)} />
                        {DeleteMessage && (
                          <div style={{ position: 'absolute', bottom: '-22px',fontSize:'small',fontWeight:'bold' }}>DELETE</div>)
                        }
                      </div>

                    </div>
                  )
                }
              })) : (<div className='resume-thumbnail'>
                  <div onClick={()=> navigate('/pdf-generator') } className='empty-resume'>
                    <div style={{fontSize:'small',fontWeight:'bolder',marginBottom:'8px'}}>No Resume Saved Yet</div>
                  
                  <AddCircleOutlineOutlinedIcon fontSize='large' />
                  <div style={{fontSize:'small',fontWeight:'bolder',marginBottom:'20px'}}>Click To Create</div>

                  </div>
                
              </div>)
            }
          </div>

        </div>
        <div className='coverletter-section'></div>
            <div className='resume-header'>COVER LETTERS</div>
            <div className='coverletter-container'>
            <div className='coverletter-items'>
            <div style={{marginLeft:'22px',marginTop:'15px',fontSize:'small',fontWeight:'bolder'}} className='resumes-thumbnail'>
              No Cover Letters Saved
            </div>
            </div>
            </div>
      </div>
    )
}

export default Dashboard