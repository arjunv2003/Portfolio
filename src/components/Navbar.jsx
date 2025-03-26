import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import resume from "../assets/Resume/Arjun_SWE.pdf";
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(new Array(7).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
      setItemsVisible(new Array(7).fill(false));

      itemsVisible.forEach((_, index) => {
        setTimeout(() => {
          setItemsVisible((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, index * 150);
      });
    } else {
      itemsVisible.forEach((_, index) => {
        setTimeout(() => {
          setItemsVisible((prev) => {
            const newState = [...prev];
            newState[index] = false;
            return newState;
          });
        }, (6 - index) * 150);
      });

      setTimeout(() => setMenuOpen(false), 1100);
    }
  };

  return (
    <nav
      className="navbar"
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 100,
        backgroundColor: scrolled ? "white" : "transparent",
        transition: "background-color 0.9s ease-in-out",
        paddingTop: scrolled ? "0px" : "20px",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "1rem",
          color: scrolled ? "#695aa6" : "white",
        }}
      >
        <strong
          className="logo"
          style={{
            fontSize: "40px",
            fontFamily: '"Indie Flower", cursive',
          }}
        >
          Portfolio
        </strong>

        {/* Desktop/Laptop Navigation */}
        <div
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "40%",
            gap: "20px",
          }}
        >
          {menuOpen && (
            <ul
              className="nav-links"
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              {/* {["About", "Experience", "Education", "Projects", "Skills", "Contact", "Cv"].map(
                (item, index) => (
                  <li
                    key={index}
                    style={{
                      opacity: itemsVisible[index] ? 1 : 0,
                      transform: itemsVisible[index] ? "translateY(0px)" : "translateY(-10px)",
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                      fontFamily: '"Indie Flower", cursive',
                      fontSize: "20px",
                    }}
                  >
                    <a href={`#${item.toLowerCase()}`}>{item}</a>
                  </li>
                )
              )} */}

<ul className="nav-links" style={{ display: "flex", gap: "20px" }}>
  {["About", "Experience", "Education", "Projects", "Skills", "Contact"].map(
    (item, index) => (
      <li
        key={index}
        style={{
          opacity: itemsVisible[index] ? 1 : 0,
          transform: itemsVisible[index] ? "translateY(0px)" : "translateY(-10px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          fontFamily: '"Indie Flower", cursive',
          fontSize: "20px",
        }}
      >
        <a href={`#${item.toLowerCase()}`}>{item}</a>
      </li>
    )
  )}
  
  {/* CV Link with Animation */}
  <li
    style={{
      opacity: itemsVisible[6] ? 1 : 0,  // Applying animation at the same timing
      transform: itemsVisible[6] ? "translateY(0px)" : "translateY(-10px)",
      transition: "opacity 0.3s ease, transform 0.3s ease",
      fontFamily: '"Indie Flower", cursive',
      fontSize: "20px",
    }}
  >
    <a href={resume} target="_blank" rel="noopener noreferrer">
      CV
    </a>
  </li>
</ul>

            </ul>
          )}

          {/* Hamburger Menu (Visible on all screens) */}
          <button
            onClick={toggleMenu}
            style={{
              fontSize: "24px",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: scrolled ? "#695aa6" : "white",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <span
              style={{
                display: "inline-block",
                transition: "transform 0.3s ease-in-out",
                transform: menuOpen ? "rotate(0deg)" : "rotate(180deg)",
              }}
            >
              {menuOpen ? <X /> : "☰"}
            </span>
          </button>
        </div>
      </div>
     {/* Mobile Dropdown Menu */}
{menuOpen && (
  <div
    className="mobile-menu"
    style={{
      position: "absolute",
      top: "100%",
      left: 0,
      width: "100%",
      backgroundImage: 'linear-gradient(to top, #fff 0%, rgba(105, 90, 166, 0.35) 99%, rgba(105, 90, 166, 0.5) 100%)',
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      display: "none", // Hidden by default (shown only on small screens)
      flexDirection: "column",
      padding: "10px 20px",
      backdropFilter: "blur(10px)",
      transition: "transform 0.3s ease-in-out",
    }}
  >
    {["About", "Experience", "Education", "Projects", "Skills", "Contact"].map((item, index) => (
      <a
        key={index}
        href={`#${item.toLowerCase()}`}
        style={{
          padding: "10px",
          opacity: itemsVisible[index] ? 1 : 0,
          transform: itemsVisible[index] ? "translateY(0px)" : "translateY(-10px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          fontFamily: '"Indie Flower", cursive',
          fontSize: "20px",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        {item}
      </a>
    ))}

    {/* CV Link with Animation */}
    <a
      href={resume}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        padding: "10px",
        opacity: itemsVisible[6] ? 1 : 0,
        transform: itemsVisible[6] ? "translateY(0px)" : "translateY(-10px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        fontFamily: '"Indie Flower", cursive',
        fontSize: "20px",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      CV
    </a>
  </div>
)}
      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .desktop-nav .nav-links {
              display: none !important;
            }
            .mobile-menu {
              display: flex !important;
            }
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
