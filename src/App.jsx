import { useState } from "react";

import RootLayout from "./components/Layout";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const App = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = ({ identifier, newValue }) => {
    setUserInput((currentUserInput) => {
      return { ...currentUserInput, [identifier]: Number(newValue) };
    });
  };

  const inputIsValid = userInput.duration >= 1;

  return (
    <RootLayout>
      <UserInput userInput={userInput} onChange={handleChange} />
      {inputIsValid ? (
        <Results userInput={userInput} />
      ) : (
        <p className="center">Duration should be at least an year.</p>
      )}
    </RootLayout>
  );
};

export default App;
