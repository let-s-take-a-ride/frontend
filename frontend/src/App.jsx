import { Routes, Route, Navigate } from "react-router-dom";
import LayoutContainer from "./containers/wrapper-container/LayoutContainer";
import { customTheme } from "./styles/themes";
import { Alert, ThemeProvider } from "@mui/material";
import { AlertProvider } from "./contexts/AlertContext";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardPage from "./containers/dashboard-page/DashboardPage";
import LoginPage from "./containers/login-page/LoginPage";
import AboutPage from "./containers/about-page/AboutPage";
import SettingsPage from "./containers/settings-page/SettingsPage";
import NotificationsPage from "./containers/notifications-page/NotificationsPage";
import CompleteLoginPage from "./containers/complete-login-page/CompleteLoginPage";
import EventList from "./containers/rides-page/RidesPage2";
import EventDetailPage from "./containers/rides-page/EventDetailPage";
import MyRidesPage from "./containers/myRides-page/MyRidesPage";
import CreateRidePage from "./containers/createRide-page/CreateRidePage";
import NotificationDetailsPage from "./containers/notifications-page/NotificationDetailsPage";
import { WebSocketProvider } from "./contexts/WebsocketProvider";

function App() {
  return (
    <>
      <WebSocketProvider>
        <AlertProvider>
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
                  path="/my-rides"
                  element={
                    <ProtectedRoute>
                      <MyRidesPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/create-ride"
                  element={
                    <ProtectedRoute>
                      <CreateRidePage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/rides"
                  element={
                    <ProtectedRoute>
                      {/* <RidesPage /> */}
                      <EventList />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/rides/:rideId"
                  element={
                    <ProtectedRoute>
                      <EventDetailPage />
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
                  path="/notifications/:notificationId"
                  element={
                    <ProtectedRoute>
                      <NotificationDetailsPage />
                    </ProtectedRoute>
                  }
                />{" "}
                <Route
                  path="/complete-login"
                  element={
                    <ProtectedRoute>
                      <CompleteLoginPage />
                    </ProtectedRoute>
                  }
                ></Route>
                <Route path="/login" element={<LoginPage />} />
                {/* Fallback route for unmatched paths ---> add handler */}
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </LayoutContainer>
          </ThemeProvider>
        </AlertProvider>
      </WebSocketProvider>
    </>
  );
}

export default App;
