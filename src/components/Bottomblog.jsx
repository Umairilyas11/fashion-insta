import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Card from "react-bootstrap/Card";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  backgroundColor: "transparent",
  boxShadow: "none",
  marginBottom: "10rem",
}));

const useStyles = makeStyles((theme) => ({
  overlay: {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: "0.5px",
    border: "solid",
  },
  Imgtext: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#fff",
  },
  btn: {
    position: "absolute",
    bottom: "10px",
    right: "10px",
  },
  cardImage: {
    maxWidth: "100%",
    height: "auto",
  },
}));

function Bottomblog() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1, paddingTop: "10rem" }}>
      <Grid container spacing={3}>
        <Grid item xs>
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
              Explore Our Blog
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
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  lg: "row",
                },
                justifyContent: "center",
                paddingTop: "2rem",
                alignItems: "center",
              }}
            >
              <div>
                <Card
                  style={{
                    width: "25rem",
                    marginBottom: "50px",
                    border: "none",
                  }}
                >
                  <div className={classes.overlay}></div>
                  <Card.Img
                    variant="top"
                    src="https://cdn.vox-cdn.com/thumbor/I2FdOIG6AxPKL47qs5mLdTW_8Sc=/0x0:3000x2002/1200x800/filters:focal(1260x761:1740x1241)/cdn.vox-cdn.com/uploads/chorus_image/image/47638925/shutterstock_307344794.0.jpg"
                    style={{
                      borderRadius: "0",
                    }}
                  />
                  <div className={classes.Imgtext}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "Inria Serif",
                      }}
                    >
                      Clothing
                    </Typography>
                  </div>
                  <div className={classes.btn}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "black",
                        borderRadius: "0",
                      }}
                    >
                      Explore
                    </Button>
                  </div>
                </Card>
                <Card
                  style={{
                    width: "25rem",
                    marginBottom: "10px",
                    border: "none",
                  }}
                >
                  <div className={classes.overlay}></div>
                  <Card.Img
                    variant="top"
                    src="https://cdn.shopify.com/s/files/1/0071/7406/2170/files/accessories-blog_1024x1024.jpg?v=1584702437"
                    style={{
                      borderRadius: "0",
                    }}
                    className={classes.cardImage}
                  />
                  <div className={classes.Imgtext}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "Inria Serif",
                      }}
                    >
                      Fashion Accessories
                    </Typography>
                  </div>
                  <div className={classes.btn}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "black",
                        borderRadius: "0",
                      }}
                    >
                      Explore
                    </Button>
                  </div>
                </Card>
              </div>

              <div
                style={{
                  marginLeft: "10px",
                }}
              >
                <Card
                  style={{
                    maxWidth: "25rem",
                    marginBottom: "50px",
                    border: "none",
                  }}
                >
                  <div className={classes.overlay}></div>
                  <Card.Img
                    variant="top"
                    src="https://i0.wp.com/textilelearner.net/wp-content/uploads/2017/10/Fashion-Design-Tools-min.jpg?fit=612%2C408&ssl=1"
                    style={{ borderRadius: "0" }}
                    className={classes.cardImage}
                  />
                  <div className={classes.Imgtext}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "Inria Serif",
                      }}
                    >
                      Fashion Designing
                    </Typography>
                  </div>
                  <div className={classes.btn}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "black",
                        borderRadius: "0",
                      }}
                    >
                      Explore
                    </Button>
                  </div>
                </Card>
                <Card
                  style={{
                    width: "25rem",
                    border: "none",
                    marginBottom: "10px",
                  }}
                >
                  <div className={classes.overlay}></div>
                  <Card.Img
                    variant="top"
                    src="https://cdn.britannica.com/35/222035-050-C68AD682/makeup-cosmetics.jpg"
                    style={{
                      borderRadius: "0",
                    }}
                    className={classes.cardImage}
                  />
                  <div className={classes.Imgtext}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "Inria Serif",
                      }}
                    >
                      Cosmetics
                    </Typography>
                  </div>
                  <div className={classes.btn}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "black",
                        borderRadius: "0",
                      }}
                    >
                      Explore
                    </Button>
                  </div>
                </Card>
              </div>
              <div
                style={{
                  paddingLeft: "10px",
                }}
              >
                <Card
                  style={{
                    width: "25rem",
                    marginRight: "10px",
                    border: "none",
                  }}
                >
                  <div className={classes.overlay}></div>
                  <Card.Img
                    variant="top"
                    src="https://miro.medium.com/v2/resize:fit:1200/0*JQGt5cN0oZbo4uLV.jpg"
                    style={{
                      borderRadius: "0",
                    }}
                    className={classes.cardImage}
                  />
                  <div className={classes.Imgtext}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "Inria Serif",
                      }}
                    >
                      Modeling
                    </Typography>
                  </div>
                  <div className={classes.btn}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "black",
                        borderRadius: "0",
                      }}
                    >
                      Explore
                    </Button>
                  </div>
                </Card>
              </div>
            </Box>
          </Item>
        </Grid>
        <Grid item xs>
          <Item></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Bottomblog;
