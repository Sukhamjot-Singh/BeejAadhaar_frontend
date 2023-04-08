import * as React from "react";
import {useState} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import {useLocation} from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";


//form validation
const apiRoute = "https://beejaadhaarbackend.onrender.com/";


const theme = createTheme();

function ForgotPassword() {
    const { state } = useLocation();
    let email=state.email;
    let otp=state.otp;




    // var values = document.getElementById('res').value;
    //

    const[Error, setError] = useState("");
    const formik = useFormik({
        initialValues: {
            otp: "",
            password:""

        },
        onSubmit: (values) => {
            // console.log(props.value);
            let password=values.password;
            let userotp = values.otp;
            let otp = state.otp;
            let email=state.email;

            // console.log(userotp+" "+otp);


            if (otp === userotp) {
                axios.post( apiRoute + "user/passwordChange", {
                    email:email,
                    password:password,
                })
                    .then(function (response) {
                        console.log(response.data);
                        let res = response.data;
                        window.location.href = "/dashboard";
                    })
                    .catch(function (error) {

                        window.location.href = "/register";
                    });
            } else
                setError("Mismatch");
        }});

    return (<div style={{backgroundImage:'url("https://hougumlaw.com/wp-content/uploads/2016/05/light-website-backgrounds-light-color-background-images-light-color-background-images-for-website-1024x640.jpg")'}} >
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
                        Forget Password
                    </Typography>

                    <Box
                        component="form"
                        onSubmit={formik.handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            value={formik.values.otp}
                            onChange={formik.handleChange("otp")}
                            onBlur={formik.handleBlur("otp")}
                            margin="normal"
                            required
                            fullWidth
                            id="otp"
                            label="otp"
                            name="otp"
                            autoComplete="otp"
                            autoFocus
                        />
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
                        <TextField
                            value={formik.values.password}
                            onChange={formik.handleChange("confirm_password")}
                            onBlur={formik.handleBlur("confirm_password")}
                            margin="normal"
                            required
                            fullWidth
                            name="confirm_password"
                            label="confirm_password"
                            type="password"
                            id="confirm_password"
                            autoComplete="current-password"
                        />
                        <div className="text-danger mb-2">
                            {formik.touched.otp && formik.errors.otp}
                        </div>
                        {Error}


                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Update
                        </Button>


                    </Box>
                </Box>

            </Container>
        </ThemeProvider></div>
    );
}
export default ForgotPassword;