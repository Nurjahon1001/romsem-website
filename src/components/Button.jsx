import React from 'react';

function Button({classes, func}) {
    return (
        <>
            <button
                onClick={func}
                className={`py-2 rounded px-10 xl:2xl text-base text-white bg-orange-600 hover:bg-orange-400 font-semibold ${classes}`}>Хочу!</button>
        </>
    );
}

export default Button;