import React, { useContext } from 'react';


const FirstComponent = () => {
    const x = useContext()

    console.log(x);
    return (
        <div>
            <h2>FirstComponent:</h2>
        </div>
    );
};

export default FirstComponent;