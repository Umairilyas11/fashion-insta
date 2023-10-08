import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PlaceIcon from "@mui/icons-material/Place";
import { makeStyles } from "@mui/styles";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Item = styled(Paper)(({ theme }) => ({
  paddingTop: "7rem",
  // textAlign: "center",
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
    paddingLeft: "5rem",
  },
  Icon: {
    color: "#FE5C33",
    border: "1px solid black",
    borderRadius: "9px",
    marginRight: "1rem",
    width: "50px",
    height: "50px",
    lineHeight: "45px",
    textAlign: "center",
  },

  form: {
    width: "100%",
    margin: "auto",
    padding: "auto",
    maxWidth: "800px",
    display: "flexbox",
  },
  Rowcon: {
    marginBottom: "20px",
  },
  Colcon: {
    border: "1px solid black",
    marginRight: "20px",
  },
  Labelcon: {
    paddingLeft: "12px",
    marginTop: "5px",
    fontFamily: "Inria Serif",
    fontWeight: "bold",
    color: "black",
  },
  Placecon: {
    border: "none",
    borderRadius: "0",
    fontFamily: "Inria Serif",
    color: "gray",
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
      <Box sx={{ flexGrow: 1, width: "100%" }}>
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
                  textAlign: "center",
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
                  textAlign: "center",
                }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
                explicabo tempore, saepe natus commodi sunt repellendus
                molestiae id esse totam qui minus corrupti? Consequuntur vero
                nihil quas beatae sit laudantium.
              </Typography>

              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                  <Grid xs={4}>
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
                      <Form className={classes.form}>
                        <Form.Group>
                          <Row className={classes.Rowcon}>
                            <Col className={classes.Colcon}>
                              <Form.Label
                                style={{
                                  paddingLeft: "12px",
                                  marginTop: "5px",
                                }}
                                className={classes.Labelcon}
                              >
                                First Name
                              </Form.Label>
                              <Form.Control
                                placeholder="Enter your name here"
                                className={classes.Placecon}
                              />
                            </Col>
                            <Col
                              style={{
                                border: "1px solid black",
                              }}
                            >
                              <Form.Label className={classes.Labelcon}>
                                Last Name
                              </Form.Label>
                              <Form.Control
                                placeholder="Enter your name here"
                                className={classes.Placecon}
                              />
                            </Col>
                          </Row>
                        </Form.Group>
                        <Form.Group>
                          <Row className={classes.Rowcon}>
                            <Col className={classes.Colcon}>
                              <Form.Label className={classes.Labelcon}>
                                Email Address
                              </Form.Label>
                              <Form.Control
                                placeholder="Enter your email here"
                                className={classes.Placecon}
                              />
                            </Col>

                            <Col
                              style={{
                                border: "1px solid black",
                              }}
                            >
                              <Form.Label className={classes.Labelcon}>
                                Phone Number
                              </Form.Label>
                              <Form.Control
                                placeholder="Enter your phone number here"
                                style={{
                                  textAlign: "left",
                                }}
                                className={classes.Placecon}
                              />
                            </Col>
                          </Row>
                        </Form.Group>
                        <Form.Group>
                          <Row className={classes.Rowcon}>
                            <Col className={classes.Colcon}>
                              <Form.Label className={classes.Labelcon}>
                                Country
                              </Form.Label>
                              <Form.Control
                                placeholder="Enter your country here"
                                className={classes.Placecon}
                              />
                            </Col>
                            <Col
                              style={{
                                border: "1px solid black",
                              }}
                            >
                              <Form.Group
                                className="mb-3"
                                style={{
                                  display: "inline",
                                  justifyContent: "left",
                                  alignItems: "center",
                                  textAlign: "left",
                                  paddingLeft: "12px",
                                }}
                              >
                                <Form.Label sm={1} className={classes.Labelcon}>
                                  Gender
                                </Form.Label>
                                <Col
                                  sm={10}
                                  style={{
                                    paddingLeft: "12px",
                                  }}
                                >
                                  <Form.Check
                                    inline
                                    type="radio"
                                    label="first radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                  />
                                  <Form.Check
                                    inline
                                    type="radio"
                                    label="second radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                  />
                                </Col>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Form.Group>
                            <Row>
                              <Col
                                style={{
                                  border: "1px solid black",
                                }}
                              >
                                <Form.Group
                                  className="mb-3"
                                  controlId="exampleForm.ControlTextarea1"
                                >
                                  <Form.Label className={classes.Labelcon}>
                                    Message
                                  </Form.Label>
                                  <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Tell us about your special requirments"
                                    style={{
                                      border: "none",
                                      borderRadius: "0",
                                    }}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                          </Form.Group>
                          <Button
                            style={{
                              marginTop: "30px",
                              borderRadius: "0",
                              backgroundColor: "#FE5C33",
                              border: "0",
                              padding: "15px 8rem 15px 8rem ",
                            }}
                          >
                            Submit
                          </Button>
                        </Form.Group>
                      </Form>
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
