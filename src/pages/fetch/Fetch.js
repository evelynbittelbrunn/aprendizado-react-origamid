import React, { useEffect } from 'react'
import UseFetch from './UseFetch';

const Fetch = () => {
    const {request, data, loading, error} = UseFetch();

    useEffect(() => {
        async function fetchData() {
            const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/');
            console.log(response);
        }
        fetchData();
    }, [request]);

    if (error) return <p>{error}</p>;
    if (loading) return <p>Carregando...</p>;
    
    return (
        <div>
            {data && data.map(item => {
                return (
                    <div key={item.id}>
                        <h1>{item.nome}</h1>
                    </div>
                );
            })}
        </div>
    );
}

export default Fetch