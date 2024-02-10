import React, { useState } from 'react'
import foto from './../../img/foto.jpg'
// import dog from './../../img/dog.svg'
import { ReactComponent as Dog } from './../../img/dog.svg'
import './ExImagens.css';
import DogSvg from './DogSvg';

const ExImagens = () => {

	const [eye, setEye] = useState(1);

	function handleClick() {

		for(let i = 0; i < 6; i++) {
			setTimeout(() => {
				setEye(i);
			}, 30 * i);
		}
	}

	return (
		<div>
			<p className='fundo' onClick={handleClick}></p>
			<Dog />
			<DogSvg color="#84e" eye={eye} />
			{/* <img src={dog} alt='Dog' /> */}
			<br />
			<img src={foto} alt='Cachorro' />
		</div>
	)
}

export default ExImagens