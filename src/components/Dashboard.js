import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import ForestIcon from "@mui/icons-material/Forest";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import image from "./2.jpg";

const apiRoute = "https://beejaadhaarbackend.onrender.com/";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Beej-Aadhar
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Dashboard() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    axios
      .get(apiRoute + "crop/", {})
      .then(function (response) {
        setRes(response.data);
        // setRes(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(res);

  const [crop, setCrop] = useState({
    cropname: "",
    seller: "",
    price: 0,
    weight: 0,
  });

  const navigate = useNavigate();
  const handleOnClickLogout = () => navigate('/');


  function handleChange(e) {
    console.log(e.target);
    const newCrop = { ...crop };
    newCrop[e.target.id] = e.target.value;
    setCrop(newCrop);
    console.log(newCrop);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(crop);
    axios
    .post( apiRoute + "crop/add", crop)
    .then(function (response) {
      window.location.reload();
      })
    .catch(function (error) {
        console.log(error);
      });
  }

  function deleteCrop(crop) {
    axios
    .post( apiRoute + "crop/delete", {_id: crop._id})
    .then(function (response) {
      window.location.reload();
      })
    .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/207247/pexels-photo-207247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar color="success" position="relative">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <ForestIcon sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" position="center" noWrap>
              Beej Aadhar
            </Typography>
            <Button color="inherit" onClick={handleOnClickLogout}>Logout</Button>
          </Toolbar>
        </AppBar>

        <main>
          {/* Hero unit */}
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              id="cropname"
              onChange={(e) => handleChange(e)}
              placeholder="cropname"
              value={crop.cropname}
              type="text"
            ></input>
            <input
              id="seller"
              onChange={(e) => handleChange(e)}
              placeholder="seller"
              value={crop.seller}
              type="text"
            ></input>
            <input
              id="price"
              onChange={(e) => handleChange(e)}
              placeholder="price"
              value={crop.price}
              type="number"
            ></input>
            <input
              id="weight"
              onChange={(e) => handleChange(e)}
              placeholder="weight"
              value={crop.weight}
              type="number"
            ></input>
            <button type="submit">Add Crop</button>
          </form>
          <Container sx={{ py: 12 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {res.map((card) => (
                <Grid item key={card._id} xs={12} sm={6} md={4}>
                  <Card sx={{ height: "100%", flexDirection: "column" }}>
                    <CardMedia
                      component="img"
                      sx={{
                        // 16:9
                        pt: "0.25%",
                      }}
                      image={image}
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.cropname}
                      </Typography>
                      <Typography>
                        Price: <b>{card.price}</b> Rs.
                        <br />
                        Seller: <b>{card.seller}</b>
                        <br />
                        Weight: <b>{card.weight}</b>kg
                        <br />
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">View</Button>
                      <Button size="small">Edit</Button>
                      <Button size="small" onClick = {() => deleteCrop(card)}>Delete</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        {/* Footer */}

        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
        {/* End footer */}
      </ThemeProvider>
    </div>
  );
}
