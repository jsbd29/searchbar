/** @format */

import { useState } from "react";

import "./App.css";

const list = ["Post 1", "Post 2", "Post 3", "Post 4", ,];

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClearClick = () => {
    setSearchValue("");
  };

  const shouldDisplayButton = searchValue.length > 0;

  const filterList = list.filter((list) => {
    return list.includes(searchValue);
  });

  return (
    <>
      <div className='card'>
        <div className='container'>
          <h1> Form in React </h1>

          <form>
            <label htmlFor='firstname'>First Name *</label>
            <input
              type='text'
              placeholder='Enter First Name'
              name='firstname'
            />
            <label htmlFor='lastname'>Last Name *</label>
            <input type='text' placeholder='Enter Last Name' name='lastname' />
            <label htmlFor='email'>Email*</label>
            <input type='text' placeholder='Enmail' name='email' />
            <label htmlFor='contact'>Contact *</label>
            <input type='text' placeholder='Enter Phone # ' name='contact' />
            <label htmlFor='gender'>Gender:</label>
            <p>
              <br></br>
            </p>
            <input type='radio' name='gender' />
            Male
            <input type='radio' name='gender ' />
            Female
            <p>
              <br></br>
            </p>
            <label htmlFor='subject'>Subject</label>
            <div>
              <select name='subject' id='subject'>
                <option value='math '> Math </option>
                <option value=' english '> English</option>
                <option value=' geopgraphy '> Geoography </option>
                <option value=' spanish '> Spanish </option>
                <option value=' Science '> Science </option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
