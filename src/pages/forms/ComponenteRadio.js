import React, { useState } from 'react'
import Radio from './components/Radio'

const ComponenteRadio = () => {
    const [cor, setCor] = useState('Azul');
    console.log(cor);
    return (
        <form>
            <Radio options={["Azul", "Vermelho"]} value={cor} setValue={setCor} />
        </form>
    )
}

export default ComponenteRadio