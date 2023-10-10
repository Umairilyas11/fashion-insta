import React from "react";
import Card from "react-bootstrap/Card";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

var cardData = [
  {
    id: 1,
    image:
      "https://totempool.com/wp-content/uploads/2021/05/sales-consultant-with-a-client_f910756829723dfbf0c1d1531a944129_800.jpg",
    title: "Sales Consultant",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In voluptates laudantium debitis magnam minus, itaque quis dicta deserunt id nam incidunt, perferendis magni repellat, earum repudiandae vel officia! Cum, dolore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In voluptates laudantium debitis magnam minus, itaque quis dicta deserunt id nam incidunt, perferendis magni repellat, earum repudiandae vel officia! Cum, dolore.Lorem ipsum, dolor sit amet consectetur adipisicing elit. In voluptates laudantium debitis magnam minus, itaque quis dicta deserunt id nam incidunt, perferendis magni repellat, earum repudiandae vel officia! Cum, dolore.",
  },
  {
    id: 2,
    image:
      "https://blog.hubspot.com/hs-fs/hubfs/what-is-account-executive-fi%20%281%29.jpg?width=595&height=400&name=what-is-account-executive-fi%20%281%29.jpg",
    title: "Account Executive",
    subtitle:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. In voluptates laudantium debitis magnam minus, itaque quis dicta deserunt id nam incidunt, perferendis magni repellat, earum repudiandae vel officia! Cum, dolore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In voluptates laudantium debitis magnam minus, itaque quis dicta deserunt id nam incidunt, perferendis magni repellat, earum repudiandae vel officia! Cum, dolore.Lorem ipsum, dolor sit amet consectetur adipisicing elit. In voluptates laudantium debitis magnam minus, itaque quis dicta deserunt id nam incidunt, perferendis magni repellat, earum repudiandae vel officia! Cum, dolore.",
  },
  {
    id: 3,
    image: "https://blog.hubspot.com/hubfs/find-sales-reps%20%281%29.jpg",
    title: "Sales Representatives",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In voluptates laudantium debitis magnam minus, itaque quis dicta deserunt id nam incidunt, perferendis magni repellat, earum repudiandae vel officia! Cum, dolore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In voluptates laudantium debitis magnam minus, itaque quis dicta deserunt id nam incidunt, perferendis magni repellat, earum repudiandae vel officia! Cum, dolore.Lorem ipsum, dolor sit amet consectetur adipisicing elit. In voluptates laudantium debitis magnam minus, itaque quis dicta deserunt id nam incidunt, perferendis magni repellat, earum repudiandae vel officia! Cum, dolore.",
  },
];

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  backgroundColor: "transparent",
  boxShadow: "none",
}));

function Joinus() {
  return (
    <section
      style={{
        paddingTop: "100px",
        backgroundColor: "#FEF6F3",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid xs>
            <Item></Item>
          </Grid>
          <Grid item xs={11}>
            <Item>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "inika",
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                Join Us
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                accusamus blanditiis quo! Quis laudantium commodi pariatur ipsa!
                Quas suscipit facere illo id saepe. Quod minima, itaque facere
                dolores asperiores numquam.
              </Typography>
              {cardData.map((card) => {
                return (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: {
                          xs: "column",
                          md: "column",
                          lg: "row",
                        },
                        padding: "3rem",
                        gap: "2rem",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Card
                        style={{
                          width: "25rem",
                          backgroundColor: "transparent",
                          border: "none",
                        }}
                      >
                        <Card.Img
                          variant="top"
                          src={card.image}
                          style={{
                            borderRadius: "25px",
                          }}
                        />
                      </Card>
                      <Box
                        sx={{
                          display: "flex",
                          textAlign: {
                            md: "center",
                            lg: "left",
                          },
                          flexDirection: "column",
                          color: "black",
                          maxWidth: "50%",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Inria Serif",
                            fontWeight: "bold",
                            fontSize: "2rem",
                          }}
                        >
                          {card.title}
                        </Typography>
                        <Typography>{card.subtitle}</Typography>
                        <Button
                          sx={{
                            backgroundColor: "#FE5C33",
                            color: "white",
                            maxWidth: {
                              md: "none",
                              lg: "20%",
                            },
                            "&:hover": {
                              background: "#D87057",
                            },
                            marginTop: "10px",
                            borderRadius: "0",
                          }}
                        >
                          Read More
                        </Button>
                      </Box>
                    </Box>
                  </>
                );
              })}
            </Item>
          </Grid>
          <Grid item xs>
            <Item></Item>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
export default Joinus;
