import React, { useState } from 'react'
import Input from './components/Input'

const ComponenteInput = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    return (
        <form>
            <Input 
                label="Nome"
                id="nome"
                value={nome}
                setValue={setNome}
                required
            />
            <Input 
                label="E-mail"
                id="email"
                value={email}
                setValue={setEmail}
            />
            <button>Enviar</button>
        </form>
    );
}

export default ComponenteInput