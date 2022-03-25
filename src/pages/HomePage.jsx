import React from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import heroImage from '../images/img1.svg';

const HomePage = () => {
  return (
    <React.Fragment>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ mx: { md: "5em", sm:"3em", xs:"1em" } }}
      >
        <img src={heroImage} />
        <Typography align="center" variant="h2" gutterBottom fontWeight={700} sx={{mt: 4}}>
          ERC721R
        </Typography>
        <Typography align="center" variant="h3" gutterBottom fontWeight={600}>
          A new way of launching NFT collections
        </Typography>
        <Typography align="center" vairant="body1" gutterBottom component="div" sx={{ my: 3 }}>
          ERC271R is a sprint nft launcher contract through which you can launch a refundable NFT
          <br /> collection and also reward the early minters
        </Typography>
        <Button className="btn" sx={{ p: "0.8em 3em" }}>
          <Typography variant="button">Get Started</Typography>
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default HomePage;
