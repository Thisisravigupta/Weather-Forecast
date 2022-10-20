import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import { ThunderstormTwoTone } from "@mui/icons-material";
import { keyframes } from "@mui/system";

const move = keyframes`
  0% {
    transform: translateX(-25px);
  }
  50% {
    transform: translateX(15px);
  }
  100% {
    transform: translateX(-25px);
  }
`;

const style = {
  display: "flex",
  width: "90%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  margin: "20px",
  transition: "all 0.5s linear",
};

const style2 = {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  backgroundColor: "rgba(255,255,255,0.3)",
  borderRadius: "10px",
  animation: `${move} 1s infinite ease`,
};

const styleMain = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const extraDataStyle = {
  backgroundColor: "rgba(255,255,255,0.5)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "10px",
  padding: "5px 8px",
  textShadow: "2px 2px rgba(50, 50, 70, 0.5)",
  marginTop: "25px",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

const Home = ({ data }) => {
  // console.log(data);

  let extraData = {
    Wind: data.current.wind_speed,
    Pricip: data.current.precip,
    Pressure: data.current.pressure,
    Humidity: data.current.humidity,
    Cloudcover: data.current.cloudcover,
    feelslike: data.current.feelslike,
    "Uv Index": data.current.uv_index,
    Visibility: data.current.visibility,
  };

  return (
    <Box style={styleMain}>
      <Box
        display="flex"
        width="100%"
        justifyContent="space-between"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Box style={style} sx={{ animation: `${move} 2s infinite linear` }}>
          <ThunderstormTwoTone
            sx={{ fontSize: { xs: "100px", sm: "200px" } }}
          />
        </Box>
        <Box style={style2}>
          <CardMedia
            component="img"
            sx={{ width: "100px", borderRadius: "10px" }}
            image={data.current.weather_icons[0]}
          />
          <Typography variant="h6" sx={{ textShadow: "none" }}>
            {data.current.weather_descriptions[0]}
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: "50px", sm: "90px" } }}>
            {data.current.temperature}&#176;C
          </Typography>
          <Typography variant="h6">{data.request.query}</Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        width="100%"
        marginTop="10px"
        sx={{
          borderTop: "2px solid rgba(255,255,255,0.5)",
        }}
      >
        {Object.entries(extraData).map(([key, value]) => {
          return (
            <Box
              style={extraDataStyle}
              key={key}
              sx={{ "&:hover": { scale: "1.05" } }}
            >
              <Typography fontWeight={500}>{key}</Typography>
              <Typography>{value}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Home;
