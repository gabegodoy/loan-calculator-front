import { Box, Grid, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        padding: "1rem",
        borderTop: "1px solid #e0e0e0"
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography sx={{fontSize: "0.7rem"}}>
          Made with &hearts; by 
          <a style={{marginLeft: "0.25rem"}} href="http://github.com/gabegodoy">
          Gabriel Godoy
          </a>
        </Typography>
        <Typography sx={{fontSize: "0.7rem"}}>
          {`${new Date().getFullYear()} | React | Material UI | Java 17`}
        </Typography>

      </Grid>
    </Box>
  );
}

export default Footer;
