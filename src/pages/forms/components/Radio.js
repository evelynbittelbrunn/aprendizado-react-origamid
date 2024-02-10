import React from 'react'

const Radio = ({options, value, setValue}) => {
  return (
    <div>
        {options.map(option => {
            return (
                <label key={option}>
                    <input 
                        type="radio" 
                        value={option} 
                        checked={value === option} 
                        onChange={({target}) => setValue(target.value)}
                    />
                    {option}
                </label>
            )
        })}
    </div>
  )
}

export default Radio