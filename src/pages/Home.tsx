import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/index";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleStoriesClick = useCallback(() => {
    console.log("Stories button clicked");
    navigate("/stories");
  }, [navigate]);

  const handleSimulatorClick = useCallback(() => {
    console.log("Simulator button clicked");
    navigate("/simulator");
  }, [navigate]);

  const handleGamesClick = useCallback(() => {
    console.log("Games button clicked");
    navigate("/games");
  }, [navigate]);

  return (
    <div className="relative flex  min-h-screen  flex-col justify-center items-center m:py-12">
      <h1 className="text-center text-5xl">Welcome to the Home page!</h1>
      <div className="flex justify-center mt-10 gap-10">
        <Button onClick={handleStoriesClick} text="Stories" variant="primary" />
        <Button
          onClick={handleSimulatorClick}
          text="Simulator"
          variant="secondary"
        />
        <Button onClick={handleGamesClick} text="Games" variant="tertiary" />
      </div>
    </div>
  );
};
