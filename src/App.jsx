import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Questionnaire from "./pages/Questionnaire";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import Profile from "./pages/Profile";
import Subscription from "./pages/Subscription";
import EventDetails from "./pages/EventDetails";
import MyReservations from "./pages/MyReservations";
import TestFirebase from "./pages/TestFirebase";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* Public Pages */}

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/questionnaire" element={<Questionnaire />} />

      {/* Protected Pages */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/events"
        element={
          <ProtectedRoute>
            <Events />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/subscription"
        element={
          <ProtectedRoute>
            <Subscription />
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-reservations"
        element={
          <ProtectedRoute>
            <MyReservations />
          </ProtectedRoute>
        }
      />

      <Route
  path="/event/:id"
  element={
    <ProtectedRoute>
      <EventDetails />
    </ProtectedRoute>
  }
/>

      {/* Firebase Test */}

      <Route
        path="/test-firebase"
        element={<TestFirebase />}
      />

    </Routes>
  );
}

export default App;