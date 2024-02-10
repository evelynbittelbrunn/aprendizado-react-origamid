import React, { useRef, useState } from 'react'

export const UseRef2 = () => {
    const [carrinho, setCarrinho] = useState(0);
    const [notificacao, setNotificacao] = useState(null);
    const timeoutRef = useRef();

    function handleClick() {
        setCarrinho(carrinho + 1);
        setNotificacao('Item add ao carrinho!');
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setNotificacao(null);
        }, 2000);

        console.log(timeoutRef.current);
    }

    return (
        <div>
            <p>{notificacao}</p>
            <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
        </div>
    )
}
