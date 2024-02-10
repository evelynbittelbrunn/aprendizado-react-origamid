import React from 'react'

const Input2 = ({ 
    id,
    label,
    value,
    type,
    onChange,
    error,
    onBlur,
    placeholder,
}) => {
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input
            type={type}
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
        />
        {error && <p>{error}</p>}
    </div>
  )
}

export default Input2