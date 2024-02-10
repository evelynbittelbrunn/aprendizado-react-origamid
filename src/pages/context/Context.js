import React from 'react'
import UserContext from './UserContext';
import Produto from './Produto';
import { GlobalStorage } from './GlobalContext';

const Context = () => {
    return (
        // <UserContext.Provider value={{ nome: "Evelyn" }}>
        //     <Produto />
        // </UserContext.Provider>
        <GlobalStorage >
            <Produto />
        </GlobalStorage >
    )
}

export default Context