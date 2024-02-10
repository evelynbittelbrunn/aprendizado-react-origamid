import React, { useState } from 'react'
import Checkbox from './components/Checkbox'

const ComponenteCheckbox = () => {
    const [linguagens, setLinguagens] = useState(['Ruby']);

    console.log(linguagens);
    return (
        <div>
            <Checkbox
                options={['Javascript', 'PHP', 'Java', 'Ruby']}
                value={linguagens}
                setValue={setLinguagens}
            />
        </div>
    )
}

export default ComponenteCheckbox