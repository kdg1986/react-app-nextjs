import React from 'react';

export default () => {
    const handle = () => {
        alert(1)
    }
    return(
        <div>
            <h1>
                <button onClick={handle}>TEST</button>
            </h1>
        </div>
    )
}