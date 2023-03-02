import { Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import "./App.css";

function generateRandomPassword(length) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?<>,./-=";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
}

function App() {
  const [passwordLength, setPasswordLength] = useState(12);
  const [password, setPassword] = useState(
    generateRandomPassword(passwordLength)
  );
  const handlePasswordLength = (event) => {
    setPasswordLength(event.target.value);
  };
  const handleButtonClick = () => {
    setPassword(generateRandomPassword(passwordLength));
  };

  return (
    <Container maxWidth="sm">
      <h3>Strong Password Creator</h3>
      <TextField
        label="Password Length"
        type="number"
        value={passwordLength}
        onChange={handlePasswordLength}
        InputProps={{ inputProps: { min: 6, max: 50 } }}
        margin="normal"
        fullWidth
      ></TextField>
      <TextField label="Password" value={password} margin="normal" fullWidth />

      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Generate Password
      </Button>
    </Container>
  );
}

export default App;
