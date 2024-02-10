import React, { useState } from 'react'
import Radio from './components/Radio';

const perguntas = [
    {
        pergunta: 'Qual método é utilizado para criar componentes?',
        options: [
            'React.makeComponent()',
            'React.createComponent()',
            'React.createElement()',
        ],
        resposta: 'React.createElement()',
        id: 'p1',
    },
    {
        pergunta: 'Como importamos um componente externo?',
        options: [
            'import Component from "./Component"',
            'require("./Component")',
            'import "./Component"',
        ],
        resposta: 'import Component from "./Component"',
        id: 'p2',
    },
    {
        pergunta: 'Qual hook não é nativo?',
        options: ['useEffect()', 'useFetch()', 'useCallback()'],
        resposta: 'useFetch()',
        id: 'p3',
    },
    {
        pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
        options: ['set', 'get', 'use'],
        resposta: 'use',
        id: 'p4',
    },
  ];
  

const TesteForms = () => {

    const [slide, setSlide] = useState(0);
    const [resultado, setResultado] = useState(null);
    const [respostas, setRespostas] = useState({
        p1: '',
        p2: '',
        p3: '',
        p4: ''
    });

    function handleChange({ target }) {
        setRespostas(prev => ({...prev, [target.id]: target.value}));
    }

    function resultadoFinal() {
        const corretas = perguntas.filter(({id, resposta}) => respostas[id] === resposta);
        if (corretas.length === perguntas.length) {
            setResultado("Parabéns, você acertou todas as perguntas!");
        } else if(corretas.length > 0) {
            setResultado(`Você acertou ${corretas.length} pergunta(s)!`);
        } else {
            setResultado("Que pena, você não obteve nenhum acerto. Tente novamente!");
        }
        console.log(corretas);
    }

    function handleClick() {
        console.log(slide);
        if (slide < perguntas.length - 1) {
            setSlide(prev => prev + 1);
        } else {
            setSlide(prev => prev + 1);
            resultadoFinal();
        }
    }

    return (
        <form onSubmit={(event) => event.preventDefault()}>
            {perguntas.map((pergunta, index) => {
                return (
                    <Radio 
                        active={slide === index}
                        key={pergunta.id} 
                        onChange={handleChange} 
                        value={respostas[pergunta.id]}
                        {...pergunta}
                    />
                )
            })}
            {resultado ? <p>{resultado}</p> : <button onClick={handleClick}>Próximo</button>}
        </form>
    )
}

export default TesteForms