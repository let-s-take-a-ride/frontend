import { Routes, Route, Navigate } from "react-router-dom";
import LayoutContainer from "./containers/wrapper-container/LayoutContainer";
import DashboardPage from "./containers/dashboard-page/DashboardPage";
import LoginPage from "./containers/login-page/LoginPage";
import AboutPage from "./containers/about-page/AboutPage";
import SettingsPage from "./containers/settings-page/SettingsPage";
import RidesPage from "./containers/rides-page/RidesPage";
import NotificationsPage from "./containers/notifications-page/NotificationsPage";

function App() {
  return (
    <>
      <LayoutContainer>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route path="/" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/rides" element={<RidesPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />

          {/* Fallback route for unmatched paths ---> add handler */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </LayoutContainer>
    </>
  );
}

export default App;
