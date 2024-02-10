import React, { useCallback, useState } from 'react'

const set1 = new Set();
const set2 = new Set();

const Produto = () => {

	const func1 = () => {
		console.log("Teste");
	}

	const func2 = useCallback(() => {
		console.log("Teste 2");
	}, []);

	set1.add(func1);
	set2.add(func2);

	console.log("set1", set1);
	console.log("set2", set2);

	return <div>
		<p onClick={func1}>Produto 1</p>
		<p onClick={func2}>Produto 2</p>
	</div>
}

const UseCallback1 = () => {
  	const [contar, setContar] = useState(0);

	// pelo código ser simples, não há diferença em relação à performanse
	const handleClick = useCallback(() => {
		setContar(prevContar => prevContar + 1);
	}, []);

	return (
		<div>
			<Produto />
			<button onClick={() => setContar(contar + 1)}>{contar}</button>
		</div>
	)
}

export default UseCallback1;