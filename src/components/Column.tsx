import React from 'react';

interface ColumnProps {
  text: string;
}

export const Column = ({
  text,
  children,
}: React.PropsWithChildren<ColumnProps>) => {
  return (
    <div className="h-21 min-h-40 w-72 bg-gray-200 m-1 p-2 flex-grow-0 rounded-sm">
      <div className="font-bold p-3 rounded-sm">{text}</div>
      {children}
    </div>
  );
};
