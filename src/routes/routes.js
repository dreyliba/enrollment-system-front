import Dashboard from "../modules/dashboard/pages/Dashboard";
import Enrollment from "../modules/enrollment/pages/Enrollment";
import Report from "../modules/report/pages/Report";
import Student from "../modules/student/pages/Student";
import Login from "../modules/login/pages/Login";
import UserList from "../modules/user/Users";

const routes = [
  {
    path: "/",
    component: Login,
    auth: false,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    auth: false,
  },
  {
    path: "/enrollment",
    component: Enrollment,
    auth: false,
  },
  {
    path: "/report",
    component: Report,
    auth: false,
  },
  {
    path: "/student",
    component: Student,
    auth: true,
  },
  {
    path: "/users",
    component: UserList,
    auth: false,
  },
];

export default routes;
