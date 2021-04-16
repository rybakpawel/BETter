import React, { useState } from 'react'

const MousePosition = () => {

    const [coordinate, setMousePosition] = useState(
        {
            x: null,
            y: null,
        }
    )

    const updateMousePosition = e => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    return (
        coordinate,
        updateMousePosition
    )
}

export default MousePosition

