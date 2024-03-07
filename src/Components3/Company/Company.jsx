import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

//mui v5
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import DeleteIcon from "@mui/icons-material/Delete";
import BugReportIcon from "@mui/icons-material/BugReport";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

//normal folders
import DeleteCv from "../deleteCV/DeleteCv";
import Jobpost from "../../Components2/AdminPage/NewFileAdmin/Event";
import Showcv from "../ShowCV/Showcv";
import ApproveCV from "../ApproveCV/ApproveCV";
import MainCompany from "../MainCompany/MainCompany";
import LoggedOut from "../LoggedOut/LoggedOut";
import ListApprove from "../ListApprove/ListApprove";
import { localhost } from "../../main.jsx";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// update mui  v5

import MuiAppBar from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { LinkValue } from "./fakeJson.jsx";

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Comapany() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [company, setcompany] = useState([]);
  useEffect(() => {
    fetch(`${localhost}/company`)
      .then((res) => res.json())
      .then((data) => setcompany(data));
  }, []);

  let user = JSON.parse(localStorage.getItem("user"));

  let isDEVELOPER = company.some((value) => value.email === user.email);

  const history = useHistory();

  const logout2 = () => {
    history.push("/intern-job");
    // window.location.reload();
  };

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerOpen}
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Company Page
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer sx={{background:"black"}} variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />

          {isDEVELOPER ? (
            <List>
              {LinkValue.map((v) => (
                <Link to={v.link}>
                  <ListItem>
                    <ListItemIcon>{v.icon}</ListItemIcon>

                    <ListItemText
                      className="fst-italic"
                      primary={v.primary}
                      sx={{ color: "#260f33",textDecoration:"none" }}
                    />
                  </ListItem>
                </Link>
              ))}

              <Link to="/loggedout">
                <ListItem>
                  <ListItemIcon>
                    <BugReportIcon style={{ color: "#2e376e" }} />
                  </ListItemIcon>

                  <ListItemText
                    className="fst-italic"
                    primary={"Logged Out"}
                    style={{ color: "#0f24a8" }}
                  />
                </ListItem>
              </Link>
            </List>
          ) : (
            <div>
              <h1 style={{ color: "#5e2201" }}>
                You have no permission to access Company page so{" "}
                <span style={{ color: "red" }}>back Homepage</span>
              </h1>

              <small>
                N.B. Give us email ,your company full descriptions so that we
                will add u our company page otherwise you only use our user page
                when u logged in.
              </small>

              <p>Our Email : nayeem01mehedi@gmail.com</p>

              <br />

              <button
                style={{ backgroundColor: "#856984" }}
                className="btn ps-5 ms-3"
                onClick={logout2}
              >
                <FontAwesomeIcon icon={faArrowLeft} /> back Homepage
              </button>
            </div>
          )}
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Switch>
            <Route exact path="/company/hunt">
              <Container>
                <MainCompany />
              </Container>
            </Route>

            <Route exact path="/jobpost">
              <Container>
                <Jobpost></Jobpost>
              </Container>
            </Route>

            <Route exact path="/aproveList">
              <Container>
                <ListApprove></ListApprove>
              </Container>
            </Route>

            <Route exact path="/approve">
              <Container>
                <ApproveCV></ApproveCV>
              </Container>
            </Route>

            <Route exact path="/loggedout">
              <Container>
                <LoggedOut></LoggedOut>
              </Container>
            </Route>

            <Route exact path="/deletecv">
              <Container>
                <DeleteCv></DeleteCv>
              </Container>
            </Route>

            <Route exact path="/showcv">
              <Container>
                <Showcv></Showcv>
              </Container>
            </Route>
          </Switch>
        </Box>
      </Box>
    </Router>
  );
}
