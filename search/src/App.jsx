/** @format */

import { useState } from "react";

import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClearClick = () => {
    setSearchValue("");
  };

  const shouldDisplayButton = searchValue.length > 0;

  return (
    <>
      <div className='card'>
        <div className='container'>
          <input type='text' placeholder = 'Type Something Here... ' value={searchValue} onChange={handleInputChange} />
          { shouldDisplayButton && <button onClick={handleClearClick}> clear </button>}
        </div>
      </div>
    </>
  );
}

export default App;
