import { useState } from "react";
import bgImage from "./assets/Doted_Background.jpg"; // background
import logo from "./assets/logo.png"; // your logo image

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
          fontSize: "18px",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        <span
          onClick={() => setSelectedLang("EN")}
          style={{
            fontWeight: selectedLang === "EN" ? 700 : 400,
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
            fontWeight: selectedLang === "ES" ? 700 : 400,
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
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "400px",
            height: "450px",
            display: "block",
            margin: "0 auto 20px auto",
          }}
        />

        {/* Text Container aligned with logo width */}
        <div
          style={{
            width: "450px",
            margin: "0 auto",
            textAlign: "left",
          }}
        >
          {/* TextA */}
          <div
            style={{
              fontSize: "26px",
              fontWeight: 300,
              marginBottom: "10px",
              color: "rgb(51, 51, 51)",
              fontFamily: "Nunito, sans-serif",
            }}
          >
            {translations[selectedLang].textA}
          </div>

          {/* TextB */}
          <div
            style={{
              fontSize: "40px",
              fontWeight: 400,
              color: "rgb(51, 51, 51)",
              fontFamily: "'Caveat Brush', sans-serif",
              marginTop: "40px",
            }}
          >
            {translations[selectedLang].textB}
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
