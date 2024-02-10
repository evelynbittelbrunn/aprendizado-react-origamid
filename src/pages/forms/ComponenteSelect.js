import React, { useState } from 'react'
import Select from './components/Select'

const ComponenteSelect = () => {
    const [produto, setProduto] = useState('');

    console.log(produto);

    return (
        <div>
            <Select options={['Smartphone', 'Tablet']} value={produto} setValue={setProduto} />
        </div>
    )
}

export default ComponenteSelect