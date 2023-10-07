import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import UpperNavbar from "./upperNavbar";
import Subhead from "./subhead";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  backgroundColor: "transparent",
  boxShadow: "none",
}));

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item></Item>
        </Grid>
        <Grid item xs={11}>
          <Item>
            <UpperNavbar />
            <Subhead />
          </Item>
        </Grid>
        <Grid item xs>
          <Item></Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Navbar;
