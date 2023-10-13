import "./App.css";
import Users from "./UserProfile/Users";
import StyledButton from "./ButtonVariant/StyledButton";
import { useState } from "react";

function App() {
  const [backgroundColor, setBackgroundColor] = useState<string>("white");

  const handleButtonClick = (color: string) => {
    setBackgroundColor(color);
  };
  return (
    <div className="Container">
      <Users />
      <div
        style={{
          backgroundColor,
          transition: "background-color 0.5s",
        }} className="Btn-Bg"
      >
        <StyledButton
          variant="primary"
          onClick={() => handleButtonClick("blue")}
        >
          Primary Button
        </StyledButton>
        <StyledButton
          variant="secondary"
          onClick={() => handleButtonClick("gray")}
        >
          Secondary Button
        </StyledButton>
        <StyledButton variant="danger" onClick={() => handleButtonClick("red")}>
          Danger Button
        </StyledButton>
      </div>
    </div>
  );
}

export default App;
