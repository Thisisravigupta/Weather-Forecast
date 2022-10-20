import { Box } from "@mui/material";
import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <ReactLoading
        type="spinningBubbles"
        color="#0000FF"
        height={100}
        width={50}
      />
    </Box>
  );
};

export default Loading;
