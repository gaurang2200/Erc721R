import React from "react";
import { Box, Button, Link, Typography } from "@mui/material";

const Header = () => {
  return (
    <React.Fragment>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ py: 4, px: { md: 10, xs: 3 }, backgroundColor: "transparent" }}
      >
        <Link href="#" variant="inherit">
          <Typography variant="h4" fontWeight={600}>
            ERC721R
          </Typography>
        </Link>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "2em",
            p: "0.1em",
            background:
              "linear-gradient(135deg, #FA00FF, #896FBA, #ff00dc7d, #0EC9FF)",
          }}
        >
          <Typography
            variant="button"
            fontWeight={600}
            sx={{ background: "black", borderRadius: "2em", p: "0.5em 1em" }}
          >
            Connect <span style={{color: 'red'}}>&#8226;</span>
          </Typography>
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default Header;
