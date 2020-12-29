import React from 'react';
import { Column } from './components/Column';
import { Card } from './components/Card';

function App() {
  return (
    <div className="flex flex-row items-start p-4 w-full h-full bg-green-300">
      <Column text="To Do">
        <Card text="Generate App Scaffold"/>
      </Column>
      <Column text="In Progress">
        <Card text="Learn TypeScript"/>
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column>
    </div>
  );
}

export default App;
