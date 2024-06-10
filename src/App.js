import React from 'react';

import './Pages_CSS/App.css'
import Navbar from './Components/NavBar';
import ProblemTable from './Components/ProblemTable';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Render the Navbar component */}
      <ProblemTable/>
    </div>
  );
}

export default App;