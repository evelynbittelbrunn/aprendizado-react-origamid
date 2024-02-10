import React, { useState } from 'react'

const Input2 = () => {
    const [response, setResponse] = useState(null);
    const [form, setForm] = useState({
        nome: '',
        senha: '', 
        email: '',
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: ''
    });

    function handleChange({ target }) {
        const {id, value} = target;
        setForm({...form, [id]: value})
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch('https://ranekapi.origamid.dev/json/api/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        }).then(response => {
            setResponse(response);    
        }
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(form).map(item => {
                return (
                    <div key={item}>
                        <label htmlFor='item'>{item}</label>
                        <input 
                            type={item === 'email' ? 'email' : item === 'senha' ? 'password' : 'text'}
                            id={item}
                            name={item}
                            value={form[item]}
                            onChange={handleChange}
                        />
                    </div>
                )
            })}
            {response && response.ok && <p>Formulário Enviado</p>}
            <button>Enviar</button>
        </form>
    )
}

export default Input2