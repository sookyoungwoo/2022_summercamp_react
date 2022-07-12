import AC from './components/AC';
import BC from './components/BC';
import CC from './components/CC';
import DC from './components/DC';
import EC from './components/EC';
import FC from './components/FC';
import "./App.css";
import { useState } from 'react';
import { useUserContext } from './hooks/useUserContext';
function App() {
  const UserContext = useUserContext();
  return (
    <UserContext.Provider value={{...UserContext}}>
    <div className="App">
      <AC name={name}>
        <BC name={name}>
          <CC></CC>
        </BC>
      </AC>
      <DC>
        <EC></EC>
      </DC>
    </div>
    </UserContext.Provider>
  );
}

export default App;
