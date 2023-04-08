import * as React from "react";
import { useState, initState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Otp from "../components/otp";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const apiRoute = "https://beejaadhaarbackend.onrender.com/";

//form validation
const validateForm = Yup.object({
  email: Yup.string()
    .required("Email is required.")
    .matches("[a-z0-9]+@[a-z]+.[a-z]{2,3}", "Email is not valid!"),
});

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Beej Aadhar
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Emailforgot() {
  const navigate = useNavigate();

  //   axios
  //     .post("http://localhost:8080/api/users/register", {
  //       email: data.get("email"),
  //       password: data.get("password"),
  //       firstname: data.get("firstName"),
  //       lastname: data.get("lastName"),
  //     })
  //     .then(function (response) {
  //       console.log(response.data);
  //       let res = response.data;
  //       window.location.href = "/login";
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // console.log({
  //   email: data.get("email"),
  //   password: data.get("password"),
  // });
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values.email);
      axios
        .post(apiRoute + "user/otp", {
          email: values.email,
          password: "",
          firstname: "",
          lastname: "",
        })
        .then(function (response) {
          // console.log("res:"+response.data.email);
          let res = response.data;
          console.log(res);
          navigate("/forgot", { state: res });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    validationSchema: validateForm,
  });

  return (
    <div
      style={{
        backgroundImage:
          'url("https://hougumlaw.com/wp-content/uploads/2016/05/light-website-backgrounds-light-color-background-images-light-color-background-images-for-website-1024x640.jpg")',
      }}
    >
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Enter Email
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={formik.handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid>
                  <Grid item>
                    <TextField
                      value={formik.values.email}
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                    <div className="text-danger mb-2">
                      {formik.touched.email && formik.errors.email}
                    </div>
                  </Grid>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => {}}
                  >
                    Submit
                  </Button>

                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="/login" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}
