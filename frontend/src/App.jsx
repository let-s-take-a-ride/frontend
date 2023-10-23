import { Routes, Route, Navigate } from "react-router-dom";
import LayoutContainer from "./containers/wrapper-container/LayoutContainer";
import { customTheme } from "./styles/themes";
import { ThemeProvider } from "@mui/material";
import DashboardPage from "./containers/dashboard-page/DashboardPage";
import LoginPage from "./containers/login-page/LoginPage";
import AboutPage from "./containers/about-page/AboutPage";
import SettingsPage from "./containers/settings-page/SettingsPage";
import RidesPage from "./containers/rides-page/RidesPage";
import NotificationsPage from "./containers/notifications-page/NotificationsPage";
import { Auth0Provider } from "@auth0/auth0-react";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <LayoutContainer>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <AboutPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <SettingsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/rides"
              element={
                <ProtectedRoute>
                  <RidesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/notifications"
              element={
                <ProtectedRoute>
                  <NotificationsPage />
                </ProtectedRoute>
              }
            />{" "}
            <Route
              path="/preferences"
              element={
                <ProtectedRoute>
                  <SettingsPage />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="/login" element={<LoginPage />} />
            {/* Fallback route for unmatched paths ---> add handler */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </LayoutContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
