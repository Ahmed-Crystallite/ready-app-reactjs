// Router DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Components
import { BlogList, BlogPost, Footer, Header } from "@/components"

// Pages
import {
  FindCandidates,
  HelpCenter,
  Home,
  Login,
  NotFound,
  PrivacyPolicy,
  SignUp,
  Subscription,
  SubscriptionPlan,
  TermsAndConditions,
} from "../pages"

const Routers = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp/>} />
        <Route path="forgot-password" />
        <Route path="reset-password" />
        <Route path="subscription">
          <Route index element={<Subscription />} />
          <Route path=":slug" element={<SubscriptionPlan />} />
        </Route>
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="pricing" />
        <Route path="help-center" element={<HelpCenter />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="blogs">
          <Route index element={<BlogList />} />
          <Route path=":slug" element={<BlogPost />} />
        </Route>
        {/* Dashboard Pages */}
        <Route path="dashboard" />
        <Route path="find-candidates" element={<FindCandidates />} />
        <Route path="connections" />
        <Route path="message" />
        <Route path="profile">
          <Route index />
          <Route path="edit-profile" />
        </Route>
        <Route path="report" />
        <Route path="/jobs">
          <Route index />
          <Route path="post" />
          <Route path="single" />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default Routers
