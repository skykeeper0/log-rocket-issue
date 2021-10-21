import React, { useEffect, useState } from "react";
import './App.css';
import ProgressBar from './ProgressBar';

function App() {

  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    if (completed < 100) {
      setTimeout(() => setCompleted(completed + 10), 1000);
    }
  });

  return (
    <div className="App">
      <ProgressBar completed={completed} />
    </div>
  );
}

export default App;
