import { useState } from "react";

import "./fonts.css";
import bgImage from "./assets/Doted_Background.jpg";
import logo from "./assets/logo.png";

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
      textB: "Coming Soon!.............",
    },
    ES: {
      textA: "Estamos creando un walkscape único para ti",
      textB: "Coming Soon!.............",
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
        }}
      >
        <button
          onClick={() => setSelectedLang("EN")}
          style={{
            all: "unset", // removes all default browser styles
            fontFamily: "RobotoBold, sans-serif",
            fontWeight: selectedLang === "EN" ? "bold" : "normal",
            color: selectedLang === "EN" ? "black" : "grey",
            cursor: "pointer",
            marginRight: "8px",
            fontSize: "1.5rem",
          }}
        >
        EN
        </button>
        |
        <button
          onClick={() => setSelectedLang("ES")}
          style={{
            all: "unset",
            fontFamily: "RobotoBold, sans-serif",
            fontWeight: selectedLang === "ES" ? "bold" : "normal",
            color: selectedLang === "ES" ? "black" : "grey",
            cursor: "pointer",
            marginLeft: "8px",
            fontSize: "1.5rem",
          }}
        >
          ES
        </button>
      </div>

      {/* Centered Content */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width: "100%",
          maxWidth: "500px", // keep for desktop
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            margin: "0 auto", // removed bottom margin
          }}
        />

        {/* Text Container */}
        <div style={{ width: "100%", margin: "0 auto", textAlign: "left" }}>
          {/* TextA */}
          <div className="textA">
            {translations[selectedLang].textA}
          </div>

          {/* TextB */}
          <div className="textB">
            {translations[selectedLang].textB}
          </div>
        </div>
      </div>

      {/* Responsive tweaks */}
      <style>
        {`
          .textA {
            font-size: 2rem;
            font-weight: 300;
            margin-bottom: 20px; /* spacing between TextA and TextB */
            color: rgb(51, 51, 51);
            font-family: NunitoLight, sans-serif;
          }

          .textB {
            font-size: 4rem;
            color: rgb(51, 51, 51);
            font-family: CaveatBrush, sans-serif;
            margin-top: 0; /* spacing handled by textA */
            word-wrap: break-word;
          }

          @media (max-width: 600px) {
            img {
              width: 100%;
              height: 30vh;
              object-fit: contain;
            }

            .textA {
              font-size: 1.7rem; /* smaller on mobile */
              margin-bottom: 20px;
            }

            .textB {
              font-size: 3rem;   /* smaller on mobile */
              margin-top: 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;
