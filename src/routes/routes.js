import Dashboard from "../modules/dashboard/pages/Dashboard";
import Enrollment from "../modules/enrollment/pages/Enrollments";
import AddEnrollment from "../modules/enrollment/pages/AddEnrollment";
import Login from "../modules/login/pages/Login";
import UserList from "../modules/user/Users";
import Strand from "../modules/settings/Strand";
import Track from "../modules/settings/Track";
import Profile from "../modules/profile/Profile";
import Report from "../modules/report/pages/Report";
import PrintEnrollmentReports from "../modules/report/pages/PrintEnrollmentReports";
import EditEnrollment from "../modules/enrollment/pages/EditEnrollment";
import DisabilityCategories from "../modules/disability-categories/pages/DisabilityCategories";
import PrintDailyReports from "../modules/dashboard/pages/PrintDailyReports";
import PrintEnrollment from "../modules/enrollment/pages/PrintEnrollment";
import PrintCompletionForm from "../modules/enrollment/pages/PrintCompletionForm";

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
    path: "/enrollments/:id/print",
    component: PrintEnrollment,
  },
  {
    path: "/enrollments/:id/print-completion-form",
    component: PrintCompletionForm,
  },
  {
    path: "/reports",
    component: Report,
    auth: true,
  },
  {
    path: "/reports/print",
    component: PrintEnrollmentReports,
    // auth: true,
  },
  {
    path: "/reports/print-daily",
    component: PrintDailyReports,
    // auth: true,
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
    path: "/settings/disability-categories",
    component: DisabilityCategories,
    auth: true,
  },
  {
    path: "/profile",
    component: Profile,
    auth: true,
  },
];

export default routes;
