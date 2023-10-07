import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",

  backgroundColor: "transparent",
  boxShadow: "none",
}));

function Imgcollege() {
  return (
    <section
      style={{
        paddingTop: "100px",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
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
                  maxWidth: "45%",
                  margin: "auto",
                }}
              >
                Fashion Collection That You Will Love
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
              <Box>
                <Grid
                  container
                  spacing={0.5}
                  direction="row-reverse"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={1}>
                    <Item>
                      <img
                        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src="https://cdn.shopify.com/s/files/1/0012/7339/7332/files/Summer_Outfit_Formulas_Men_9_1024x1024.jpg"
                        alt="123"
                        loading="lazy"
                        style={{
                          borderRadius: "10px",
                          maxWidth: "154px",
                          maxHeight: "395px",
                        }}
                      />
                    </Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>
                      <img
                        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src="https://www.bellanaija.com/wp-content/uploads/2023/03/IMG_6033-scaled.jpeg"
                        alt="123"
                        loading="lazy"
                        style={{
                          borderRadius: "10px",
                          Height: "168px",
                          maxWidth: "224px",
                          objectFit: "cover",
                        }}
                      />
                      <div style={{ padding: "15px" }}></div>
                      <img
                        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src="https://www.realmenrealstyle.com/wp-content/uploads/2023/04/Charcoal-Gray-Suit.jpg"
                        alt="123"
                        loading="lazy"
                        style={{
                          borderRadius: "10px",
                          height: "262px",
                          maxWidth: "224px",
                          objectFit: "cover",
                        }}
                      />
                    </Item>
                  </Grid>
                  <Grid item xs={5}>
                    <Item>
                      <img
                        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src="https://www.thefashionisto.com/wp-content/uploads/2022/07/Brunello-Cucinelli-Collection-Men-Spring-Summer-2023-Lookbook-016.jpg"
                        alt="123"
                        loading="lazy"
                        style={{
                          borderRadius: "10px",
                          maxHeight: "455px",
                          overflow: "hidden",
                          position: "relative",
                        }}
                      />
                    </Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>
                      <img
                        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src="https://www.alpineswiss.com/product_images/uploaded_images/men-s-leather-jacket.jpg"
                        alt="123"
                        loading="lazy"
                        style={{
                          borderRadius: "10px",
                          Height: "177px",
                          maxWidth: "224px",
                          objectFit: "cover",
                        }}
                      />
                      <div style={{ padding: "15px" }}></div>
                      <img
                        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src="https://media.blogto.com/articles/20180911-CourageMyLove16.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70"
                        alt="123"
                        loading="lazy"
                        style={{
                          borderRadius: "10px",
                          height: "262px",
                          maxWidth: "224px",
                          objectFit: "cover",
                        }}
                      />
                    </Item>
                  </Grid>
                  <Grid item xs={1}>
                    <Item>
                      <img
                        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src="https://cdn.shopify.com/s/files/1/0162/2116/files/5_COOL_STREET_STYLE_LOOKS_TO_LOOK_SHARP_5.jpg?v=1542779353"
                        alt="123"
                        loading="lazy"
                        style={{
                          borderRadius: "10px",
                          maxWidth: "154px",
                          maxHeight: "395px",
                        }}
                      />
                    </Item>
                  </Grid>
                </Grid>
              </Box>
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

export default Imgcollege;
