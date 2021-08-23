/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Main from './containers/Main/Main';
import UserContext from './services/userContext';
import useUser from './hooks/useUser';
import Header from './containers/Header/Header';


function App() {
  const user = useUser();
  const [menuActive, setMenuActive] = useState(false);
  const handleClick = () => {
    setMenuActive(!menuActive);
  }

  return (
    <div className="wrapper">
      <UserContext.Provider value={user}>
        <Header handleClick={handleClick} menuActive={menuActive} />
        <Main menuActive={menuActive} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
