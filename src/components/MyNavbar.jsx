import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Link } from "react-router-dom";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const MyNavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const color1 = blueGrey[900];

  return (
    <AppBar position="static" sx={{ bgcolor: "#212121" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Card
              sx={{
                maxWidth: 70,
                padding: 1,
                bgcolor: "#212121",
                borderRadius: 3,
                boxShadow: 0,
              }}
            >
              {/* <Link to="/"> */}
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="70"
                  image="https://www-league.nhlstatic.com/images/logos/league-dark/133-flat.svg"
                  alt="CW"
                />
              </CardActionArea>
              {/* </Link> */}
            </Card>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Card
              sx={{
                maxWidth: 60,
                padding: 1,
                bgcolor: "#1976D2",
                borderRadius: 3,
                boxShadow: 0,
              }}
            >
              {/* <Link to="/"> */}
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="60"
                  image="https://www-league.nhlstatic.com/images/logos/league-dark/133-flat.svg"
                  alt="CW"
                />
              </CardActionArea>
              {/* </Link> */}
            </Card>
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MyNavBar;
