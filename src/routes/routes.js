import Dashboard from "../modules/dashboard/pages/Dashboard";
import Enrollment from "../modules/enrollment/pages/Enrollments";
import AddEnrollment from "../modules/enrollment/pages/AddEnrollment";
import Login from "../modules/login/pages/Login";
import UserList from "../modules/user/Users";
import Strand from "../modules/settings/Strand";
import Track from "../modules/settings/Track";
import Profile from "../modules/profile/Profile";
import EditEnrollment from "../modules/enrollment/pages/EditEnrollment";

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
    path: "/enrollments/add",
    component: AddEnrollment,
    auth: true,
  },
  {
    path: "/enrollments",
    component: Enrollment,
    auth: true,
  },
  {
    path: "/enrollments/:id/edit",
    component: EditEnrollment,
    auth: true,
  },
  {
    path: "/users",
    component: UserList,
    auth: true,
  },
  {
    path: "/settings/track",
    component: Track,
    auth: true,
  },
  {
    path: "/settings/track/:id/strand",
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
