import React from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
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
    
      <>
      <Hero />
      <Box mt={5}>
        <Copyright />
      </Box>
    </>
    
  );
};

export default Main;
