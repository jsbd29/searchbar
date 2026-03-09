/** @format */

import { useState } from "react";

import "./App.css";


const list = [
  "Post 1",
  "Post 2",
  "Post 3",
  "Post 4",,
  
]

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClearClick = () => {
    setSearchValue("");
  };

  const shouldDisplayButton = searchValue.length > 0;

  const filterList = list.filter((list)=>{
    return list.includes(searchValue)
  })

  return (
    <>
      <div className='card'>
        <div className='container'>
          <input type='text' placeholder = 'Type Something Here... ' value={searchValue} onChange={handleInputChange} />
          { shouldDisplayButton && <button onClick={handleClearClick}> clear </button>}
          <div>
            <ul>
          { filterList.map((list)=>{
            return <li key={list}>{list}</li>
          })}
          </ul>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
