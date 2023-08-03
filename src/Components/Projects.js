import React from 'react'
import './Projects.css'

const Projects = ({onChange, projectName,projectDescription}) => {
  return (
    <div style={{margin:'20px', display:'flex', flexDirection:'column', gap:'20px'}}>
      <div>
        <label>Project Name </label>
    <input value={projectName} type='text' name='project_name' placeholder='Project Name' onChange={onChange}></input>
      </div>
      <div style={{display:'flex'}}>
    <label>Description</label>
    <textarea  value={projectDescription} className='project_description'  name='project_description' placeholder='Project Description' onChange={onChange}></textarea>
      </div>

    </div>
  )
}

export default Projects