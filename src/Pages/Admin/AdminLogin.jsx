import { useInputValidation } from "6pp";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Container, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { whitePer } from "../../Constants/Color";


const isAdmin = true

const AdminLogin = () => {
  const secretKey = useInputValidation();
  
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Toggle the password visibility
  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  // Prevent the default action when mouse is down on the icon button
  const handleMouseDownPassword = (event) => event.preventDefault();

  if(isAdmin){
  return  <Navigate to="/admin/dashboard"/>
  }

  return (
    <div
      style={{
        backgroundImage: whitePer,
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography>Admin Dashboard</Typography>
          <form>
            <TextField
              required
              fullWidth
              label="Secret Key"
              type={showPassword ? "text" : "password"}  // Toggle between text and password
              margin="normal"
              variant="outlined"
              value={secretKey.value}
              onChange={secretKey.changeHandler}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              fullWidth
              color="primary"
              type="submit"
              sx={{ marginTop: "1rem" }}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;
