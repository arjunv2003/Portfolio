import React from 'react';
import imgs from '../assets/header.jpg';

const HeroHeader = () => {
  return (
    <>
      <header style={{ 
        width: '100%', 
        height: '100vh', 
        position: 'relative', 
        overflow: 'hidden' 
      }}>
        {/* Background Image */}
        <img
          src={imgs}
          alt="Hero Header"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
        
        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: 'linear-gradient(to top, #fff 0%, rgba(105, 90, 166, 0.35) 99%, rgba(105, 90, 166, 0.5) 100%)',
        }}>
        </div>

        {/* Text Content */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          textAlign: 'center',
          fontFamily: "'Poppins', sans-serif",
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            color: '#222',
            marginBottom: '10px',
            fontFamily: '"Baloo Paaji", cursive',
          }}>
            I am Arjun
          </h1>
          <p style={{
            fontSize: '1.5rem',
            letterSpacing: '2px',
            color: '#555',
            textTransform: 'uppercase',
            marginBottom: '20px',
            fontFamily:'"Delius", cursive'
            
          }}>
            FRONTEND WEB DESIGNER
          </p>

          {/* Button */}
          <button style={{
            backgroundColor: '#6B5CAE',
            color: 'white',
            fontSize: '1rem',
            padding: '12px 24px',
            borderRadius: '30px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}>
            View My Experience
          </button>
        </div>
      </header>
    </>
  );
};

export default HeroHeader;
