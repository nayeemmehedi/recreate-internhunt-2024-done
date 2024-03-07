import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import DeleteIcon from "@mui/icons-material/Delete";
import BugReportIcon from "@mui/icons-material/BugReport";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export const LinkValue = [
  {
    link: "/company/hunt",
    icon: <HomeIcon style={{ color: "#2e376e" }} />,
    primary: "Company",
  },
  {
    link: "/jobpost",
    icon: <MailIcon style={{ color: "#2e376e" }} />,
    primary: "JobPost",
  },
  {
    link: "/deletecv",
    icon: <DeleteIcon style={{ color: "#2e376e" }} />,
    primary: "DeleteCV",
  },
  {
    link: "/showcv",
    icon: <BugReportIcon style={{ color: "#2e376e" }} />,
    primary: "Show CV",
  },
  {
    link: "/approve",
    icon: <MenuIcon style={{ color: "#2e376e" }} />,
    primary: "Approve CV",
  },
  {
    link: "/aproveList",
    icon: <NotificationsActiveIcon style={{ color: "#2e376e" }} />,
    primary: "Approve CV",
  },
];
