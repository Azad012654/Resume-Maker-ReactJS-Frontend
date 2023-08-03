import React from 'react'
import './Experience.css'

const Experience = ({ onChange,start,end,description,position,company }) => {
  return (
    <div className="education-fields">


      <div className='date'>
        <div>
          <label>Start Date</label>
          <input
            type="text"
            placeholder="Start Date(YYYY-MM-DD)"
            onChange={onChange}
            name="start"
            value={start}
          />
        </div>
        <div>
          <label>End Date</label>
          <input
            type="text"
            placeholder="End Date(YYYY-MM-DD)"
            onChange={onChange}
            name="end"
            value={end}
          />
        </div>
      </div>
<div  style={{display:'flex',marginTop:'10px'}}>
      <div className='label-container'>
      <label>Company Name</label>
      <label>Position</label>
      <label>Job Description</label>
      </div>
      <div className='input-container'>
      <input
          type="text"
          placeholder="Enter Company Name"
          onChange={onChange}
          name="company"
          value={company}
        />
         <input
          type="text"
          placeholder="Position"
          onChange={onChange}
          name="position"
          value={position}
        />
        <textarea value={description} placeholder='Enter your job description here' name="description" onChange={onChange} rows="4" cols="50"></textarea>

      </div>

      </div>

      
    </div>
  )
}

export default Experience