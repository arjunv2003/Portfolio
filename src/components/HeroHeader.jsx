// import React from 'react';
// import imgs from '../assets/header.jpg';
// import useTypingEffect from '../Hooks/useTypingEffect'

// const HeroHeader = () => {
//   const text = useTypingEffect(['IITian', 'Software Developer','Web Developer','ML Enthusiast'], 100, 2000);

//   const scrollToExperience = () => {
//     const experienceSection = document.getElementById('experience');
//     if (experienceSection) {
//       experienceSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <>
//       <header style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}>
//         {/* Background Image */}
//         <img
//           src={imgs}
//           alt="Hero Header"
//           style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
//         />

//         {/* Gradient Overlay */}
//         <div
//           style={{
//             position: 'absolute',
//             width: '100%',
//             height: '100%',
//             backgroundImage: 'linear-gradient(to top, #fff 0%, rgba(105, 90, 166, 0.35) 99%, rgba(105, 90, 166, 0.5) 100%)',
//           }}
//         />

//         {/* Text Content */}
//         <div
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             zIndex: 2,
//             textAlign: 'center',
//             fontFamily: "'Poppins', sans-serif",
//           }}
//         >
//           <h1 style={{ fontSize: '4rem', fontWeight: 'bold', color: '#222', marginBottom: '10px', fontFamily: '"Baloo Paaji", cursive' }}>
//             I am Arjun
//           </h1>

//           {/* Typing Animation */}
//           <p
//             style={{
//               fontSize: '1.5rem',
//               letterSpacing: '2px',
//               color: '#555',
//               // textTransform: 'uppercase',
//               marginBottom: '20px',
//               fontFamily: '"Delius", cursive',
//               minHeight: '40px', // Prevents layout shift
//             }}
//           >
//             {text}|
//           </p>

//           {/* Button with Smooth Scroll */}
//           <button
//             onClick={scrollToExperience}
//             style={{
//               backgroundColor: '#6B5CAE',
//               color: 'white',
//               fontSize: '1rem',
//               padding: '12px 24px',
//               borderRadius: '30px',
//               border: 'none',
//               cursor: 'pointer',
//               fontWeight: 'bold',
//             }}
//           >
//             View My Experience
//           </button>
//         </div>
//       </header>
//     </>
//   );
// };

// export default HeroHeader;


import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGeeksforgeeks } from 'react-icons/si';
import imgs from '../assets/header.jpg';
import useTypingEffect from '../Hooks/useTypingEffect';

const HeroHeader = () => {
  const text = useTypingEffect(['IITian', 'Software Developer', 'Web Developer', 'ML Enthusiast'], 100, 2000);

  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}>
        {/* Background Image */}
        <img
          src={imgs}
          alt="Hero Header"
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
        />

        {/* Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundImage: 'linear-gradient(to top, #fff 0%, rgba(105, 90, 166, 0.35) 99%, rgba(105, 90, 166, 0.5) 100%)',
          }}
        />

        {/* Text Content */}
        <div
          style={{
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
          }}
        >
          <h1 style={{ fontSize: '4rem', fontWeight: 'bold', color: '#222', marginBottom: '10px', fontFamily: '"Baloo Paaji", cursive' }}>
            I am Arjun
          </h1>

          {/* Typing Animation */}
          <p
            style={{
              fontSize: '1.5rem',
              letterSpacing: '2px',
              color: '#555',
              marginBottom: '20px',
              fontFamily: '"Delius", cursive',
              minHeight: '40px', // Prevents layout shift
            }}
          >
            {text}|
          </p>

          {/* Button with Smooth Scroll */}
          <button
            onClick={scrollToExperience}
            style={{
              backgroundColor: '#6B5CAE',
              color: 'white',
              fontSize: '1rem',
              padding: '12px 24px',
              borderRadius: '30px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginBottom: '20px', // Space before social links
            }}
          >
            View My Experience
          </button>

          {/* Social Media Links */}
          <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
            <a href="https://www.linkedin.com/in/arjun-kanth-venkatagiri-7aba47241/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} color="#0077B5" />
            </a>
            <a href="https://www.geeksforgeeks.org/user/20cs01065/" target="_blank" rel="noopener noreferrer">
              <SiGeeksforgeeks size={30} color="#008000" />
            </a>
            <a href="https://github.com/arjunv2003" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} color="#333" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeroHeader;
