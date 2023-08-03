import React from 'react'

export const Certifications = ({onChange, certificate}) => {
  return (
    <div>
      
    <input value={certificate} type='text' name='certificate' placeholder='Certification name ' onChange={onChange}></input>

    </div>
  )
}
