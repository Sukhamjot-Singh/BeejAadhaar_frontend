
import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from "./Card";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ForestIcon from "@mui/icons-material/Forest";

const theme = createTheme();

function Home() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar  color="success" position="relative">
                <Toolbar>
                    <ForestIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" position="center" noWrap>
                        Beej Aadhar
                    </Typography>
                </Toolbar>
            </AppBar>
            <main height="150px">
                {/* Hero unit */}

                    <Container maxWidth="sm" >
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Beej Aadhar
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Something short and leading about the collection below—its contents,
                            the creator, etc. Make it short and sweet, but not too short so folks
                            don&apos;t simply skip over it entirely.
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <a href = "/login" style={{textDecoration: "none"}}><Button variant="contained">Sign In</Button></a>
                            <a href="/register" style={{textDecoration: "none"}}><Button variant="outlined">Sign Up</Button></a>
                        </Stack>
                    </Container>

            </main>
        </ThemeProvider>


    );
}

export default Home;