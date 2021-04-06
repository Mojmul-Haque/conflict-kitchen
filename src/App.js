import {createContext, useState} from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import "./App.css";
import AddFood from "./Components/AddFood/AddFood";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
// Conflict Kitchen

export const UserContext = createContext();
function App() {
  const [shareData, setShareData] = useState({});
  return (
    <UserContext.Provider value={[shareData, setShareData]}>
      <h3>MealName:{shareData.mealName}</h3>
      <Router>
        <Header />
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
