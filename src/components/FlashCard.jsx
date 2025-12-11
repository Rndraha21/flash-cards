const FlashCard = ({ question, answer, isFlipped }) => {
  return (
    <div
      className="bg-green-200 p-4 rounded-sm flex items-center justify-center text-center h-[250px]"
    >
      {isFlipped ? (
        <div className="text-lg">{answer}</div>
      ) : (
        <div className="text-2xl">{question}</div>
      )}
    </div>
  );
};

export default FlashCard;
