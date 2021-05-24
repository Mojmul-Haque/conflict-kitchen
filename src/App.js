import { createContext, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import AllOrderAdmin from "./Components/Dashboard/AllOrderAdmin/AllOrderAdmin";
import MainDashBoard from "./Components/Dashboard/MainDashboard/MainDashBoard";
import AddFood from "./Components/HomePage/AddFood/AddFood";
import Cart from "./Components/HomePage/Cart/Cart";
import CheckoutCart from "./Components/HomePage/Checkout/CheckoutCart";
import Home from "./Components/HomePage/Home/Home";
import Login from "./Components/Login/Login";
import ReduxCart from "./ReduxPage/ReduxCart";
import ReduxHome from "./ReduxPage/ReduxHome";
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
          <Route path="/redux">
            <ReduxHome />
          </Route>
          <Route path="/cart-item">
            <Cart />
          </Route>
          <Route path="/checkout">
            <CheckoutCart />
          </Route>
          <Route path="/dashboard">
            <MainDashBoard />
          </Route>
          <Route path="/orders">
            <AllOrderAdmin />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
