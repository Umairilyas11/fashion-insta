import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Form from "react-bootstrap/Form";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",

  //   backgroundColor: "transparent",
  //   boxShadow: "none",
}));

function Footer() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#320001" }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item></Item>
        </Grid>
        <Grid item xs={11}>
          <Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                  <Grid item xs={5}>
                    <Item>
                      <Typography>
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
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <Form.Control
                              type="email"
                              placeholder="Enter email here"
                            />
                            <Button
                              variant="contained"
                              startIcon={<ArrowOutwardIcon />}
                            ></Button>
                          </Form.Group>
                        </Form>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <Typography>
                            WhatsApp
                            <ArrowOutwardIcon />
                          </Typography>
                          <Typography>
                            WhatsApp
                            <ArrowOutwardIcon />
                          </Typography>
                          <Typography>
                            WhatsApp
                            <ArrowOutwardIcon />
                          </Typography>
                          <Typography>
                            WhatsApp
                            <ArrowOutwardIcon />
                          </Typography>
                        </div>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>xs=2</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>xs=2</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>xs=2</Item>
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
