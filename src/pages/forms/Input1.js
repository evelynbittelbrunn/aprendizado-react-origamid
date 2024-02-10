import React, { useState } from 'react'

const Input1 = () => {
    // const [nome, setNome] = useState("");
    // const [email, setEmail] = useState("");
    const [form, setForm] = useState({
        nome: '',
        email: ''
    });

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event);
    }

    function handleChange( {target} ) {
        const {id, value} = target;
        console.log(id, value);
        setForm({...form, [id]: value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome</label>
            <input 
                id="nome"
                type='text'
                value={form.nome}
                name="name"
                onChange={handleChange}
            />
            {form.nome}
            <label htmlFor="email">E-mail</label>
            <input 
                id="email"
                type='text'
                value={form.email}
                name="email"
                onChange={handleChange}
            />
            {form.email}
            <button>Enviar</button>
        </form>
    )
}

export default Input1