import React, { useState } from 'react'
import Input from './components/Input'

const Validacoes = () => {
    const [cep, setCep] = useState('');
    const [error, setError] = useState(null);

    function validateCep(value) {
        if (value.length === 0) {
            setError('Preencha um valor');
            return false;
        } else if(!/^\d{5}-?\d{3}$/.test(value)) {
            setError('Preencha um CEP válido');
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    function handleBlur({target}) {
        validateCep(target.value);
    }

    function handleChange({ target }) {
        if (error) validateCep(target.value);
        setCep(target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (validateCep(cep)) {
            console.log("Enviou");
        } else {
            console.log("Não enviar");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="CEP"
                value={cep}
                onChange={handleChange}
                id="cep"
                placeholder="0000-00"
                onBlur={handleBlur}
            />
            {error && <p>{error}</p>}
            <button>Enviar</button>
        </form>
    )
}

export default Validacoes