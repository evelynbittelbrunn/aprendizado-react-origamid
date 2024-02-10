import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext';

const Produto = () => {

    const { dados } = useContext(GlobalContext);
    console.log(global);

    if (dados === null) return;
    return (
        <div>
            Produto:
            <ul>
                {dados.map(item => {
                    return (
                        <li key={item.id}>{item.nome}</li>
                    );    
                })}
            </ul>
        </div>
    )
}

export default Produto