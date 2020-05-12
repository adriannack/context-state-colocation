### Using React's Context API

> React’s Context API allows you to store the state in what looks like an application global state and access it only in the components that need them, without having to drill it down via props.

#### but before you start...prefer colocation wherever possible.

**What is colocated state?**

> The principle of colocation is:
> Place code as close to where it's relevant as possible.
> https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster

If lifting state is required, then the principle still applies. Place state at the closest common parent.

Great article by Kent Dodds -> [click here](https://kentcdodds.com/blog/colocation)

### Setup

```javascript
import React, { createContext } from "react";
const UserContext = createContext({}); //similar to a global application state. can use default values, replace the empty object.
const UserProvider = UserContext.Provider; // Provider component allows Consumers to subscribe to changes in context
const UserConsumer = UserContext.Consumer;
```

#### Provider

Place the provider in the Parent
Provider accepts a value prop to be passed to it Consumer components descendants

📣 defaults!

> The defaultValue argument is only used when a component does not have a matching Provider above it in the tree

> All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes. The propagation from Provider to its descendant consumers (including .contextType and useContext) is not subject to the shouldComponentUpdate method, so the consumer is updated even when an ancestor component skips an update.

> https://reactjs.org/docs/context.html#contextprovider

> To get around this, lift the value into the parent’s state:

```javascript
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {something: 'something'}, // local state being lifted
    };
  }

  render() {
    return (
      <Provider value={this.state.value}> // popping in local state
```

> https://reactjs.org/docs/context.html#caveats

#### Consumer

Multiple components can subscribe to one Provider component. Thus, a provider can have many consumers.

```javascript
const UserProfile = props => (
  <UserConsumer>
    {context => {
      return (
        <div>
          <h2>Profile Page of {context.username}</h2>
          <UserDetails />
        </div>
      );
    }}
  </UserConsumer>
);
```
