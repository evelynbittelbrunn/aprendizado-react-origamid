import React, { Suspense, lazy, useState } from 'react'
const Contato = lazy(() => import('./Contato'))

const LazySuspense = () => {
    const [ativo, setAtivo] = useState(false);
    // Ao clicar no botão, acompanhar pela aba de Network > All 
    return (
        <div>
            {ativo &&
            <Suspense fallback={<div>Carregando</div>} >
                <Contato />
            </Suspense>}
            <button onClick={() => setAtivo(true)}>Ativar</button>
        </div>
    )
}

export default LazySuspense