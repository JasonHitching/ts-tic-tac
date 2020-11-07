import React from 'react'
import '../css/styling.css'

interface IProps {
    value: number;
}

export const Square = (props: IProps) => {
    return (
        <div>
            <button className="square" onClick={() => alert('click')} >
                {props.value}
            </button>
        </div>
    )
}
