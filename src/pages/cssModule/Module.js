import React, { useState } from 'react'
import './CssModule.css'
import Title from './components/Title'
import styled from 'styled-components'

const ProdutosContainer = styled.div`
	display: flex;
`;

const Produto = styled.div`
	flex: 1;
`;

const Titulo = styled.h1`
	font-size: 2rem;
	color: black;
`;

const Paragrafo = styled.p`
	color: white;
	background: hsl(${Math.random() * 360}, 100%, 50%);
`;

const Preco = styled.p`
	background: ${({cor}) => cor};
	color: white;
`;

const Comprar = styled.button`
	background: ${({ativo}) => ativo ? 'black' : 'white'};
	font-size: 1rem;
	border: 2px solid black;
	border-radius: 5px;
	padding: .5rem;
	color: ${({ativo}) => ativo ? 'white' : 'black'};
	cursor: pointer;
	&:hover {
		transform: scale(120%);
	}
`;

const Module = () => {
	const [ativo, setAtivo] = useState(false);

	function handleClick() {
		setAtivo(!ativo);
	}

	return (
		<div className='container'>
		<ProdutosContainer>
			<Produto>
				<Title />
				<h1>OI</h1>
				<Titulo>Teste</Titulo>
				<Paragrafo>Meu texto</Paragrafo>
				<Preco cor="pink">2000</Preco>
			</Produto>
			<Produto>
				<Title />
				<h1>OI</h1>
				<Titulo>Teste</Titulo>
				<Paragrafo>Meu texto</Paragrafo>
				<Preco>1000</Preco>
			</Produto>
		</ProdutosContainer>
		<Comprar ativo={ativo} onClick={handleClick}>Compre aqui!</Comprar>
		</div>
	)
}

export default Module