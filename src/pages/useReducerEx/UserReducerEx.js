import React, { useReducer } from 'react'
import Exemplo from './Exemplo';

function reducer(state, action) {

    switch(action) {
        case 'diminuir':
            return state - 1;
        case 'aumentar':
            return state + 1;
        default:
            throw new Error('Action não existe');
    } 
}

const UserReducerEx = () => {
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <button onClick={() => dispatch('diminuir')}>-</button>
            <button onClick={() => dispatch('aumentar')}>+</button>
            {state}
            <Exemplo />
        </div>
    )
}

export default UserReducerEx