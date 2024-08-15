import { useEffect, useState } from "react";
import "../App.css";

const Hero = () => {
  const [navOpen, setNavOpen] = useState(false);
  // const [inView, setInView] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const square = document.querySelector(".square.blue");
      if (square) {
        // const rect = square.getBoundingClientRect();
        // const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        // setInView(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="background">
        <nav>
          <div className="navWrapper">
            <a href="/" id="logo">
              ABS Infotech
            </a>
            <div className="right">
              <div
                id="nav-icon"
                className={`menuIcon ${navOpen ? "open" : ""}`}
                onClick={toggleNav}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              {/* Overlay with conditional rendering */}
              <div className={`overlay ${navOpen ? "open" : ""}`}>
                <div className="overlayContent">
                  <a href="#services" className={navOpen ? "open" : ""}>
                    Services
                  </a>
                  <a href="#work" className={navOpen ? "open" : ""}>
                    Our work
                  </a>
                  <a href="#contact" className={navOpen ? "open" : ""}>
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="header">
          <div className="headerWrapper">
            <h6>we do</h6>
            <h1>
              Sell, Purchase & Repair
              <br /> old Laptops and Desktop
            </h1>
            <div className="circle blue"></div>
            <div className="square red"></div>
            <div className="triangle green">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 177.893 177.893"
              >
                <defs>
                  <style>{`.a{fill:url(#a);}.b{filter:url(#b);}`}</style>
                  <linearGradient
                    id="a"
                    x1="0.5"
                    x2="0.5"
                    y2="1"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stopColor="#3dbed5" />
                    <stop offset="1" stopColor="#3dd55a" />
                  </linearGradient>
                  <filter
                    id="b"
                    x="0"
                    y="0"
                    width="177.893"
                    height="177.893"
                    filterUnits="userSpaceOnUse"
                  >
                    <feOffset dx="3" dy="3" />
                    <feGaussianBlur stdDeviation="7.5" result="c" />
                    <feFlood floodColor="#3dd55a" floodOpacity="0.396" />
                    <feComposite operator="in" in2="c" />
                    <feComposite in="SourceGraphic" />
                  </filter>
                </defs>
                <g className="b" transform="matrix(1, 0, 0, 1, 0, 0)">
                  <path
                    className="a"
                    d="M136.727,21104.928l-50.222,100h100Z"
                    transform="translate(-8978.23 -19029.24) rotate(-25)"
                  />
                </g>
              </svg>
            </div>

            <div className="circle orange"></div>
          </div>
        </div>
      </div>

      {/* <div className="section services">
        <div className="sectionWrapper">
          <h6>what we offer</h6>
          <h2>Our services</h2>
          <p className="description">
            I am developing these skills from when I was 12 years old. I still
            love what I do and I would love to share my knowledge with the
            world.
          </p>
          <div className={`square blue ${inView ? "in-view" : ""}`}></div>
          <div className="grid">
            <div className="card">
              <h3>Web Development</h3>
              <p>I create websites and web services.</p>
            </div>
            <div className="card">
              <h3>Web Design</h3>
              <p>I design webpages and web platforms.</p>
            </div>
            <div className="card">
              <h3>Branding</h3>
              <p>I design brand guidelines and brand styles.</p>
            </div>
            <div className="card">
              <h3>Social Media Marketing</h3>
              <p>I run a social media business.</p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Hero;
