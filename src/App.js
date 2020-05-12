/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { UserContext } from "./CustomContexts";
import User from "./components/User";

import ReactLogo from "./assets/ReactLogo";
import "./styles.css";

const App = () => {
  const [user, setUser] = useState({
    username: "macycats",
    firstName: "macy",
    lastName: "cats"
  });

  // Init Provider Data
  const UserProvider = UserContext.Provider;

  console.log("init State", user);
  return (
    <main className="App">
      <header className="App-header">
        <ReactLogo />
        <h1>React Context</h1>
      </header>

      {/* App component that provides initial context values */}
      <UserProvider
        value={{
          state: user,
          actions: {
            handleFirstNameChange: event => {
              const value = event.target.value;
              setUser(prevState => ({
                ...prevState,
                firstName: value
              }));
            },

            handleLastNameChange: event => {
              const value = event.target.value;
              setUser(prevState => ({
                ...prevState,
                lastName: value
              }));
            }
          }
        }}
      >
        {/* <User/> has access to global provider state */}
        <User />
      </UserProvider>
    </main>
  );
};

export default App;
