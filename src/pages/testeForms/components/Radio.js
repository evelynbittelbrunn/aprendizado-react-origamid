import React from 'react'

const Radio = ({ pergunta, options, id, onChange, value, active }) => {

    if (active === false) return null; 
    return (
        <fieldset>
            <legend>{pergunta}</legend>
            {options.map(item => {
                return (
                    <label key={item}>
                        <input 
                            type="radio"
                            id={id}
                            value={item}
                            checked={value === item}
                            onChange={onChange}
                        />
                        {item}
                    </label>
                )
            })}
        </fieldset>
    )
}

export default Radio