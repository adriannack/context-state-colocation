import React from "react";
import { UserContext } from "../CustomContexts";

const UserConsumer = UserContext.Consumer;

const User = props => (
  // can hve many things happeneing here
  <UserProfile />
);

// Subscribes to Parent state
const UserProfile = props => (
  <UserConsumer>
    {({ state }) => {
      return (
        <div>
          <h2>Profile Page of {state.username}</h2>
          <UserDetails />
        </div>
      );
    }}
  </UserConsumer>
);

// Subscribes to Parent state and fires callback actions
const UserDetails = () => {
  return (
    <UserConsumer>
      {({ state, actions }) => {
        // access to parent state and actions
        const { username, firstName, lastName } = state;
        const { handleFirstNameChange, handleLastNameChange } = actions;

        return (
          <div>
            <div>
              <p>Userame: {username}</p>
              <p>First Name: {firstName}</p>
              <p>Last Name: {lastName}</p>
            </div>
            <div>
              <div>
                <input
                  type="text"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </div>
            </div>
          </div>
        );
      }}
    </UserConsumer>
  );
};

export default User;
