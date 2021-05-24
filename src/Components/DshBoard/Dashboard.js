import { Box, Container, Grid, Paper } from "@material-ui/core";
import React from "react";
// import Deposits from "../Deposite/Deposits";
// import Orders from "../Dashboard/Order/Orders";
// import Chart from "../Dashboard/Chart/Chart";
import { dashboardStyles } from "../Dashboard/DashboardStyle/DashBoardStyle";
import clsx from "clsx";
// import Copyright from "../Dashboard/Copyrights/CopyRight";
import Chart from "../Dashboard/Chart/Chart";
import Deposits from "../Deposite/Deposits.js";
import Orders from "../Dashboard/Order/Orders";
const useStyles = dashboardStyles;

const Dashboard = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <Chart />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Deposits />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
      {/* <Box pt={4}>
        <CopyRight />
      </Box> */}
    </>
  );
};

export default Dashboard;
