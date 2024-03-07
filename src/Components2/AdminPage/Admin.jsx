// import React from "react";
// import clsx from "clsx";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// ///folder react 
// import Event from "./NewFileAdmin/Event";
// import DeleteForm from "./NewFileAdmin/DeleteForm";
// import Main from "./NewFileAdmin/Main";
// import Delete from "./NewFileAdmin/Delete";
// import CompanyAdd from './NewFileAdmin/CompanyAdd'

// //icon mui v5
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
// import DeleteIcon from "@mui/icons-material/Delete";
// import MailIcon from "@mui/icons-material/Mail";
// import HomeIcon from "@mui/icons-material/Home";
// //v4 prblm

// import MuiAppBar from '@mui/material/AppBar';
// import { styled, useTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Container from '@mui/material/Container';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';


// const drawerWidth = 240;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   }),
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// }));





// export default function Admin() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Router>
//       <Box sx={{ display: 'flex' }}>
//         <CssBaseline />
//         <AppBar
//          position="fixed" open={open}
//         >
//          <Toolbar>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               onClick={handleDrawerOpen}
//               edge="start"
//               sx={{ mr: 2, ...(open && { display: 'none' }) }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h4" noWrap>
//               Admin Page
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Drawer
//           variant="permanent"
         
//         >
//           <div>
//             <IconButton onClick={handleDrawerClose}>
//               {theme.direction === "rtl" ? (
//                 <ChevronRightIcon />
//               ) : (
//                 <ChevronLeftIcon />
//               )}
//             </IconButton>
//           </div>
//           <Divider />

//           <List>
//             <Link to="/admin" >
//               <ListItem >
//                 <ListItemIcon>
//                   <HomeIcon style={{ color: "#260f33" }}></HomeIcon>
//                 </ListItemIcon>

//                 <ListItemText primary={"Home"} style={{ color: "#260f33" }} />
//               </ListItem>
//             </Link>

//             <Link to="/event" className={classes.link}>
//               <ListItem button>
//                 <ListItemIcon>
//                   <MailIcon style={{ color: "#260f33" }}></MailIcon>
//                 </ListItemIcon>

//                 <ListItemText primary={"Event"} style={{ color: "#260f33" }} />
//               </ListItem>
//             </Link>

//             <Link to="/companyadd" className={classes.link}>
//               <ListItem button>
//                 <ListItemIcon>
//                   <MailIcon style={{ color: "#260f33" }}></MailIcon>
//                 </ListItemIcon>

//                 <ListItemText primary={"Company Add"} style={{ color: "#260f33" }} />
//               </ListItem>
//             </Link>


//             <Link to="/deleteform" className={classes.link}>
//               <ListItem button>
//                 <ListItemIcon>
//                   <DeleteIcon style={{ color: "#260f33" }} />
//                 </ListItemIcon>

//                 <ListItemText
//                   primary={"DeleteForm"}
//                   style={{ color: "#260f33", fontFamily: "Roboto Slab" }}
//                 />
//               </ListItem>
//             </Link>

//             <Link to="/delete" className={classes.link}>
//               <ListItem button>
//                 <ListItemIcon>
//                   <DeleteSweepIcon style={{ color: "#260f33" }} />
//                 </ListItemIcon>

//                 <ListItemText
//                   primary={"Delete Job"}
//                   style={{ color: "#260f33" }}
//                 />
//               </ListItem>
//             </Link>
//           </List>
//         </Drawer>

//         <Switch>
//           <Route exact path="/event">
//             <Container>
//               <Event />
//             </Container>
//           </Route>

//           <Route exact path="/admin">
//             <Container>
//               <Main></Main>
//             </Container>
//           </Route>

//           <Route exact path="/delete">
//             <Container>
//               <Delete></Delete>
//             </Container>
//           </Route>

//           <Route exact path="/companyadd">
//             <Container>
//               <CompanyAdd></CompanyAdd>
//             </Container>
//           </Route>

//           <Route exact path="/deleteform">
//             <Container>
//               <DeleteForm></DeleteForm> 
//             </Container>
//           </Route>
//         </Switch>
//       </Box>
//     </Router>
//   );
// }

import React from 'react'

function Admin() {
  return (
    <div>Admin</div>
  )
}

export default Admin