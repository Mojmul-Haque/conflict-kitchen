import { createContext, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import AddFood from "./Components/AddFood/AddFood";
import Home from "./Components/HomePage/Home/Home";
import Login from "./Components/Login/Login";
// Conflict Kitchen

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <AddFood />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
