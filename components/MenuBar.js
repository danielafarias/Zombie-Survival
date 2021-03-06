import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PeopleIcon from "@material-ui/icons/People";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import GitHubIcon from "@material-ui/icons/GitHub";
import { withStyles } from "@material-ui/core/styles";
import React from "react";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    backgroundColor: "#8BC673",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    backgroundColor: "#8BC673",
    "&:focus": {
      backgroundColor: "#CCE7A0",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: "#000000",
      },
    },
  },
}))(MenuItem);

export default function MenuBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
            aria-controls="customized-menu"
            aria-haspopup="true"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <a href="/register">
          <StyledMenuItem>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Register" />
          </StyledMenuItem>
        </a>

        <a href="/client">
          <StyledMenuItem>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Clients" />
          </StyledMenuItem>
        </a>

        <a
          href="https://github.com/danielafarias/Zombie-Survival"
          target="_blank"
          rel="noreferrer"
        >
          <StyledMenuItem>
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="Github" />
          </StyledMenuItem>
        </a>

        <a href="https://www.svgrepo.com/" target="_blank" rel="noreferrer">
          <StyledMenuItem>
            <ListItemIcon>
              <FavoriteBorderIcon />
            </ListItemIcon>
            <ListItemText primary="SVG by" />
          </StyledMenuItem>
        </a>
      </StyledMenu>
    </div>
  );
}
