import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <p className="text-gray-800 text-2xl font-semibold">Hello from React!</p>
      <p className="text-gray-600">This is your Electron app with React and Vite</p>

      <div className="mt-8">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </div>
  );
}

export default App;
