import React, { memo } from 'react'

const Header = () => {
    console.log("Renderizou");
    return (
        <div>Apenas um Header estático</div>
    )
}

export default memo(Header)