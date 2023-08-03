import {React, useEffect, useState} from 'react';
import './EducationField.css';

const EducationFields = ({start,end,institute,course,score, onChange }) => {

 
  return (
    <div className="education-fields">
      <div className='dates'>
        <div className='startdates'>
          <p>Start Date</p>
      <input
        type="text"
        placeholder="Start Date(YYYY-MM-DD)"
        onChange={onChange}
        name="start"
        value={start}
        
      />
      </div>
      <div className='startdates'>
        <p>End Date</p>
      <input
        type="text"
        placeholder="End Date(YYYY-MM-DD)"
        onChange={onChange}
        value={end}
        name="end"
      />
      </div>
      </div>
      <div className='education-details'>

    <div style={{flex:0.3, display:'flex', flexDirection:'column'}}>
      <p>Institution Name</p>
      <p>Course</p>
      <p>Score</p>
    </div>
    <div style={{flex:0.7, display:'flex', flexDirection:'column',marginBottom:'4px', justifyContent:'center'}}>
    <input
        type="text"
        placeholder="Enter School/Institution name"
        onChange={onChange}
        name="institute"
        value={institute}
      />
      <input
        type="text"
        placeholder="Course Type E.g - 10th, 12th, B.com, MCA,B.Tech e.t.c"
        onChange={onChange}
        name="course"
        value={course}
      />
      <input
        type="number"
        placeholder="Percentage/gpa"
        onChange={onChange}
        name="score"
        value={score}
      />
    </div>


      </div>
      
    </div>
  );
};

export default EducationFields;
