import React, { useState } from 'react';
import { Container, Paper, TextField, Typography, Button, Stack, Avatar, IconButton, InputAdornment } from '@mui/material';
import { CameraAlt as CameraAltIcon, Visibility, VisibilityOff } from "@mui/icons-material";
import { VisuallyHiddenInput } from '../Components/Styles/StyleComponents';
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { usernameValidators } from '../utils/Validators';
import { whitePer } from '../Constants/Color';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin((prev) => !prev);
  
  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidators);
  const password = useStrongPassword();
  const avatar = useFileHandler("single");

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Toggle the password visibility
  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  // Prevent the default action when mouse is down on the icon button
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleSignup = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ backgroundImage: whitePer }}>
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {isLogin ? (
            <>
              <Typography variant="h5">Login</Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onSubmit={handleLogin}
              >
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type={showPassword ? "text" : "password"}  // Toggle between text and password
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
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
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "1rem",
                  }}
                >
                  OR
                </Typography>
                <Button fullWidth onClick={toggleLogin}>
                  Sign Up Instead
                </Button>
              </form>
            </>
          ) : (
            <>
              <Stack
                position={'relative'}
                width={"10rem"}
                margin={"auto"}
                alignItems="center"
              >
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                  src={avatar.preview}
                />
                {avatar.error && (
                  <Typography m={"1rem auto"} width={"fit-content"} display={"block"} color="error" variant='caption'>
                    {avatar.error}
                  </Typography>
                )}
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                  }}
                  component="label"
                >
                  <CameraAltIcon />
                  <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                </IconButton>
              </Stack>
              <Typography variant="h5" sx={{ marginTop: "1rem" }}>Sign Up</Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onSubmit={handleSignup}
              >
                <TextField
                  required
                  fullWidth
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  value={name.value}
                  onChange={name.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Bio"
                  margin="normal"
                  variant="outlined"
                  value={bio.value}
                  onChange={bio.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                />
                {username.error && (
                  <Typography color="error" variant='caption'>
                    {username.error}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type={showPassword ? "text" : "password"}  // Toggle between text and password
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
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
                {password.error && (
                  <Typography color="error" variant='caption'>
                    {password.error}
                  </Typography>
                )}
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  type="submit"
                  sx={{ marginTop: "1rem" }}
                >
                  Sign Up
                </Button>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "1rem",
                  }}
                >
                  OR
                </Typography>
                <Button fullWidth onClick={toggleLogin}>
                  Login Instead
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
