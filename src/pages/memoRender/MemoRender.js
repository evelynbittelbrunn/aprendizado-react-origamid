import React, { useState } from 'react'
import Header from './Header'

const MemoRender = () => {

    const [contar, setContar] = useState(0);

    return (
        <div>
            {/* Se passar o estado contar para o Header ele volta a ser reativo */}
            <Header />
            <button onClick={() => setContar(contar + 1)}>{contar}</button>
        </div>
    )
}

export default MemoRender