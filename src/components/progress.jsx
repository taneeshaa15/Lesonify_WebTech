import React, { useState } from 'react'

const Progress = ({ done }) => {
    const [style, setStyle] = useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`,
        };

        setStyle(newStyle);
    }, 200);
    return (
        <div className="progress">
            <div style={style} className="progDone">
                {done} %
            </div>
        </div>
    )
}

export default Progress