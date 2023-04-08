import * as React from "react";
import {useState} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import {useLocation, useNavigate} from "react-router-dom";
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

export default function Otp() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [Error, setError] = useState("");
    // var values = document.getElementById('res').value;
    //
    console.log(state);

    const formik = useFormik({
        initialValues: {
            otp: "",

        },
        onSubmit: (values) => {
            // console.log(props.value);

            let userotp = values.otp;
            let otp = state.otp;

            // console.log(userotp+" "+otp);


            if (otp == userotp) {
                axios.post( apiRoute + "user/create", {
                    state
                    })
                    .then(function (response) {
                        console.log("here");
                        let res = response.data;
                        navigate("/dashboard");
                    })
                    .catch(function (error) {
                        setError("User Exist");
                    });
            } else{
                console.log("Mismatch");
            setError("Mismatch");}
        }});

    return (
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
                        OTP Verification
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
                        <div className="text-danger mb-2">
                            {formik.touched.otp && formik.errors.otp}
                        </div>


                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Verify
                        </Button>
                        {Error}

                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}