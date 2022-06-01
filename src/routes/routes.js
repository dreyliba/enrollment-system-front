import Dashboard from "../modules/dashboard/pages/Dashboard";
import Enrollment from "../modules/enrollment/pages/Enrollment";
import Report from "../modules/report/pages/Report";
import Student from "../modules/student/pages/Student";
import Login from "../modules/login/pages/Login";
import UserList from "../modules/user/Users";
import Strand from "../modules/settings/Strand";
import Track from "../modules/settings/Track";
import Profile from "../modules/profile/Profile";

const routes = [
  {
    path: "/",
    component: Login,
    auth: false,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    auth: true,
  },
  {
    path: "/enrollment",
    component: Enrollment,
    auth: true,
  },
  {
    path: "/report",
    component: Report,
    auth: true,
  },
  {
    path: "/student",
    component: Student,
    auth: true,
  },
  {
    path: "/users",
    component: UserList,
    auth: true,
  },
  {
    path: "/track",
    component: Track,
    auth: true,
  },
  {
    path: "/track/:id/strand",
    component: Strand,
    auth: true,
  },
  {
    path: "/profile",
    component: Profile,
    auth: true,
  },
];

export default routes;
