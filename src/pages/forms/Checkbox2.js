import React, { useState } from 'react'

const Checkbox2 = () => {
    const [cores, setCores] = useState(['vermelho']);

    function handleChange({target}) {
        if (target.checked) {
            setCores([...cores, target.value]);
        } else {
            setCores(cores.filter(cor => cor !== target.value));
        }
    }

    console.log(cores);

    function checkColors(cor) {
        return cores.includes(cor);
    }

    return (
        <form>
            <label>
                <input 
                    type="checkbox"
                    value="azul"
                    checked={checkColors('azul')}
                    onChange={handleChange}
                />
                Azul
            </label>
            <label>
                <input 
                    type="checkbox"
                    value="vermelho"
                    checked={checkColors('vermelho')}
                    onChange={handleChange}
                />
                Vermelho
            </label>
        </form>
    )
}

export default Checkbox2