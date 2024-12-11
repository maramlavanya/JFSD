import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing Pages for Property Management
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard"; // Admin Dashboard
import UserPage from "./pages/UserPage"; // User Dashboard
import TransactionsPage from "./pages/TransactionsPage";
import PropertiesPage from "./pages/PropertiesPage";
import RequestsPage from "./pages/RequestsPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Property from "./pages/Property"; // Import the Property component
import AvailablePropertiesPage from "./pages/AvailablePropertiesPage";
import RemainingPropertiesPage from "./pages/RemainingPropertiesPage";
import HighCostPropertiesPage from "./pages/HighCostPropertiesPage";
import LowCostPropertiesPage from "./pages/LowCostPropertiesPage";
import MiddleClassPropertiesPage from "./pages/MiddleClassPropertiesPage";

// Importing Pages for Home Design Ideas
import HomeDesignIdeas from "./pages/HomeDesignIdeas"; // For "Home Design Ideas"
import HallwayDesigns from "./pages/HallwayDesigns";
import TVUnitDesigns from "./pages/TVUnitDesigns";
import LivingRoomDesigns from "./pages/LivingRoomDesigns";
import ModularKitchenDesigns from "./pages/ModularKitchenDesigns";
import BedroomDesigns from "./pages/BedroomDesigns";
import BathroomDesigns from "./pages/BathroomDesigns";
import DiningRoomDesigns from "./pages/DiningRoomDesigns";
import PoojaRoomDesigns from "./pages/PoojaRoomDesigns";
import StudyRoomDesigns from "./pages/StudyRoomDesigns";
import BalconyDesigns from "./pages/BalconyDesigns";
import WardrobeDesigns from "./pages/WardrobeDesigns";
import FalseCeilingDesigns from "./pages/FalseCeilingDesigns";
import HomeOfficeDesigns from "./pages/HomeOfficeDesigns";
import CrockeryUnitDesigns from "./pages/CrockeryUnitDesigns";
import TileDesigns from "./pages/TileDesigns";
import BedDesigns from "./pages/BedDesigns";
import FlooringDesigns from "./pages/FlooringDesigns";

// Other Pages
import MyProfilePage from "./pages/MyProfilePage";
import AddNewProperty from "./pages/AddNewProperty";
import Favorites from "./pages/Favorites";
import NotFoundPage from "./pages/NotFoundPage"; // 404 Page

// Dashboard Components
import ToDo from "./components/ToDo";
import MyProperty from "./components/MyProperty";
import Tenants from "./components/Tenants";
import Agents from "./components/Agents";
import Reviews from "./components/Reviews";
import Messages from "./components/Messages";
import Calendar from "./components/Calendar";
import Updates from "./components/Updates";

// Placeholder Components for Missing Pages
const ContactForm = () => <div>Contact Form Page</div>;

function App() {
  return (
    <Router>
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

        {/* Property Routes */}
        <Route path="/property" element={<Property />} />
        <Route path="/available-properties" element={<AvailablePropertiesPage />} />
        <Route path="/remaining-properties" element={<RemainingPropertiesPage />} />
        <Route path="/high-cost-properties" element={<HighCostPropertiesPage />} />
        <Route path="/low-cost-properties" element={<LowCostPropertiesPage />} />
        <Route path="/middle-class-properties" element={<MiddleClassPropertiesPage />} />

        {/* Home Design Routes */}
        <Route path="/home-design" element={<HomeDesignIdeas />} />
        <Route path="/hallway-designs" element={<HallwayDesigns />} />
        <Route path="/tv-unit-designs" element={<TVUnitDesigns />} />
        <Route path="/living-room-designs" element={<LivingRoomDesigns />} />
        <Route path="/modular-kitchen-designs" element={<ModularKitchenDesigns />} />
        <Route path="/bedroom-designs" element={<BedroomDesigns />} />
        <Route path="/bathroom-designs" element={<BathroomDesigns />} />
        <Route path="/dining-room-designs" element={<DiningRoomDesigns />} />
        <Route path="/pooja-room-designs" element={<PoojaRoomDesigns />} />
        <Route path="/study-room-designs" element={<StudyRoomDesigns />} />
        <Route path="/balcony-designs" element={<BalconyDesigns />} />
        <Route path="/wardrobe-designs" element={<WardrobeDesigns />} />
        <Route path="/false-ceiling-designs" element={<FalseCeilingDesigns />} />
        <Route path="/home-office-designs" element={<HomeOfficeDesigns />} />
        <Route path="/crockery-unit-designs" element={<CrockeryUnitDesigns />} />
        <Route path="/tile-designs" element={<TileDesigns />} />
        <Route path="/bed-designs" element={<BedDesigns />} />
        <Route path="/flooring-designs" element={<FlooringDesigns />} />

        {/* User Profile and Favorites */}
        <Route path="/profile" element={<MyProfilePage />} />
        <Route path="/favorites" element={<Favorites />} />

        {/* Property Management */}
        <Route path="/add-new-property" element={<AddNewProperty />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/requests" element={<RequestsPage />} />

        {/* Dashboard Components */}
        <Route path="/todo" element={<ToDo />} />
        <Route path="/my-property" element={<MyProperty />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/updates" element={<Updates />} />

        {/* Contact Form */}
        <Route path="/contact" element={<ContactForm />} />

        {/* Fallback Route for 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
