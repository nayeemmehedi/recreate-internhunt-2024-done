// import React, { useState, useEffect } from "react";
// import clsx from "clsx";
// import { makeStyles, useTheme } from "@material-ui/core/styles";

// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";

// import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
// import DeleteIcon from "@mui/icons-material/Delete";
// import BugReportIcon from "@mui/icons-material/BugReport";

// import { createTheme } from "@material-ui/core/styles";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Container,
// } from "@material-ui/core";
// // import HomeIcon from "@mui/icons-material/Home";
// import DeleteCv from "../deleteCV/DeleteCv";
// import Jobpost from "../../Components2/AdminPage/NewFileAdmin/Event";
// import Showcv from "../ShowCV/Showcv";
// import ApproveCV from "../ApproveCV/ApproveCV";
// import MainCompany from "../MainCompany/MainCompany";
// import LoggedOut from "../LoggedOut/LoggedOut";

// import fakegmail from "../../Component/Fakedata/emailfake.json";

// import { useHistory } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// // import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
// import ListApprove from "../ListApprove/ListApprove";
// import { localhost } from "../../main.jsx";

// const drawerWidth = 0;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   link: {
//     textDecoration: "none",
//     color: "theme.platte.text.primary",
//   },
//   drawer: {
//     [theme.breakpoints.up("sm")]: {
//       width: drawerWidth,
//       flexShrink: 0,
//     },
//   },
//   appBar: {
//     [theme.breakpoints.up("sm")]: {
//       width: `calc(100% - ${drawerWidth}px)`,
//       marginLeft: drawerWidth,
//     },
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up("sm")]: {
//       display: "none",
//     },
//   },
//   // necessary for content to be below app bar
//   toolbar: theme.mixins.toolbar,
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// }));
// export default function Comapany() {
//   const [company, setcompany] = useState([]);
//   useEffect(() => {
//     fetch(`${localhost}/company`)
//       .then((res) => res.json())
//       .then((data) => setcompany(data));
//   }, []);

//   let user = JSON.parse(localStorage.getItem("user"));

//   const classes = useStyles();
//   const theme = useTheme();

//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   let isDEVELOPER = company.some((value) => value.email === user.email);

//   const history = useHistory();

//   const logout2 = () => {
//     history.push("/intern-job");
//     // window.location.reload();
//   };

//   return (
//     <Router>
//       <div className={classes.root}>
//         <CssBaseline />
//         <AppBar position="fixed" className={classes.appBar}>
//           <Toolbar>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="start"
//               onClick={handleDrawerToggle}
//               className={classes.menuButton}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" noWrap>
//               Company Page
//             </Typography>
//           </Toolbar>
//         </AppBar>

//         <Drawer
//           variant="temporary"
//           anchor={theme.direction === "rtl" ? "right" : "left"}
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           classes={{
//             paper: classes.drawerPaper,
//           }}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//         ></Drawer>

//         {isDEVELOPER ? (
//           <List>
//             <Link to="/company/nayeem" >
//               <ListItem>
//                 <ListItemIcon>
//                   <HomeIcon style={{ color: "#260f33" }}></HomeIcon>
//                 </ListItemIcon>

//                 <ListItemText
//                   className="fst-italic"
//                   primary={"Company"}
//                   style={{ color: "#260f33" }}
//                 />
//               </ListItem>
//             </Link>

//             <Link to="/jobpost" >
//               <ListItem>
//                 <ListItemIcon>
//                   <MailIcon style={{ color: "#2e376e" }}></MailIcon>
//                 </ListItemIcon>

//                 <ListItemText
//                   className="fst-italic"
//                   primary={"JobPost"}
//                   style={{ color: "#0f24a8" }}
//                 />
//               </ListItem>
//             </Link>
//             <Link to="/deletecv" >
//               <ListItem>
//                 <ListItemIcon>
//                   <DeleteIcon style={{ color: "#2e376e" }} />
//                 </ListItemIcon>

//                 <ListItemText
//                   className="fst-italic"
//                   primary={"DeleteCV"}
//                   style={{ color: "#0f24a8", fontFamily: "Roboto Slab" }}
//                 />
//               </ListItem>
//             </Link>

//             <Link to="/showcv" >
//               <ListItem>
//                 <ListItemIcon>
//                   <NotificationsActiveIcon style={{ color: "#2e376e" }} />
//                 </ListItemIcon>

//                 <ListItemText
//                   className="fst-italic"
//                   primary={"Show CV"}
//                   style={{ color: "#0f24a8" }}
//                 />
//               </ListItem>
//             </Link>
//             <Link to="/approve" >
//               <ListItem>
//                 <ListItemIcon>
//                   <NotificationsActiveIcon style={{ color: "#2e376e" }} />
//                 </ListItemIcon>

//                 <ListItemText
//                   className="fst-italic"
//                   primary={"Approve CV"}
//                   style={{ color: "#0f24a8" }}
//                 />
//               </ListItem>
//             </Link>

//             <Link to="/aproveList" >
//               <ListItem>
//                 <ListItemIcon>
//                   <NotificationsActiveIcon style={{ color: "#2e376e" }} />
//                 </ListItemIcon>

//                 <ListItemText
//                   className="fst-italic"
//                   primary={"Approve Success"}
//                   style={{ color: "#0f24a8" }}
//                 />
//               </ListItem>
//             </Link>

//             <Link to="/loggedout" >
//               <ListItem>
//                 <ListItemIcon>
//                   <BugReportIcon style={{ color: "#2e376e" }} />
//                 </ListItemIcon>

//                 <ListItemText
//                   className="fst-italic"
//                   primary={"Logged Out"}
//                   style={{ color: "#0f24a8" }}
//                 />
//               </ListItem>
//             </Link>
//           </List>
//         ) : (
//           <div>
//             <h1 style={{ color: "#5e2201" }}>
//               You have no permission to access Company page so{" "}
//               <span style={{ color: "red" }}>back Homepage</span>
//             </h1>

//             <small>
//               N.B. Give us email ,your company full descriptions so that we will
//               add u our company page otherwise you only use our user page when u
//               logged in.
//             </small>

//             <p>Our Email : nayeem01mehedi@gmail.com</p>

//             <br />

//             <button
//               style={{ backgroundColor: "#856984" }}
//               className="btn ps-5 ms-3"
//               onClick={logout2}
//             >
//               <FontAwesomeIcon icon={faArrowLeft} /> back Homepage
//             </button>
//           </div>
//         )}

//         <Switch>
//           <Route exact path="/company/nayeem">
//             <Container>
//               <MainCompany />
//             </Container>
//           </Route>

//           <Route exact path="/jobpost">
//             <Container>
//               <Jobpost></Jobpost>
//             </Container>
//           </Route>

//           <Route exact path="/aproveList">
//             <Container>
//               <ListApprove></ListApprove>
//             </Container>
//           </Route>

//           <Route exact path="/approve">
//             <Container>
//               <ApproveCV></ApproveCV>
//             </Container>
//           </Route>

//           <Route exact path="/loggedout">
//             <Container>
//               <LoggedOut></LoggedOut>
//             </Container>
//           </Route>

//           <Route exact path="/deletecv">
//             <Container>
//               <DeleteCv></DeleteCv>
//             </Container>
//           </Route>

//           <Route exact path="/showcv">
//             <Container>
//               <Showcv></Showcv>
//             </Container>
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

//mui v5
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import DeleteIcon from "@mui/icons-material/Delete";
import BugReportIcon from "@mui/icons-material/BugReport";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';


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
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';


const drawerWidth = 0;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
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

        <Drawer variant="permanent" open={open}>
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
              <Link to="/company/nayeem" >
                <ListItem>
                  <ListItemIcon>
                    <HomeIcon style={{ color: "#260f33" }}></HomeIcon>
                  </ListItemIcon>

                  <ListItemText
                    className="fst-italic"
                    primary={"Company"}
                    style={{ color: "#260f33" }}
                  />
                </ListItem>
              </Link>

              <Link to="/jobpost" >
                <ListItem>
                  <ListItemIcon>
                    <MailIcon style={{ color: "#2e376e" }}></MailIcon>
                  </ListItemIcon>

                  <ListItemText
                    className="fst-italic"
                    primary={"JobPost"}
                    style={{ color: "#0f24a8" }}
                  />
                </ListItem>
              </Link>
              <Link to="/deletecv" >
                <ListItem>
                  <ListItemIcon>
                    <DeleteIcon style={{ color: "#2e376e" }} />
                  </ListItemIcon>

                  <ListItemText
                    className="fst-italic"
                    primary={"DeleteCV"}
                    style={{ color: "#0f24a8", fontFamily: "Roboto Slab" }}
                  />
                </ListItem>
              </Link>

              <Link to="/showcv">
                <ListItem>
                  <ListItemIcon>
                    <NotificationsActiveIcon style={{ color: "#2e376e" }} />
                  </ListItemIcon>

                  <ListItemText
                    className="fst-italic"
                    primary={"Show CV"}
                    style={{ color: "#0f24a8" }}
                  />
                </ListItem>
              </Link>
              <Link to="/approve" >
                <ListItem>
                  <ListItemIcon>
                    <NotificationsActiveIcon style={{ color: "#2e376e" }} />
                  </ListItemIcon>

                  <ListItemText
                    className="fst-italic"
                    primary={"Approve CV"}
                    style={{ color: "#0f24a8" }}
                  />
                </ListItem>
              </Link>

              <Link to="/aproveList" >
                <ListItem>
                  <ListItemIcon>
                    <NotificationsActiveIcon style={{ color: "#2e376e" }} />
                  </ListItemIcon>

                  <ListItemText
                    className="fst-italic"
                    primary={"Approve Success"}
                    style={{ color: "#0f24a8" }}
                  />
                </ListItem>
              </Link>

              <Link to="/loggedout" >
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
            <Route exact path="/company/nayeem">
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
