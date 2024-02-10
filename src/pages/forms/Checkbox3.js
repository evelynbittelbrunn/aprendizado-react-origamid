import React, { useState } from 'react'

const Checkbox3 = () => {
    // Otimize o código do slide anterior
    // Utilizando a array abaixo para mostrar
    // cada checkbox na tela.
    const [checked, setChecked] = useState(['verde']);
    const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

    function handleChange({target}) {
        if (target.checked) {
            setChecked(prev => [...prev, target.value]);
        } else {
            setChecked(prev => prev.filter(cor => cor != target.value));
        }
    }

    console.log(checked);

    function checkColors(cor) {
        return checked.includes(cor);
    }

    return (
        <form>
            {coresArray.map(item => {
                return (
                    <label key={item} style={{ textTransform: "capitalize" }}>
                        <input 
                            type="checkbox"
                            value={item}
                            checked={checkColors(item)}
                            onChange={handleChange}
                        />
                        {/* {item[0].toUpperCase() + item.slice(1)} */}
                        {item}
                    </label>
                )
            })}
        </form>
    )
}

export default Checkbox3