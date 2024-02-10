import React, { useState } from 'react'
import Produto from './components/Produto'

const ProdutoAnimation = () => {
    const [ativar, setAtivar] = useState(false);
    return (
        <div>
            <button onClick={() => setAtivar(!ativar)}>Ativar</button>
            {ativar && <Produto />}
        </div>
    )
}

export default ProdutoAnimation