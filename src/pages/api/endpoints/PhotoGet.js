import React from 'react'

const PhotoGet = () => {

    function handleSubmit(event) {
        event.preventDefault();

        fetch('https://dogsapi.origamid.dev/json/api/photo').then(responde => {
            console.log(responde);
            return responde;
        }).then(json => {
            console.log(json);
            return json;
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button>Enviar</button>
        </form>
    )
}

export default PhotoGet