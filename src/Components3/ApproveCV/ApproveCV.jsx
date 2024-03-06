// import React, { useState, useEffect } from "react";

// import { useParams, useHistory } from "react-router";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";
// import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
// import { localhost } from "../../main.jsx";

// const ApproveCV = () => {
//   const history = useHistory();

//   const [student, setStudent] = useState([]);

//   const [tik, settik] = useState(false);

//   let user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     fetch(`${localhost}/companyForm/${user.email}`)
//       .then((response) => response.json())
//       .then((data) => setStudent(data));
//   }, []);

//   const handledelete = (event, id) => {
//     event.preventDefault();

//     const value = student.filter((v) => v._id == id);

//     fetch(`${localhost}/confirm`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(value[0]),
//     })
//       .then((response) => response.json())
//       .then((data) => {});

//     settik(true);

//     fetch(`${localhost}/deleteCFcv/${id}`, {
//       method: "DELETE",
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         alert("Your Registration has been deleted");
//         history.replace("/company/nayeem");
//       });
//   };

//   const [alldata1, setalldata1] = useState("");

//   return (
//     <div className="">
//       <br /> <br />
//       <h3 style={{ fontWeight: "bold" }}>
//         <span style={{ color: "#57368a" }}>APPROVE Cv</span> if jobseekers
//         deserve it...
//       </h3>
//       <small>If u want to search please give email id</small>
//       <input
//         type="text"
//         className="form-control"
//         placeholder="email id searching.."
//         onChange={(event) => {
//           setalldata1(event.target.value);
//         }}
//       />
//       {student
//         .filter((v) => {
//           if (alldata1 == "") {
//             return v;
//           } else if (v.email.toLowerCase().includes(alldata1.toLowerCase())) {
//             return v;
//           }
//         })
//         .map((value) => (
//           <div>
//             <br /> <hr />
//             <div className="row">
//               <div className="col-2">
//                 <h5
//                   className="text-center"
//                   style={{ color: "#786c56", fontWeight: "bold" }}
//                 >
//                   {value.firstName}
//                 </h5>
//               </div>
//               <div className="col-2">
//                 <h6 style={{ color: "#6f8994", fontWeight: "bold" }}>
//                   {value.MobileNumber}
//                 </h6>
//               </div>
//               <div className="col-2">
//                 <h6 style={{ color: "#0c6f99", fontWeight: "bold" }}>
//                   {value.email}
//                 </h6>
//               </div>
//               <div className="col-2">
//                 {" "}
//                 <span style={{ color: "#496a78" }}>{value.github}</span>{" "}
//               </div>

//               <div className="col-2">
//                 <button
//                   disabled={tik}
//                   className="fas fa-lg"
//                   onClick={(e) => handledelete(e, value._id)}
//                   return
//                   false
//                 >
//                   <FontAwesomeIcon
//                     style={{ color: "green" }}
//                     icon={faThumbsUp}
//                   />{" "}
//                   Confirm
//                 </button>
//               </div>

//               {tik && (
//                 <div className="col-2">
//                   <FontAwesomeIcon style={{ color: "green" }} icon={faCheck} />
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default ApproveCV;


import React, { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import DeleteIcon from "@mui/icons-material/Delete";
import BugReportIcon from "@mui/icons-material/BugReport";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
} from "@mui/material";
import MainCompany from "../MainCompany/MainCompany";
import LoggedOut from "../LoggedOut/LoggedOut";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ListApprove from "../ListApprove/ListApprove";

import { localhost } from "../../main.jsx";

const drawerWidth = 0;

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Comapany() {
  const [company, setcompany] = useState([]);
  useEffect(() => {
    fetch(`${localhost}/company`)
      .then((res) => res.json())
      .then((data) => setcompany(data));
  }, []);

  let user = JSON.parse(localStorage.getItem("user"));

  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let isDEVELOPER = company.some((value) => value.email === user.email);

  const history = useHistory();

  const logout2 = () => {
    history.push("/intern-job");
    // window.location.reload();
  };

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Company Page
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="temporary"
          anchor={'left'} // Adjusted anchor directly as the theme.direction is no longer available
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        ></Drawer>

        {isDEVELOPER ? (
          <List>
            <Link to="/company/nayeem" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon style={{ color: "#260f33" }} />
                </ListItemIcon>

                <ListItemText
                  className="fst-italic"
                  primary={"Company"}
                  style={{ color: "#260f33" }}
                />
              </ListItem>
            </Link>

            {/* Add other links as needed */}

          </List>
        ) : (
          <div>
            <h1 style={{ color: "#5e2201" }}>
              You have no permission to access Company page so{" "}
              <span style={{ color: "red" }}>back Homepage</span>
            </h1>

            <small>
              N.B. Give us email ,your company full descriptions so that we will
              add u our company page otherwise you only use our user page when u
              logged in.
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

        <Switch>
          {/* Define Routes */}
        </Switch>
      </div>
    </Router>
    </ThemeProvider>
  );
}


