import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Item = styled(Paper)(({ theme }) => ({
  padding: "7rem",
  textAlign: "center",
  color: theme.palette.text.secondary,
  backgroundColor: "transparent",
  boxShadow: "none",
}));

var ContactData = [
  {
    id: 1,
    icon: <LocalPhoneIcon />,
  },
];

function Contactus() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid xs>
            <Item></Item>
          </Grid>
          <Grid xs={11}>
            <Item>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "inika",
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Inria Serif",
                  paddingTop: "20px",
                  paddingBottom: "30px",
                  color: "#000",
                  maxWidth: "45%",
                  margin: "auto",
                }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
                explicabo tempore, saepe natus commodi sunt repellendus
                molestiae id esse totam qui minus corrupti? Consequuntur vero
                nihil quas beatae sit laudantium.
              </Typography>
            </Item>
          </Grid>
          <Grid xs>
            <Item></Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Contactus;
