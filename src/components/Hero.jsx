import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Typography } from "@mui/material";

var heroData = [
  {
    id: 1,
    image: require("../components/Images/image_1.jpg"),
    title: "FASHIONINSTA1",
    subtitle: "Your Fashion Brand",
  },
  {
    id: 2,
    image: require("../components/Images/image_2.jpg"),
    title: "FASHIONINSTA2",
    subtitle: "Your Fashion Brand",
  },
  {
    id: 3,
    image: require("../components/Images/image_3.jpg"),
    title: "FASHIONINSTA3",
    subtitle: "Your Fashion Brand",
  },
];

function AppHero() {
  return (
    <section className="hero-block">
      <Carousel>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id} sx={{ position: "relative" }}>
              <img
                className="d-block w-100"
                src={hero.image}
                alt={"Slide" + hero.id}
                style={{
                  maxHeight: "900px",
                  width: "100%",
                }}
              />

              <div className="carousel-text">
                <Typography
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    padding: "20px",
                    color: "white",
                    textAlign: "center",
                    maxWidth: "80%",
                    fontFamily: "Inria Serif",
                    fontSize: {
                      xs: "2rem",
                      sm: "4rem",
                      md: "6rem",
                      lg: "8rem",
                    },
                  }}
                >
                  {hero.title}
                </Typography>
                <Typography
                  sx={{
                    position: "absolute",
                    top: "60%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    padding: "20px",
                    color: "white",
                    textAlign: "center",
                    maxWidth: "80%",
                    fontFamily: "Inria Serif",
                    fontSize: {
                      xs: "15px",
                      sm: "20px",
                      md: "25px",
                      lg: "30px",
                    },
                  }}
                >
                  {hero.subtitle}
                </Typography>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

export default AppHero;
