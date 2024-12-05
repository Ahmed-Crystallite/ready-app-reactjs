// Router DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { BlogList, BlogPost, Header } from "../components"
import { Home, NotFound } from "../pages"
// Pages

// Components

const Routers = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" />
        <Route path="signup" />
        <Route path="forgot-password" />
        <Route path="reset-password" />
        <Route path="subscription" />
        <Route path="terms-and-conditions" />
        <Route path="pricing" />
        <Route path="help" />
        <Route path="privacy-policy" />
        <Route path="blogs">
          <Route index element={<BlogList />} />
          <Route path=":slug" element={<BlogPost />} />
        </Route>
        {/* Dashboard Pages */}
        <Route path="dashboard" />
        <Route path="findcandidates" />
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
    </Router>
  )
}

export default Routers
