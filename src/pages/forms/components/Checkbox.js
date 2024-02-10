import React from 'react'

const Checkbox = ({options, value, setValue}) => {

    function handleChange({ target }) {
        if (target.checked) {
            setValue(prev => [...prev, target.value]);
        } else {
            setValue(prev => prev.filter(opt => opt !== target.value));
        }
    }

    return (
        <>
            {options.map(item => {
                return (
                    <label key={item}>
                        <input 
                            type="checkbox"
                            value={item}
                            onChange={handleChange}
                            checked={value.includes(item)}
                        />
                        {item}
                    </label>
                )
            })}
        </>
    )
}

export default Checkbox