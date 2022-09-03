import React from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="/">
        www.yashirmanpower.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const Main = () => {
  return (
    
      <Container>
      <Hero />
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    
  );
};

export default Main;
