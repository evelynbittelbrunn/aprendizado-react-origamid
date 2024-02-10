import React from 'react'
import { NavLink, useLocation, useParams, Outlet } from 'react-router-dom'
import Head from '../../Head/Head';

const Produto = () => {
    const params   = useParams();
    const location = useLocation();
    const search   = new URLSearchParams(location.search);

    console.log(params, location);
    console.log(search.get('q'));

    return (
        <div>
            <Head title={"Produto"} description={"Descrição dos produtos"} />
            <h1>Produto: {params.id}</h1>
            <nav>
                <NavLink to="">Descrição</NavLink>
                <NavLink to="avaliacao">Avaliação</NavLink>
                <NavLink to="customizado">Customizado</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default Produto