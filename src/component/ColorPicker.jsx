import React, { useState } from 'react'

export default function ColorPicker({ counters }) {
    const [color, setColor] = useState('white');
    return (
        <>

            <div className="colorpicker" style={{ backgroundColor: color }}>
                <select name="color" onChange={(e) => {
                    setColor(e.target.value)
                }}>
                    <option value="white">White</option>
                    <option value="black">Black</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                    <option value="pink">Pink</option>
                    <option value="gray">Gray</option>
                    <option value="brown">Brown</option>
                    <option value="gold">Gold</option>
                    <option value="silver">Silver</option>
                    <option value="cyan">Cyan</option>
                    <option value="magenta">Magenta</option>
                </select>
                <h2>{counters}</h2>
            </div>
        </>
    )
}
