import { useState } from "react";
import FlashCard from "./components/FlashCardContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="w-sm md:w-md lg:w-lg">
        <h1 className="text-xl md:text-2xl font-semibold mb-2">Flash Cards: ReactJs - Tailwind</h1>
        <FlashCard />
      </div>
    </main>
  );
}

export default App;
