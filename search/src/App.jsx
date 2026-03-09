import { useState } from 'react'

import './App.css'

function App() {
  const [searchValue, setSearchValue] = useState(0)

  const handleInputChange = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <>
    <div className='bar-top'>
      <input type='text' value={searchValue} onChange={handleInputChange}/>
      <button className='primary'>clear </button>
    </div>
      
    </>
  )
}

export default App
