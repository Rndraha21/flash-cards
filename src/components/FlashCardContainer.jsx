import ProgressBar from "./ProgressBar";
import FlashCard from "./FlashCard";
import { useState } from "react";
import Navigation from "./Navigation";
import cardsData from "../data/flash-data.json";

const FlashCardContainer = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cardsData.length);
    setIsFlipped(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
    setIsFlipped(false);
  };

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const question = () => cardsData[currentIndex].question;
  const answer = () => cardsData[currentIndex].answer;
  return (
    <div className="font-jua">
      <ProgressBar currentIndex={currentIndex} totalData={cardsData.length} />
      <div className="border-2 border-gray-200 rounded-md mt-4 p-1">
        <FlashCard
          question={question()}
          answer={answer()}
          isFlipped={isFlipped}
        />
        <Navigation
          isFlipped={isFlipped}
          onFlip={handleFlip}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
        />
      </div>
    </div>
  );
};

export default FlashCardContainer;
