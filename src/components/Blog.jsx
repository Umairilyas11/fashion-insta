import React from "react";
import Card from "react-bootstrap/Card";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

var cardData = [
  {
    id: 1,
    image:
      "https://www.londonperfect.com/g/photos/upload/sml_56160603-1502116691-shopping-london.jpg",
    title: "Fashion Event Management",
    subtitle:
      " Fashion event management services specialise in organising fashion shows, product launches, and other f... ",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg",
    title: "Personal Styling",
    subtitle:
      " These services provide personalised fashion advice and styling guidance based on your preferences, body typ... ",
  },
  {
    id: 3,
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/12/19/15/istock-463173435.jpg",
    title: "Fashion Subscription Boxes",
    subtitle:
      " Subscription boxes like FabFitFun and Birchbox offer curated selections of fashion and beauty products deliv...  ",
  },
];

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  backgroundColor: "transparent",
  boxShadow: "none",
}));

const CardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "70px",
  flexWrap: "wrap",
}));

function Blog() {
  return (
    <section
      style={{
        paddingTop: "100px",
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
                {cardData.map((card) => {
                  return (
                    <div
                      style={{ backgroundColor: "#FEF6F3", padding: "10px" }}
                    >
                      <Card
                        style={{
                          width: "20rem",
                          display: "flex",
                          backgroundColor: "transparent",
                          border: "none",
                          fontFamily: "Inria Serif",
                        }}
                      >
                        <Card.Img
                          variant="top"
                          src={card.image}
                          alt={"Image " + card.id}
                          style={{
                            objectFit: "cover",
                            borderRadius: "15px",
                          }}
                        />
                        <Card.Body>
                          <Card.Title>{card.title}</Card.Title>
                          <Card.Text>{card.subtitle}</Card.Text>
                          <a
                            href="/"
                            style={{
                              color: "#FE5C33",
                            }}
                          >
                            Learn More
                          </a>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
              </CardContainer>
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

export default Blog;
