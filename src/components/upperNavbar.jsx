import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: "transparent",
  boxShadow: "none",
  paddingTop: "1rem",
}));

const useStyles = makeStyles((theme) => ({
  navbar: {
    background: "#310000",
    borderRadius: "13px",
    width: "400px",
    padding: "5px 15px",
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
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs>
          <Item
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              paddingLeft: "0",
            }}
          >
            <Typography
              variant="h5"
              color="black"
              sx={{
                fontFamily: "Inria Serif",
                fontSize: "1.8rem",
              }}
            >
              Fashioninsta
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Toolbar>
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
          </Item>
        </Grid>
        <Grid item xs>
          <Item></Item>
        </Grid>
      </Grid>

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
