import React, { useMemo, useState } from 'react'

function operacaoLenta() {
    let c;

    for(let i = 0; i < 100000000; i++){
        c = i + i/10;
    }

    return c;
}

const UseMemo1 = () => {
    const [contar, setContar] = useState(0);
    // const valor = useMemo(() => {
    //     const localItem = window.localStorage.getItem('preferido');
    //     console.log("Aconteceu o memo");
    //     return localItem;
    // }, []); 

    // verifica se a operação é lenta ou não
    const t1 = performance.now();

    const valor = useMemo(() => {
        return operacaoLenta();
    }, []);
    
    // operação em js que demora 100 milissegundos é lenta
    console.log(performance.now() - t1);

    return (
        <div>
            <button onClick={() => setContar(contar + 1)}>{contar}</button>
        </div>
    )
}

export default UseMemo1