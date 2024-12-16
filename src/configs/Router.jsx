import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Components
import { BlogList, BlogPost, Footer, Header,DashboardLayout } from "@/components";

// Pages
import {
  FindCandidates,
  ForgotPassword,
  HelpCenter,
  Home,
  Login,
  NotFound,
  PrivacyPolicy,
  ResetPassword,
  SignUp,
  Subscription,
  SubscriptionPlan,
  TermsAndConditions,
  DashboardFindCandidates,
} from "../pages";

const ConditionalHeader = () => {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  return !isDashboardRoute ? <Header /> : null;
};

const Routers = () => {
  return (
    <Router>
       <ConditionalHeader />
      <Routes>
        {/* Public Routes */}
        <Route index path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="subscription">
          <Route index element={<Subscription />} />
          <Route path=":slug" element={<SubscriptionPlan />} />
        </Route>
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="help-center" element={<HelpCenter />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="blogs">
          <Route index element={<BlogList />} />
          <Route path=":slug" element={<BlogPost />} />
        </Route>
        <Route path="find-candidates" element={<FindCandidates />} />

        {/* Dashboard Routes */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="find-candidates" element={<DashboardFindCandidates />} />
          <Route path="connections" element={<div>Connections Page</div>} />
          <Route path="message" element={<div>Message Page</div>} />
          <Route path="profile">
            <Route index element={<div>Profile Page</div>} />
            <Route path="edit-profile" element={<div>Edit Profile Page</div>} />
          </Route>
          <Route path="report" element={<div>Report Page</div>} />
          <Route path="jobs">
            <Route index element={<div>Jobs Page</div>} />
            <Route path="post" element={<div>Post Job Page</div>} />
            <Route path="single" element={<div>Job Details Page</div>} />
          </Route>
        </Route>

        {/* Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routers;

// element={<DashboardConnections />}
// element={<DashboardMessages />}
// element={<DashboardProfile />}
// element={<EditProfile />}
// element={<DashboardReports />}
// element={<JobsList />}
// element={<PostJob />}
// element={<JobDetails />}