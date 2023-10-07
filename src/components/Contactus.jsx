import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PlaceIcon from "@mui/icons-material/Place";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  paddingTop: "7rem",
  textAlign: "center",
  color: theme.palette.text.secondary,
  backgroundColor: "transparent",
  boxShadow: "none",
}));

const useStyles = makeStyles((theme) => ({
  Contactcontainer: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "10px",
    paddingLeft: "17rem",
  },
  Icon: {
    color: "#FE5C33",
    border: "1px solid black",
    borderRadius: "9px",
    marginRight: "1rem",
    width: "50px",
    height: "50px",
    lineHeight: "45px",
  },
  radioContainer: {
    textAlign: "left",
    marginRight: "227px",
    maxWidth: "227px",
  },
  message: {
    display: "flex",
    paddingTop: "10px",
    justifyContent: "left",
  },
}));

var ContactData = [
  {
    id: 1,
    icon: (
      <LocalPhoneIcon
        sx={{
          fontSize: "30px",
        }}
      />
    ),
    title: "Phone Number",
    content: "077 4588 754",
  },
  {
    id: 2,
    icon: (
      <AlternateEmailIcon
        sx={{
          fontSize: "30px",
        }}
      />
    ),
    title: "Email Address",
    content: "contact@fashioninsta.com",
  },
  {
    id: 3,
    icon: (
      <PlaceIcon
        sx={{
          fontSize: "30px",
        }}
      />
    ),
    title: "Location",
    content: "London, United Kingdom",
  },
];

function Contactus() {
  const classes = useStyles();
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
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                  <Grid xs={5}>
                    <Item>
                      {ContactData.map((contact) => {
                        return (
                          <>
                            <div
                              key={contact.id}
                              className={classes.Contactcontainer}
                            >
                              <div className={classes.Icon}>{contact.icon}</div>
                              <div className={classes.TextContainer}>
                                <Typography
                                  sx={{
                                    fontFamily: "Inria Serif",
                                    color: "black",
                                    textAlign: "left",
                                  }}
                                  className={classes.Title}
                                >
                                  {contact.title}
                                </Typography>
                                <Typography
                                  sx={{
                                    fontFamily: "Inria Serif",
                                    color: "black",
                                    textAlign: "left",
                                    fontWeight: "bold",
                                    fontSize: "1.2rem",
                                  }}
                                  className={classes.content}
                                >
                                  {contact.content}
                                </Typography>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </Item>
                  </Grid>
                  <Grid xs>
                    <Item xs={6}>
                      <div>
                        <Box
                          component="form"
                          sx={{
                            "& .MuiTextField-root": { m: 1, width: "40ch" },
                          }}
                          Validate
                          autoComplete="off"
                        >
                          <div style={{ display: "flex" }}>
                            <span
                              style={{
                                border: "1px solid gray",

                                marginRight: "10px",
                              }}
                            >
                              <TextField
                                id="standard-basic"
                                label={
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "20px",
                                    }}
                                  >
                                    First Name
                                  </span>
                                }
                                placeholder="Enter your name here"
                                variant="standard"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                            </span>
                            <span
                              style={{
                                border: "1px solid gray",
                              }}
                            >
                              <TextField
                                id="standard-basic"
                                label={
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "20px",
                                    }}
                                  >
                                    Last Name
                                  </span>
                                }
                                placeholder="Enter your name here"
                                variant="standard"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                            </span>
                          </div>
                          <div style={{ display: "flex", paddingTop: "10px" }}>
                            <span
                              style={{
                                border: "1px solid gray",

                                marginRight: "10px",
                              }}
                            >
                              <TextField
                                id="standard-basic"
                                label={
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "20px",
                                    }}
                                  >
                                    Email Address
                                  </span>
                                }
                                placeholder="Enter your email here"
                                variant="standard"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                            </span>
                            <span
                              style={{
                                border: "1px solid gray",
                              }}
                            >
                              <TextField
                                id="standard-basic"
                                label={
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "20px",
                                    }}
                                  >
                                    Phone Number
                                  </span>
                                }
                                placeholder="Enter your phone number here"
                                variant="standard"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                            </span>
                          </div>
                          <div style={{ display: "flex", paddingTop: "10px" }}>
                            <span
                              style={{
                                border: "1px solid gray",

                                marginRight: "10px",
                              }}
                            >
                              <TextField
                                id="standard-basic"
                                label={
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "20px",
                                    }}
                                  >
                                    Country
                                  </span>
                                }
                                placeholder="Enter your country here"
                                variant="standard"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                            </span>
                            <span
                              style={{
                                border: "1px solid gray",
                              }}
                            >
                              <FormControl
                                sx={{
                                  paddingLeft: "10px",
                                }}
                              >
                                <div className={classes.radioContainer}>
                                  <FormLabel
                                    id="demo-row-radio-buttons-group-label"
                                    sx={{
                                      textAlign: "left",
                                      fontWeight: "bold",
                                      fontSize: "15px",
                                    }}
                                  >
                                    Gender
                                  </FormLabel>
                                  <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                  >
                                    <FormControlLabel
                                      value="female"
                                      control={<Radio />}
                                      label="Female"
                                    />
                                    <FormControlLabel
                                      value="male"
                                      control={<Radio />}
                                      label="Male"
                                    />
                                  </RadioGroup>
                                </div>
                              </FormControl>
                            </span>
                          </div>
                          <div className={classes.message}>
                            <span
                              style={{
                                border: "1px solid gray",
                                paddingRight: "432px",
                              }}
                            >
                              <TextField
                                id="standard-multiline-static"
                                label={
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "20px",
                                    }}
                                  >
                                    Message
                                  </span>
                                }
                                placeholder="Tell us about your special requirements"
                                multiline
                                rows={4}
                                variant="standard"
                                InputLabelProps={{
                                  shrink: true,
                                }}
                              />
                            </span>
                          </div>
                          <div>
                            <Button
                              sx={{
                                backgroundColor: "#FE5C33",
                                display: "flex",
                                color: "white",
                                "&:hover": {
                                  background: "#D87057",
                                },
                                padding: "1rem 10rem 1rem 10rem",
                                marginTop: "40px",
                                borderRadius: "0",
                                justifyContent: "left",
                              }}
                            >
                              Submit
                            </Button>
                          </div>
                        </Box>
                      </div>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </Item>
          </Grid>
          <Grid xs>
            <Item></Item>
          </Grid>
        </Grid>
      </Box>
      <div
        style={{
          paddingBottom: "150px",
        }}
      ></div>
    </>
  );
}

export default Contactus;
