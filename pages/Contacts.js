import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing Pages
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard"; // Admin Dashboard
import UserPage from "./pages/UserPage"; // User Dashboard
import TransactionsPage from "./pages/TransactionsPage";
import PropertiesPage from "./pages/PropertiesPage";
import RequestsPage from "./pages/RequestsPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword"; // ForgotPassword component

// Property Category Pages
import AvailablePropertiesPage from "./pages/AvailablePropertiesPage";
import RemainingPropertiesPage from "./pages/RemainingPropertiesPage";
import HighCostPropertiesPage from "./pages/HighCostPropertiesPage";
import LowCostPropertiesPage from "./pages/LowCostPropertiesPage";
import MiddleClassPropertiesPage from "./pages/MiddleClassPropertiesPage";

// Other Specific Pages
import MyProfilePage from "./pages/MyProfilePage"; // My Profile Page
import AddNewProperty from "./pages/AddNewProperty"; // Add New Property Page
import Favorites from "./pages/Favorites"; // Favorites Page

// Import Contacts Component
import Contacts from "./pages/Contacts"; // Assuming Contacts.js is inside the pages directory

// Placeholder Components for Missing Files
const NotFoundPage = () => <div>404 - Page Not Found</div>;

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage />} />

          {/* Login, Signup, and Forgot Password */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* User and Admin Dashboards */}
          <Route path="/user" element={<UserPage />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Property Category Routes */}
          <Route path="/available-properties" element={<AvailablePropertiesPage />} />
          <Route path="/remaining-properties" element={<RemainingPropertiesPage />} />
          <Route path="/high-cost-properties" element={<HighCostPropertiesPage />} />
          <Route path="/low-cost-properties" element={<LowCostPropertiesPage />} />
          <Route path="/middle-class-properties" element={<MiddleClassPropertiesPage />} />

          {/* User Profile and Favorites */}
          <Route path="/profile" element={<MyProfilePage />} />
          <Route path="/favorites" element={<Favorites />} />

          {/* Property Management */}
          <Route path="/add-new-property" element={<AddNewProperty />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/requests" element={<RequestsPage />} />

          {/* Contacts Page */}
          <Route path="/contacts" element={<Contacts />} />

          {/* Fallback Route for 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
