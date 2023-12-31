import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  backgroundColor: "transparent",
  boxShadow: "none",
}));

function Subhead() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingTop: "10px",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Item>
            <Typography
              variant="body1"
              sx={{
                paddingTop: "10px",
                textAlign: "left",
                fontFamily: "Inter",
                fontSize: "13px",
                color: "black",
              }}
            >
              Fashion is a form of self expression. It’s
              <br /> a way to show the world who you are and
              <br /> what you stand for.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Typography
              variant="h5"
              sx={{
                display: "inline",
                textAlign: "center",
                fontFamily: "Inter",
                color: "black",
              }}
            >
              CHOOSE YOUR FASHION STYLE
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <Link to="/Facebook" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  textAlign: "right",
                  fontFamily: "Inter",
                  color: "black",
                  fontSize: "14px",
                }}
              >
                Facebook
              </Typography>
            </Link>
            <Link to="/Instagram" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  textAlign: "right",
                  fontFamily: "Inter",
                  color: "black",
                  fontSize: "14px",
                }}
              >
                Instagram
              </Typography>
            </Link>
            <Link to="/Twitter" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  textAlign: "right",
                  fontFamily: "Inter",
                  color: "black",
                  fontSize: "14px",
                }}
              >
                Twitter
              </Typography>
            </Link>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Subhead;
