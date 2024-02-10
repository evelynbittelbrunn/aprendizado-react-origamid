import React from 'react'
import useForm from './Hooks/useForm';
import Input2 from './components/Input2';

const CallNewHook = () => {

    const cep = useForm('cep');
    const email = useForm('email');
    const nome = useForm();
    const sobrenome = useForm(false);

    function handleSubmit(event) {
        event.preventDefault();
        if (cep.validate() && email.validate() && nome.validate()) {
            console.log("Enviou");
        } else {
            console.log("Não enviar");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <Input2
                label="CEP"
                id="cep"
                placeholder="00000-000"
                type="text"
                {...cep}
            />
            <Input2
                label="E-mail"
                id="email"
                type="email"
                {...email}
            />
            <Input2
                label="Nome"
                id="nome"
                type="text"
                {...nome}
            />
            <Input2
                label="Sobrenome"
                id="sobrenome"
                type="text"
                {...sobrenome}
            />
            <button>Enviar</button>
        </form>
    )
}

export default CallNewHook