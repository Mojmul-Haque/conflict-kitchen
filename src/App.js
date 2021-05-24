import { createContext, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import AddReviews from "./Components/Dashboard/AddReviews/AddReviews";
import AllOrderAdmin from "./Components/Dashboard/AllOrderAdmin/AllOrderAdmin";
import MainDashBoard from "./Components/Dashboard/MainDashboard/MainDashBoard";
import Dashboard from "./Components/DshBoard/Dashboard";
import AddFood from "./Components/HomePage/AddFood/AddFood";
import Cart from "./Components/HomePage/Cart/Cart";
import CheckoutCart from "./Components/HomePage/Checkout/CheckoutCart";
import Home from "./Components/HomePage/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute";
import ReduxCart from "./ReduxPage/ReduxCart";
import ReduxHome from "./ReduxPage/ReduxHome";
// Conflict Kitchen

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
    email: "",
    password: "",
  });

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
          <PrivateRoute path="/cart-item">
            <Cart />
          </PrivateRoute>
          <Route path="/checkout">
            <CheckoutCart />
          </Route>
          <Route path="/dashboard">
            <MainDashBoard />
          </Route>
          <Route path="/orders">
            <AllOrderAdmin />
          </Route>

          {/* dashboard route */}

          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/dashboard/orders">
            <AllOrderAdmin />
          </Route>
          <Route exact path="/dashboard/addProduct">
            <AddFood />
          </Route>
          <Route exact path="/dashboard/addReview">
            <AddReviews />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
