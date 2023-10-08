import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Form from "react-bootstrap/Form";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
  backgroundColor: "transparent",
  boxShadow: "none",
  marginTop: "1rem",
  marginBottom: "1rem",
}));

const useStyles = makeStyles((theme) => ({
  Email: {
    backgroundColor: "transparent",
    borderRadius: "35px",
    maxWidth: "25rem",
    border: "none",
  },

  LinkSocial: {
    textDecoration: "none",
    color: "white",
    border: "1px solid white",
    padding: "4px 10px 4px 10px",
    borderRadius: "35px",
  },
  Link: {
    textDecoration: "none",
    color: "white",
    textAlign: "left",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#320001",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs>
          <Item></Item>
        </Grid>
        <Grid item xs={11}>
          <Item>
            <div>
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={3}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Grid item xs={5}>
                    <Item>
                      <Typography
                        sx={{
                          fontSize: "2rem",
                          textAlign: "left",
                          fontFamily: "Noto Looped Thai",
                          maxWidth: "27rem",
                          marginBottom: "1rem",
                        }}
                      >
                        Having something to talk about our professionals?
                      </Typography>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              border: "1px solid white",
                              borderRadius: "35px",
                              maxWidth: "25rem",
                              "&::selection": {
                                backgroundColor: "transparent",
                              },
                            }}
                          >
                            <Form.Control
                              type="email"
                              placeholder="Enter email here"
                              className={classes.Email}
                            />

                            <IconButton
                              sx={{
                                backgroundColor: "#F15836",
                              }}
                            >
                              <ArrowOutwardIcon />
                            </IconButton>
                          </Form.Group>
                        </Form>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "7px",
                            paddingTop: "5rem",
                          }}
                        >
                          <Link className={classes.LinkSocial}>
                            <Typography
                              sx={{
                                fontFamily: "open sans",
                                fontWeight: "lighter",
                              }}
                            >
                              WhatsApp
                              <ArrowOutwardIcon />
                            </Typography>
                          </Link>
                          <Link className={classes.LinkSocial}>
                            <Typography
                              sx={{
                                fontFamily: "open sans",
                                fontWeight: "lighter",
                              }}
                            >
                              Email
                              <ArrowOutwardIcon />
                            </Typography>
                          </Link>
                          <Link className={classes.LinkSocial}>
                            <Typography
                              sx={{
                                fontFamily: "open sans",
                                fontWeight: "lighter",
                              }}
                            >
                              Twitter
                              <ArrowOutwardIcon />
                            </Typography>
                          </Link>
                          <Link className={classes.LinkSocial}>
                            <Typography
                              sx={{
                                fontFamily: "open sans",
                                fontWeight: "lighter",
                              }}
                            >
                              Instagram
                              <ArrowOutwardIcon />
                            </Typography>
                          </Link>
                        </div>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>
                      <Link className={classes.Link}>
                        <Typography
                          sx={{
                            marginBottom: "3rem",
                            fontFamily: "open sans",
                            fontWeight: "bold",
                          }}
                        >
                          Menu
                        </Typography>
                      </Link>
                      <Link className={classes.Link}>
                        <Typography
                          sx={{
                            marginBottom: "5px",
                            fontFamily: "open sans",
                            fontWeight: "lighter",
                          }}
                        >
                          About Us
                        </Typography>
                      </Link>{" "}
                      <Link className={classes.Link}>
                        <Typography
                          sx={{
                            marginBottom: "5px",
                            fontFamily: "open sans",
                            fontWeight: "lighter",
                          }}
                        >
                          Newsroom
                        </Typography>
                      </Link>{" "}
                      <Link className={classes.Link}>
                        <Typography
                          sx={{
                            marginBottom: "5px",
                            fontFamily: "open sans",
                            fontWeight: "lighter",
                          }}
                        >
                          Careers
                        </Typography>
                      </Link>{" "}
                      <Link className={classes.Link}>
                        <Typography
                          sx={{
                            marginBottom: "5px",
                            fontFamily: "open sans",
                            fontWeight: "lighter",
                          }}
                        >
                          Partnerships
                        </Typography>
                      </Link>
                    </Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>
                      <Link className={classes.Link}>
                        <Typography
                          sx={{
                            marginBottom: "3rem",
                            fontFamily: "open sans",
                            fontWeight: "bold",
                          }}
                        >
                          Get Help
                        </Typography>
                      </Link>{" "}
                      <Link className={classes.Link}>
                        <Typography
                          sx={{
                            marginBottom: "5px",
                            fontFamily: "open sans",
                            fontWeight: "lighter",
                          }}
                        >
                          Support Carrer
                        </Typography>
                      </Link>{" "}
                      <Link className={classes.Link}>
                        <Typography
                          sx={{
                            marginBottom: "5px",
                            fontFamily: "open sans",
                            fontWeight: "lighter",
                          }}
                        >
                          24h Service
                        </Typography>
                      </Link>{" "}
                      <Link className={classes.Link}>
                        <Typography
                          sx={{
                            marginBottom: "5px",
                            fontFamily: "open sans",
                            fontWeight: "lighter",
                          }}
                        >
                          Quick Chat
                        </Typography>
                      </Link>
                    </Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>
                      <Link className={classes.Link}>
                        <Typography
                          sx={{
                            marginBottom: "3rem",
                            fontFamily: "open sans",
                            fontWeight: "bold",
                          }}
                        >
                          Support
                        </Typography>
                      </Link>{" "}
                      <Link className={classes.Link}>
                        <Typography
                          sx={{
                            marginBottom: "5px",
                            fontFamily: "open sans",
                            fontWeight: "lighter",
                          }}
                        >
                          FAQ
                        </Typography>
                      </Link>{" "}
                      <Link className={classes.Link}>
                        <Typography
                          sx={{
                            marginBottom: "5px",
                            fontFamily: "open sans",
                            fontWeight: "lighter",
                          }}
                        >
                          Policy
                        </Typography>
                      </Link>{" "}
                      <Link className={classes.Link}>
                        <Typography
                          sx={{
                            marginBottom: "5px",
                            fontFamily: "open sans",
                            fontWeight: "lighter",
                          }}
                        >
                          Business
                        </Typography>
                      </Link>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </Item>
        </Grid>
        <Grid item xs>
          <Item></Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
