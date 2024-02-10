import React from 'react'
import { GlobalStorage } from './GlobalContext'
import Produto from './Produto'
import Limpar from './Limpar'

export const ContextExercicio = () => {
    return (
        <GlobalStorage >
            <Produto />
            <Limpar />
        </GlobalStorage >
    )
}
