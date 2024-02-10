import { useRef, useState } from 'react';

const UseRef1 = () => {
    const [comentarios, setComentarios] = useState(['teste', 'teste 2']);
	const [input, setInput] = useState('');
	const inputElement = useRef();

	function handleClick() {
		setComentarios([...comentarios, input]);
		setInput('');
		inputElement.current.focus();
	}

	return (
		<div>
			<ul>
				{comentarios.map((item, index) => (<li key={index}>{item}</li>))}
				<input ref={inputElement} type="text" value={input} onChange={event => setInput(event.target.value)} /> 
				<br/>
				<button onClick={handleClick}>Enviar</button>
			</ul>
		</div>
	);
}

export default UseRef1