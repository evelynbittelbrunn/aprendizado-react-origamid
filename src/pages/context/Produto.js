import React, { useContext } from 'react'
import UserContext from './UserContext';
import { GlobalContext } from './GlobalContext';

const Produto = () => {

    const global = useContext(GlobalContext);

    function handleClick() {
        global.setContar(prevContar => prevContar + 1);
    }


    // console.log(dados);
    return (
        <div>Produto: {global.contar}
            <button onClick={() => global.adicionarUm()}>Add 1</button>
            <button onClick={() => global.adicionarDois()}>Add 2</button>
        </div>
    )
}

export default Produto