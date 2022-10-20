import { useState } from "react";
import Loading from "./Loading/Loading";
import Home from "./component/Home";
import { Box } from "@mui/material";
import "./App.css";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";

const style = {
  paddingLeft: "8px",
  padding: "10px",
  borderRadius: "10px",
  backgroundColor: "rgba(0,0,0, 0.2)",
  textShadow: "3px 3px rgba(50, 50, 70, 0.5)",
  boxShadow: "3px 3px rgba(0, 0, 0, 0.4)",
};

const style2 = {
  display: "flex",
  alignItems: "center",
  border: "1px solid #fff",
  padding: "5px",
  borderRadius: "10px",
  transition: "all 0.3s ease",
  marginBottom: "5px",
};

function App() {
  const [data, setTemp] = useState({});
  const [loading, setLoading] = useState(false);
  const [SearchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${SearchInput}&units=metric&APPID=88da68f4a9042932975056985cbadaf2`
      )
        .then((res) => res.json())
        .then((result) => {
          setTemp(result);
          setSearchInput("");
          setLoading(true);
          console.log(result);
        });
    }
  };
  return (
    <div className="App">
      <Box style={style} sx={{ width: { xs: "90%", sm: "70%" } }}>
        <Box style={style2} sx={{ "&:hover": { scale: "1.005" } }}>
          <SearchIcon />
          <InputBase
            fullWidth={true}
            placeholder="Search…"
            value={SearchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={handleSearch}
          />
        </Box>
        {loading === false ? <Loading /> : <Home data={data} />}
      </Box>
    </div>
  );
}

export default App;
