import { React, useState, useEffect, useMemo } from 'react'
import { useHistory } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Utills/Firebase'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import resumeThumbnail from '../../Assets/resume-thumbnail.png';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import './Dashboard.css';
import { red } from '@mui/material/colors';
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
  const [isLoading, setIsLoading] = useState(true);
  const [idx, setIdx] = useState("");
  const [deleteMessage,SetDelete]=useState(true)
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () =>{ setOpen(false) }

  const handleMouseEnter = (index) => {
    setShowMessage(true);
    setIdx(index);

  };

  const handleMouseLeave = () => {
    setShowMessage(false);
    setIdx("")
  };

  const handleMouseEnterDelete = (index) => {
    setDeleteMessage(true);
    setIdx(index);

  };

  const handleMouseLeaveDelete = () => {
    setDeleteMessage(false);
    setIdx("")
  };
  //---------------------ends---------------------

  //Modal Style 
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 1.5,
    borderRadius:'8px',
  };
  //----------------ends---------------------------

  useMemo(() => {
    setLoggedUser(user.email)
  }, [])
  const fetchEducation = async () => {
    // await fetch(`http://localhost:8080/get-education/${loggedUser}`)
    await fetch(`http://localhost:8080/get-education/${loggedUser}`)
      .then((response) => {
        return response.json();
      }).then((data) => {
        setEducation(data);
      })
  }

  const fetchExperience = async () => {
    await fetch(`http://localhost:8080/get-experience/${loggedUser}`)
      .then((experience_response) => {
        return experience_response.json();
      }).then((data) => {
        setExperience(data);
      })


  }

  const fetchProjects = async () => {
    await fetch(`http://localhost:8080/get-projects/${loggedUser}`)
      .then((project_response) => {
        return project_response.json();
      }).then((data) => {
        setProjects(data);
      })
  }

  const fetchCertificate = async () => {
    await fetch(`http://localhost:8080/get-certificate/${loggedUser}`)
      .then((project_response) => {
        return project_response.json();
      }).then((data) => {
        setCertificate(data);
      })
  }

  const fetchSkills = async () => {
    await fetch(`http://localhost:8080/get-skills/${loggedUser}`)
      .then((project_response) => {
        return project_response.json();
      }).then((data) => {
        setSkills(data);
      })
  }

  const fetchPersonalData = async () => {
    await fetch(`http://localhost:8080/get-personal/${loggedUser}`)
      .then((project_response) => {
        return project_response.json();
      }).then((data) => {
        setPersonalData(data);
      })
  }

  useEffect(() => {
    const getFunc = async () => {
      Promise.all([
        await fetchEducation(),
        await fetchExperience(),
        await fetchProjects(),
        await fetchCertificate(),
        await fetchSkills(),
        await fetchPersonalData(),
      ]).then(() => setIsLoading(false))
    }
    getFunc()
  }, [loggedUser, count]);

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
    
    await fetch(`http://localhost:8080/delete-resume/${resumeId}`, {
      method: 'delete'
    }
    )
    .then((response) => {
      if (response.ok) {
        setCount(1 + 1);
      }

    })
    .then(()=> handleClose())


  }
  console.log(deleteMessage)
  //----------------ends----------------------
  if (isLoading) {
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
            <p>RESUMES  </p>
          </div>
          <div className='resume-container'>
            {
              personalData.length > 0 ? (personalData.map((item, index) => {
                if (item.resumeId) {
                  return (
                    <div className='resume-details' >
                      <div style={{ color: 'whitesmoke', marginBottom: '10px', fontFamily: 'Poppins' }}>{index+1}. {item.resumename}</div>
                      <div onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} key={index} onClick={() => selectResume(item.resumeId)} className='resumes-thumbnail'>
                        {showMessage && idx === index && (
                          <div className="floating-message">
                            Click to Edit
                          </div>
                        )}
                        <div className='image-container-dashboard' style={{ border: '3px solid black', borderRadius: '50%', height: '8rem', width: '8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <img style={{ width: '5rem', height: '5rem', objectFit: 'cover' }} src={resumeThumbnail} alt='image'></img>
                        </div>

                        <div className='resume-date'>Created On : {item.createdAt} </div>

                      </div>
                      <button key={index + 1} onClick={handleOpen} onMouseEnter={() => handleMouseEnterDelete(index)} on onMouseLeave={handleMouseLeaveDelete} className='resume-delete-btn'>
                        <DeleteForeverOutlinedIcon />
                        {DeleteMessage && idx === index && (
                          <div style={{ position: 'absolute', bottom: '-22px', fontSize: 'small', fontWeight: 'bold' }}>DELETE</div>)
                        }
                      </button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        // aria-labelledby="modal-modal-title"
                        // aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>

                          <Typography id="modal-modal-description" sx={{}}>
                            { deleteMessage &&
                              <div className='login-modal' style={{ height: '40vh' }}>
                                <div style={{display:'flex',gap:'5px',fontFamily:'Poppins'}}>Are you sure you you want to delete <div style={{color:'red',textAlign:'center'}}> '{item.resumename}'</div> </div>
                                <div style={{display:'flex',gap:'20px'}}>
                                <Button onClick={() => { SetDelete(false); deleteResume(item.resumeId);}}>Yes</Button>
                                <Button onClick={handleClose}>No</Button>
                                </div>
                                
                              </div>
                              }
                              { !deleteMessage &&  <div style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                                <div>Deleting {item.resumename}</div>
                                <div className="spinner-container">
                      <div className="loading-spinner">
                      </div></div>
                       </div>
                }
                            
                          </Typography>
                        </Box>
                      </Modal>
                    </div>
                  )
                }
              })) : (<div style={{marginTop:'30px', maeginBottom:'30px'}}><div className='resume-thumbnail'>
                <div onClick={() => navigate('/pdf-generator')} className='empty-resume'>
                  <div style={{ fontSize: 'small', fontWeight: 'bolder', marginBottom: '8px' }}>No Resume Saved Yet</div>

                  <AddCircleOutlineOutlinedIcon fontSize='large' />
                  <div style={{ fontSize: 'small', fontWeight: 'bolder', marginBottom: '20px' }}>Click To Create</div>

                </div>

              </div></div>)
            }
          </div>

        </div>
        <div className='coverletter-section'></div>
        <div style={{marginTop:'30px'}} className='resume-header'>COVER LETTERS</div>
        <div className='coverletter-container'>
          <div className='coverletter-items'>
            <div style={{ marginLeft: '22px', marginTop: '15px', fontSize: 'small', fontWeight: 'bolder' }} className='resumes-thumbnail'>
              No Cover Letters Saved
            </div>
          </div>
        </div>

      </div>
    )
}

export default Dashboard