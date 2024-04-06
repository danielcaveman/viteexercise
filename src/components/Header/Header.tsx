import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <AppBar position="sticky" component="nav">
      <Toolbar>
        <Typography variant="h6" component="div">
          bloggolb
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
