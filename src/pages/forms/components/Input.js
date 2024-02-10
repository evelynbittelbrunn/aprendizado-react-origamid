import React from 'react'

const Input = ({ label, id, value, setValue, ...props }) => {
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input 
            id={id} 
            name={id} 
            value={value} 
            // onChange={({target}) => setValue(target.value)} 
            {...props}
        />
    </div>
  )
}

export default Input