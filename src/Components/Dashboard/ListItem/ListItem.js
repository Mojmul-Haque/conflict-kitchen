import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import ViewListSharpIcon from '@material-ui/icons/ViewListSharp';
import AssignmentIcon from "@material-ui/icons/Assignment";
import RateReviewIcon from '@material-ui/icons/RateReview';
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Link to="/dashboard">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link to="/dashboard/orders">
      <ListItem button>
        <ListItemIcon>
          <ViewListSharpIcon />
        </ListItemIcon>
        <ListItemText primary="All Orders" />
      </ListItem>
    </Link>
    <Link to="/dashboard/addProduct">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Add Service" />
      </ListItem>
    </Link>
    <Link to="/dashboard/mangeOrders">
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="ManageOrders" />
      </ListItem>
    </Link>
    <Link to="/dashboard/user-orders">
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon  />
        </ListItemIcon>
        <ListItemText primary="User Orders" />
      </ListItem>
    </Link>
    <Link to="/dashboard/addReview">
      <ListItem button>
        <ListItemIcon>
          <RateReviewIcon />
        </ListItemIcon>
        <ListItemText primary="User Reviews" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
