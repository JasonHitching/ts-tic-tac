import React from 'react'
import '../css/styling.css'

interface IProps {
  value: string;
  onClick: () => void;
}

export const Square: React.FC<IProps> = ({value, onClick }) => {
  return (
    <div>
      <button className="square"     onClick={() => onClick()}>
        {value}
      </button>
    </div>
  );
};
