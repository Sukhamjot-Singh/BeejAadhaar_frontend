import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
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

  password: Yup.string().required("Password is required."),
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

export default function Login() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);

  //   axios
  //     .post("http://localhost:8080/api/users/login", {
  //       email: data.get("email"),
  //       password: data.get("password"),
  //     })
  //     .then(function (response) {
  //       console.log(response.data);
  //       let res = response.data;
  //       window.location.href = "/dashboard";
  //     })
  //     .catch(function (error) {
  //       // console.log(error);
  //       window.location.href = "/register";
  //     });

  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values.email);
      axios
        .post(apiRoute + "user/login", {
          email: values.email,
          password: values.password,
        })
        .then(function (response) {
          console.log(response.data);
          let res = response.data;
          window.location.href = "/dashboard";
        })
        .catch(function (error) {
          // console.log(error);
          window.location.href = "/register";
        });
    },
    validationSchema: validateForm,
  });

  return (
    <div
      style={{
        backgroundImage: 'url("https://wallpapercave.com/wp/wp7213366.jpg")',
      }}
    >
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                value={formik.values.email}
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <div className="text-danger mb-2">
                {formik.touched.email && formik.errors.email}
              </div>
              <TextField
                value={formik.values.password}
                onChange={formik.handleChange("password")}
                onBlur={formik.handleBlur("password")}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <div className="text-danger mb-2">
                {formik.touched.password && formik.errors.password}
              </div>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <a href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </a>
                </Grid>
              </Grid>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <a href="/emailforgot" variant="body2">
                    {"Forgotten Your Password?Click here"}
                  </a>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}
