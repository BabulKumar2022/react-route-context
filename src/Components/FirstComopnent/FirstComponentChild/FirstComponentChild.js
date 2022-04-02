import React from 'react';

const FirstComponentChild = () => {
    return (
        <div>
            <h1>FirstComponentChild:</h1>
            <FirstComponentChild></FirstComponentChild>
        </div>
    );
};

export default FirstComponentChild;