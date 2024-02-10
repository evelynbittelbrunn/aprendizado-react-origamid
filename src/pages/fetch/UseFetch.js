import React, { useCallback, useState } from 'react'

const set = new Set();

const UseFetch = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const request = useCallback(async (url, options) => {
        let response;
        let json;
        try {
            setError(null);
            setLoading(true);
            response = await fetch(url, options);
            json = await response.json();
        } catch(erro) {
            json = null;
            setError('Erro');
        } finally {
            setLoading(false);
            setData(json);
            return { response, json }
        }
    }, []);

    set.add(request);
    console.log(set);

    
    return {data, error, loading, request};
}

export default UseFetch;