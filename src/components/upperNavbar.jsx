import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";

const useStyles = makeStyles((theme) => ({
  navbar: {
    background: "#310000",
    borderRadius: "13px",
    width: "400px",
    padding: "5px 15px",
    margin: "auto",
    paddingTop: "7px",
    paddingBottom: "7px",
    justifyContent: "center",
    alignItems: "center",
  },
  navLinks: {
    display: "flex",
    justifyContent: "space-between",
  },
  container: {
    display: "flex",
    margin: "auto",
    justifyContent: "center",
  },
}));

function UpperNavbar() {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        justifyContent: "center",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          color="black"
          sx={{
            fontFamily: "Inria Serif",
            fontSize: "25px",
          }}
        >
          Fashioninsta
        </Typography>
        <div className={classes.container}>
          <Box className={classes.navbar}>
            <Box className={classes.navLinks}>
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Inria Serif",
                    fontSize: "20px",
                  }}
                >
                  Home
                </Typography>
              </Link>
              <Link
                to="/men"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Inria Serif",
                    fontSize: "20px",
                  }}
                >
                  Men
                </Typography>
              </Link>
              <Link
                to="/women"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography
                  variant="body1"
                  fontFamily={"Inria Serif"}
                  sx={{
                    fontFamily: "Inria Serif",
                    fontSize: "20px",
                  }}
                >
                  Women
                </Typography>
              </Link>
              <Link
                to="/kids"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Inria Serif",
                    fontSize: "20px",
                  }}
                >
                  Kids
                </Typography>
              </Link>
              <Button
                variant="contained"
                className={classes.loginButton}
                sx={{
                  background: "#FE5C33",
                  color: "white",
                  borderRadius: "8px",
                  textTransform: "capitalize",
                  fontFamily: "Inria Serif",
                  "&:hover": {
                    background: "#D87057",
                  },
                  height: "30px",
                  fontSize: "20px",
                }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </div>
      </Toolbar>
      <Divider
        variant="center"
        sx={{
          backgroundColor: "black",
          borderBottomWidth: "1px",
        }}
      />
    </AppBar>
  );
}

export default UpperNavbar;
