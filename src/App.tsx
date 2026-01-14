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
        <span
          onClick={() => setSelectedLang("EN")}
          style={{
            fontFamily: "RobotoBold, sans-serif",
            fontWeight: selectedLang === "EN" ? "bold" : "normal",
            color: selectedLang === "EN" ? "black" : "grey",
            cursor: "pointer",
            marginRight: "8px",
          }}
        >
          EN
        </span>
        |
        <span
          onClick={() => setSelectedLang("ES")}
          style={{
            fontFamily: "RobotoBold, sans-serif",
            fontWeight: selectedLang === "ES" ? "bold" : "normal",
            color: selectedLang === "ES" ? "black" : "grey",
            cursor: "pointer",
            marginLeft: "8px",
          }}
        >
          ES
        </span>
      </div>

      {/* Centered Content */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width: "90%", // responsive width
          maxWidth: "500px",
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "100%", // scales with container
            height: "auto", // keeps aspect ratio
            display: "block",
            margin: "0 auto 20px auto",
          }}
        />

        {/* Text Container */}
        <div
          style={{
            width: "100%",
            margin: "0 auto",
            textAlign: "left",
          }}
        >
          {/* TextA */}
          <div
            style={{
              fontSize: "2rem",
              fontWeight: 300,
              marginBottom: "10px",
              color: "rgb(51, 51, 51)",
              fontFamily: "NunitoLight, sans-serif",
            }}
          >
            {translations[selectedLang].textA}
          </div>

          {/* TextB */}
          <div
            style={{
              fontSize: "4rem",
              color: "rgb(51, 51, 51)",
              fontFamily: "CaveatBrush, sans-serif",
              marginTop: "40px",
              wordWrap: "break-word",
            }}
          >
            {translations[selectedLang].textB}
          </div>
        </div>
      </div>

      {/* Responsive tweaks with media queries */}
      <style>
        {`
          @media (max-width: 600px) {
            img {
              max-width: 80%;
            }
            div {
              font-size: 0.9rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;
