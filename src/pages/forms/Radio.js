import React, { useState } from 'react'

const Radio = () => {
    const [produto, setProduto] = useState('');
    const [cor, setCor] = useState('');

    function handleChange({target}) {
        setProduto(target.value);
    }

    return (
        <div>
            <div>
                <h2>Com radio group (definido pelo name)</h2>
                <form>
                    <label>
                        <input type="radio" onChange={handleChange} name="produto" value="smartphone" />
                        Smartphone
                    </label>
                    <label>
                        <input type="radio" onChange={handleChange} name="produto" value="notebook" />
                        Notebook
                    </label>
                    
                </form>
                {produto}
            </div>
            <div>
                <h2>Sem radio group</h2>
                <form>
                    <label>
                        <input type="radio" onChange={({target}) => setCor(target.value)} checked={cor === 'rosa'} value="rosa" />
                        Rosa
                    </label>
                    <label>
                        <input type="radio" onChange={({target}) => setCor(target.value)} checked={cor === 'roxo'} value="roxo" />
                        Roxo
                    </label>
                    
                </form>
                {cor}
            </div>
        </div>
    )
}

export default Radio