import React, { useEffect } from 'react'

const Head = (props) => {
    useEffect(() => {
        document.title = props.title;
        document.querySelector('meta[name="description"]').setAttribute('content', props.description);
        console.log(props);
    }, [props]);

    return (
        <div>Head</div>
    )
}

export default Head