import React, { useState } from "react";
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
import "./styles.css";
import InputGroup from "react-bootstrap/InputGroup";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Item = styled(Paper)(({ theme }) => ({
  paddingTop: "7rem",
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
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Contactus() {
  const [validated, setValidated] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    gender: "",
    message: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const firstName = formData.firstName;
      setCustomerName(firstName);
      handleOpenSnackbar();
    }
    setValidated(true);
  };

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

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
                        );
                      })}
                    </Item>
                  </Grid>
                  <Grid xs>
                    <Item xs={6}>
                      <Form
                        className={classes.form}
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                      >
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
                              <InputGroup hasValidation>
                                <Form.Control
                                  placeholder="Enter your name here"
                                  className={classes.Placecon}
                                  required
                                  id="firstName"
                                  name="firstName"
                                  value={formData.firstName}
                                  onChange={handleInputChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                  Please enter your name.
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Col>
                            <Col
                              style={{
                                border: "1px solid black",
                              }}
                            >
                              <Form.Label className={classes.Labelcon}>
                                Last Name
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  placeholder="Enter your name here"
                                  className={classes.Placecon}
                                  required
                                  id="lastName"
                                  name="lastName"
                                  value={formData.lastName}
                                  onChange={handleInputChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                  Please enter your name.
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Col>
                          </Row>
                        </Form.Group>
                        <Form.Group>
                          <Row className={classes.Rowcon}>
                            <Col className={classes.Colcon}>
                              <Form.Label
                                className={`${classes.Labelcon} label`}
                              >
                                Email Address
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="email"
                                  placeholder="Enter your email here"
                                  className={classes.Placecon}
                                  required
                                  id="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                  Please enter your email.
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Col>

                            <Col
                              style={{
                                border: "1px solid black",
                              }}
                            >
                              <Form.Label className={classes.Labelcon}>
                                Phone Number
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  type="tel"
                                  placeholder="Enter your phone number here"
                                  style={{
                                    textAlign: "left",
                                  }}
                                  id="phoneNumber"
                                  name="phoneNumber"
                                  className={classes.Placecon}
                                  required
                                  pattern="[0-9]+"
                                  maxLength="10"
                                  minLength="10"
                                  value={formData.phoneNumber}
                                  onChange={handleInputChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                  Please enter your phone number.
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Col>
                          </Row>
                        </Form.Group>
                        <Form.Group>
                          <Row className={classes.Rowcon}>
                            <Col className={classes.Colcon}>
                              <Form.Label className={classes.Labelcon}>
                                Country
                              </Form.Label>
                              <InputGroup hasValidation>
                                <Form.Control
                                  placeholder="Enter your country here"
                                  className={classes.Placecon}
                                  required
                                  id="country"
                                  name="country"
                                  value={formData.country}
                                  onChange={handleInputChange}
                                />

                                <Form.Control.Feedback type="invalid">
                                  Please enter your country.
                                </Form.Control.Feedback>
                              </InputGroup>
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
                                  <InputGroup hasValidation>
                                    <Form.Check
                                      inline
                                      type="radio"
                                      label="Male"
                                      name="gender"
                                      id="male"
                                      required
                                      onChange={handleInputChange}
                                    />
                                    <Form.Check
                                      inline
                                      type="radio"
                                      label="Female"
                                      name="gender"
                                      id="female"
                                      required
                                      onChange={handleInputChange}
                                    />
                                  </InputGroup>
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
                                  <InputGroup hasValidation>
                                    <Form.Control
                                      as="textarea"
                                      rows={3}
                                      placeholder="Tell us about your special requirements"
                                      style={{
                                        border: "none",
                                        borderRadius: "0",
                                      }}
                                      id="message"
                                      name="message"
                                      required
                                      value={formData.message}
                                      onChange={handleInputChange}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      Please write your message.
                                    </Form.Control.Feedback>
                                  </InputGroup>
                                </Form.Group>
                              </Col>
                            </Row>
                          </Form.Group>
                          <Button
                            type="submit"
                            onClick={handleSubmit}
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
                          <Snackbar
                            open={openSnackbar}
                            autoHideDuration={5000}
                            onClose={handleCloseSnackbar}
                          >
                            <Alert severity="success" sx={{ width: "100%" }}>
                              Thank you, {customerName}
                            </Alert>
                          </Snackbar>
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
