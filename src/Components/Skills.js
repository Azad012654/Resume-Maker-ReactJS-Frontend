import React from 'react'
import './Skills.css'

const Skills = ({onChange}) => {
  return (
    <div>
        <div className='skills'>
            
        <input type='text' placeholder='Enter Your Skills' name='skills' onChange={onChange}></input>
        </div>

    </div>
  )
}

export default Skills