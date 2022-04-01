import Dashboard from "../modules/dashboard/pages/Dashboard";
import Enrollment from "../modules/enrollment/pages/Enrollment";
import Report from "../modules/report/pages/Report";
import Student from "../modules/student/pages/Student";
import Login from "../modules/login/pages/Login";
import UserList from "../modules/user/pages/UserList";

const routes = [
  {
    path: "/",
    component: Login,
    Auth: false,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    Auth: true,
  },
  {
    path: "/enrollment",
    component: Enrollment,
    Auth: true,
  },
  {
    path: "/report",
    component: Report,
    Auth: true,
  },
  {
    path: "/student",
    component: Student,
    Auth: true,
  },
  {
    path: "/userlist",
    component: UserList,
    Auth: true,
  },
];

export default routes;
