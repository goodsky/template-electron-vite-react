import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '50px',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#333' }}>Hello from React!</h1>
      <p style={{ color: '#666' }}>
        This is your Electron app with React and Vite
      </p>
      
      <div style={{ marginTop: '30px' }}>
         <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
