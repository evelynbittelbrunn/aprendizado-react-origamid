import React, { useState } from 'react'

const Select = () => {
    const [select, setSelect] = useState('');
    return (
        <form>
            <select value={select} onChange={({target}) => setSelect(target.value)} name="produtos" id="produtos">
                <option disabled value="">Selecione</option>
                <option value="notebook">Notebook</option>
                <option value="smartphone">Smartphone</option>
                <option value="tablet">Tablet</option>
            </select>
            {select}
        </form>
    )
}

export default Select