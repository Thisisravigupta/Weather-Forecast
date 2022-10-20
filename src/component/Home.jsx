import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import { CloudQueue, ThunderstormTwoTone } from "@mui/icons-material";
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

let data = {
  coord: {
    lon: 77.2167,
    lat: 28.6667,
  },
  weather: [
    {
      id: 721,
      main: "Haze",
      description: "haze",
      icon: "50n",
    },
  ],
  base: "stations",
  main: {
    temp: 30.05,
    feels_like: 29.42,
    temp_min: 30.05,
    temp_max: 30.05,
    pressure: 1013,
    humidity: 37,
  },
  visibility: 4000,
  wind: {
    speed: 1.54,
    deg: 140,
  },
  clouds: {
    all: 40,
  },
  dt: 1666269094,
  sys: {
    type: 1,
    id: 9165,
    country: "IN",
    sunrise: 1666227278,
    sunset: 1666268221,
  },
  timezone: 19800,
  id: 1273294,
  name: "Delhi",
  cod: 200,
};
const Home = ({ data }) => {
  // console.log(data);

  let extraData = {
    "Min Temp": data.main.temp_min,
    Wind: data.wind.speed,
    Pressure: data.main.pressure,
    Humidity: data.main.humidity,
    Clouds: data.clouds.all,
    feelslike: data.main.feels_likelike,
    Visibility: data.visibility,
    "Max Temp": data.main.temp_max,
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
          <CloudQueue sx={{ fontSize: '100px'}}/>
          <Typography variant="h6" sx={{ textShadow: "none" }}>
            {data.weather[0].main}
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "50px", sm: "90px" } }}
          >
            {Math.round(data.main.temp)}&#176;C
          </Typography>
          <Typography variant="h6">
            {data.name}, {data.sys.country}
          </Typography>
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
