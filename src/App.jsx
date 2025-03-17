import React from 'react';
import imgs from './assets/header.jpg';

const App = () => {
  return (
    <>
    <header style={{ width: '100%', height: '100vh', overflow: 'hidden'}}>
      <img
        src={imgs}
        alt="Hero Header"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', // or 'contain' or 'fill' depending on your needs.
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      {/* Optional: Add overlay or other content here */}
    </header>
    <div style={{textAlign: 'center', fontFamily: 'sans-serif'}}>
      <h1>Hiiiiii</h1>
    </div>
    </>
  );
};

export default App;