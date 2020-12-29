import React from 'react';


interface CardProps {
  text: string
}

export const Card = ({ text }: CardProps) => {
    return (
      <div className="bg-white cursor-pointer p-1 max-w-xs shadow-lg">
        {text}
      </div>
    );
};
