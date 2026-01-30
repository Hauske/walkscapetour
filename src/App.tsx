import { useState } from "react";

import "./fonts.css";
import bgImage from "./assets/Doted_Background.jpg";
import logo from "./assets/logo.png";
import walking from "./assets/Mascot.png"

function App() {
  type Language = "EN" | "ES";

  interface Translation {
    textA: string;
    textB: string;
  }

  const [selectedLang, setSelectedLang] = useState<Language>("EN");

  const translations: Record<Language, Translation> = {
    EN: {
      textA: "Currently generating your unique walkscape",
      textB: "Coming Soon!",
    },
    ES: {
      textA: "Estamos creando un walkscape único para ti",
      textB: "Coming Soon!",
    },
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        margin: 0,
        position: "relative",
      }}
    >
      {/* Language Toggle */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          fontSize: "1.5rem",
          zIndex: 9999,
          pointerEvents: "auto" // ensures clicks/taps are allowed
        }}
      >
        <button
          type="button"
          onClick={() => setSelectedLang("EN")}
          onTouchStart={() => setSelectedLang("EN")} // fallback for mobile Chrome
          className={`langButton ${selectedLang === "EN" ? "active" : ""}`}
          //style={{ minWidth: "40px", minHeight: "40px" }}
        >
          EN
        </button>
        |
        <button
          type="button"
          onClick={() => setSelectedLang("ES")}
          onTouchStart={() => setSelectedLang("ES")} // fallback for mobile Chrome
          className={`langButton ${selectedLang === "ES" ? "active" : ""}`}
          //style={{ minWidth: "40px", minHeight: "40px" }}
        >
          ES
        </button>
      </div>


      <div className="centeredContent">
        <img src={logo} alt="Logo" className="logo" />

        <div className="textContainer">
          <div className="textA">{translations[selectedLang].textA}</div>
          <div className="textB">{translations[selectedLang].textB}</div>
          <img src={walking} alt="Side Illustration" className="sideImage" />
        </div>
      </div>


      <style>
        {`
          .textA {
            font-size: 2rem;
            font-weight: 300;
            color: rgb(51, 51, 51);
            font-family: NunitoLight, sans-serif;
          }

          .textB {
            font-size: 4rem;
            color: rgb(51, 51, 51);
            font-family: CaveatBrush, sans-serif;
            margin-top: 0;
            word-wrap: break-word;
          }

          .sideImage {
            position: absolute;
            top: 0;                /* start at TextA */
            right: -120px;         /* offset to the right, adjust as needed */
            height: 100%;          /* span from TextA to TextB */
            object-fit: contain;
          }

          .logo {
            width: 100%;
            height: auto;
            display: block;
            margin: 0 auto 15px; /* desktop: centered */
          }

          .langButton {
            all: unset;
            font-family: RobotoBold, sans-serif;
            font-size: 1.5rem;       /* desktop size */
            cursor: pointer;
            margin: 0 8px;
            color: grey;
          }

          .langButton.active {
            font-weight: bold;
            color: black;
          }

          .textContainer {
            position: relative;
            display: inline-block;
            width: 100%;
            max-width: 500px;
            text-align: left;   /* desktop default */
            margin: 0 auto;
          }

          .centeredContent {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            width: 100%;
            max-width: 500px;   /* desktop safe width */
            margin: 0 auto;
          }
  
          @media (max-width: 600px) {
            .centeredContent {
              max-width: 90%;     /* restrict width on mobile */
              padding: 0 20px;    /* fixed safe space left/right */
              box-sizing: border-box;
            }

            .langButton {
              all: unset;
              font-family: RobotoBold, sans-serif;
              font-size: 1.5rem;
              cursor: pointer;
              margin: 0 8px;
              color: grey;
              position: relative;   /* needed for pseudo-element */
              line-height: 1;       /* keeps text aligned */
            }

            .langButton::after {
              content: "";
              position: absolute;
              top: -10px;    /* expand hit area upward */
              bottom: -10px; /* expand downward */
              left: -10px;   /* expand left */
              right: -10px;  /* expand right */
            }
      
            .logo {
              width: 75%;          /* smaller size */
              margin: 0 auto 15px;  /* align left */
              display: block;
              margin-bottom: 20px;
            }
        
            .sideImage {
              position: static;    /* reset positioning */
              display: block;
              margin: 20px auto 0; 
              max-width: 5em;      /* smaller on mobile */
              height: auto;        /* shrink naturally */
            }
          
            .textContainer {
              text-align: center; /* override for mobile */
            }

            .textA {
              font-size: 1.4rem;
              margin-bottom: 10px;
            }
            
            .textB {
              font-size: 2.4rem;
              margin-top: 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;
