import React, { useState } from 'react'
import '../css/styling.css'

interface IProps {
    value: number;
}

export const Square = (props: IProps) => {
    const [value, setValue] = useState('');

    return (
        <div>
            <button className="square" onClick={() => setValue('X')} >
                {value}
            </button>
        </div>
    )
}
