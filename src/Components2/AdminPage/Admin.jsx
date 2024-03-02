import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Event from "./NewFileAdmin/Event";
import DeleteForm from "./NewFileAdmin/DeleteForm";
import Main from "./NewFileAdmin/Main";
import Delete from "./NewFileAdmin/Delete";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import DeleteIcon from "@material-ui/icons/Delete";
import CompanyAdd from './NewFileAdmin/CompanyAdd'

import { createTheme } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  link: {
    textDecoration: "none",
    color: "theme.platte.text.primary",
  },

  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Admin() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" noWrap>
              Admin Page
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />

          <List>
            <Link to="/admin" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon style={{ color: "#260f33" }}></HomeIcon>
                </ListItemIcon>

                <ListItemText primary={"Home"} style={{ color: "#260f33" }} />
              </ListItem>
            </Link>

            <Link to="/event" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <MailIcon style={{ color: "#260f33" }}></MailIcon>
                </ListItemIcon>

                <ListItemText primary={"Event"} style={{ color: "#260f33" }} />
              </ListItem>
            </Link>

            <Link to="/companyadd" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <MailIcon style={{ color: "#260f33" }}></MailIcon>
                </ListItemIcon>

                <ListItemText primary={"Company Add"} style={{ color: "#260f33" }} />
              </ListItem>
            </Link>


            <Link to="/deleteform" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <DeleteIcon style={{ color: "#260f33" }} />
                </ListItemIcon>

                <ListItemText
                  primary={"DeleteForm"}
                  style={{ color: "#260f33", fontFamily: "Roboto Slab" }}
                />
              </ListItem>
            </Link>

            <Link to="/delete" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <DeleteSweepIcon style={{ color: "#260f33" }} />
                </ListItemIcon>

                <ListItemText
                  primary={"Delete Job"}
                  style={{ color: "#260f33" }}
                />
              </ListItem>
            </Link>
          </List>
        </Drawer>

        <Switch>
          <Route exact path="/event">
            <Container>
              <Event />
            </Container>
          </Route>

          <Route exact path="/admin">
            <Container>
              <Main></Main>
            </Container>
          </Route>

          <Route exact path="/delete">
            <Container>
              <Delete></Delete>
            </Container>
          </Route>

          <Route exact path="/companyadd">
            <Container>
              <CompanyAdd></CompanyAdd>
            </Container>
          </Route>

          <Route exact path="/deleteform">
            <Container>
              <DeleteForm></DeleteForm> 
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
