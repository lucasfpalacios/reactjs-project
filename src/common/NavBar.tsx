import { AppBar, Box, Button, Container, Grid, Stack, Toolbar, Typography } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"

export const NavBar: React.FC<{}> = () =>{
  const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography>
                  Codrr
                </Typography>
              </Grid>
              <Grid item>
                <Stack spacing={2} direction="row">
                  <Button variant="contained" onClick={()=> navigate("Login")}>
                  Login
                  </Button>
                  <Button variant="outlined">
                    Register
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  )
}