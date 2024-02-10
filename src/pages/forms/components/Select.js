import React from 'react'

const Select = ({ options, value, setValue }) => {
  return (
    <select value={value} onChange={({target}) => setValue(target.value)}>
        <option value="" disabled>Selecione</option>
        {options.map(item => {
            return (
                <option key={item} value={item}>{item}</option>
            )
        })}
    </select>
  )
}

export default Select