import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import api from "../../Api";

export default function SignUpMaterial() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function sendForm(event){
    event.preventDefault();

    if(password !== confirmPassword){
      console.log("Passwords diferentes");
    } else if (password.length < 6 || username.length < 5){
      console.log("Username ou Password muito curtos");
    } else {
      let response = await api.register(username, password);

      if(response){
        console.log("Usuário registrado");
      } else {
        console.log("Usuário não registrado");
      }  
    }
  }

  function handleUsername(event){
    setUsername(event.target.value);
  }

  function handlePassword(event){
    setPassword(event.target.value);
  }

  function handleConfirmPassword(event){
    setConfirmPassword(event.target.value);
  }

  return (
      <Box component="form" onSubmit={sendForm} sx={{display: "flex", flexDirection="column", width="100%", justifyContent="center", alignItems="center"}}>
        <TextField 
          id="outlined-basic" 
          label="Username" 
          variant="outlined" 
          onChange={handleUsername} 
        />
        <TextField 
          id="outlined-basic" 
          label="Password" 
          variant="outlined" 
          type="password" 
          onChange={handlePassword} 
        /> 
        <TextField 
          id="outlined-basic" 
          label="Confirm Password" 
          variant="outlined" 
          type="password" 
          onChange={handleConfirmPassword} 
        /> 
        <Button variant="contained" type="submit">Register</Button>
      </Box>
  );
}