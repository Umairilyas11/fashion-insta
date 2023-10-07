import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "react-bootstrap/Card";
import { Typography } from "@mui/material";
import Button from "react-bootstrap/Button";
import { makeStyles } from "@mui/styles";

const CardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "10vw",
  flexWrap: "wrap",
  paddingTop: "5rem",
  alignItems: "center",
}));

const useStyles = makeStyles((theme) => ({
  Imgcontainer: {
    backgroundColor: "#FE5C33",
    padding: "5px",
    borderRadius: "15px",
    transform: "rotate(-5deg)",
  },
  Img: {
    objectFit: "cover",
    borderRadius: "15px",
    transform: "rotate(10deg)",
  },
  Title: {
    fontFamily: "Inria Serif",
    fontWeight: "bold",
    paddingTop: "2rem",
  },
  Card: {
    width: "20rem",
    display: "flex",
    backgroundColor: "transparent",
    border: "none",
    fontFamily: "Inria Serif",
    fontWeight: "bold",
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  backgroundColor: "transparent",
  boxShadow: "none",
}));

function Shop() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1, paddingTop: "10rem" }}>
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
              Top Values For You
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
              The fashion service offers innovative and unique styles that go
              beyond conventional fashion trends.
            </Typography>
            <CardContainer>
              <div>
                <Card
                  className={classes.Card}
                  style={{
                    width: "15rem",
                  }}
                >
                  <div className={classes.Imgcontainer}>
                    <Card.Img
                      variant="top"
                      src="https://mindfuldesignconsulting.com/wp-content/uploads/2017/08/Dramatic-Lighting-Clothing-Store-Interior-Design.jpg"
                      alt="123"
                      className={classes.Img}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className={classes.Title}>
                      Department Store
                    </Card.Title>
                    <Button
                      style={{
                        backgroundColor: "#FE5C33",
                        border: "none",
                      }}
                    >
                      Shop Now
                    </Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className={classes.Card}>
                  <div className={classes.Imgcontainer}>
                    <Card.Img
                      variant="top"
                      src="https://images.rosewoodhotels.com/is/image/rwhg/03:TALL-LARGE-9-16"
                      alt="123"
                      className={classes.Img}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className={classes.Title}>Boutique</Card.Title>
                    <Button
                      style={{
                        backgroundColor: "#FE5C33",
                        border: "none",
                      }}
                    >
                      Shop Now
                    </Button>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card
                  className={classes.Card}
                  style={{
                    width: "15rem",
                  }}
                >
                  <div className={classes.Imgcontainer}>
                    <Card.Img
                      variant="top"
                      src="https://images.rosewoodhotels.com/is/image/rwhg/goop%20Sundries:TALL-LARGE-9-16"
                      alt="123"
                      className={classes.Img}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className={classes.Title}>
                      Luxury Fashion Store
                    </Card.Title>
                    <Button
                      style={{
                        backgroundColor: "#FE5C33",
                        border: "none",
                      }}
                    >
                      Shop Now
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </CardContainer>
          </Item>
        </Grid>
        <Grid xs>
          <Item></Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Shop;
