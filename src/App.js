import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ArchitectDashboard from "./pages/ArchitectDashboard";
import Approval from "./components/Approval";
import SettingsDashboard from "./components/Settings/SettingsDashboard";
import Subscription from "./components/Subscription";
// vendor-routes
import VendorDashboard from "./pages/VendorDashboard";
import VendorManagement from "./components/VendorDashboard/VendorManagement";
import VendorManagemenForm from "./components/VendorDashboard/VendorManagemenForm";
// profile imports
import Profile from "./components/profile/Profile";
import PersonalProfile from "./components/profile/PersonalProfile";
import InternalProfile from "./components/profile/InternalProfile";
//Task imports
import Task from "./DashboardPages/Task/Task";
import TaskForm from "./DashboardPages/Task/TaskForm";
import TaskManagement from "./DashboardPages/Task/TaskManagement";
import Tasklogs from "./DashboardPages/Task/Tasklogs";
//lead imports
import LeadManagement from "./DashboardPages/Lead/LeadManagement";
import LeadForm from "./DashboardPages/Lead/LeadForm";
import Contract from "./components/Contract";
// project importss
import Projects from "./components/projects/Projects";
import ProjectForm from "./components/projects/ProjectForm";
// quote imports
import Quote from "./components/Quote/Quote";
import QuoteTask from "./components/Quote/QuoteTask";
import QuoteForm from "./components/Quote/QuoteForm";
// product imports
import Product from "./components/Product/Product";
import ProductForm from "./components/Product/ProductForm";
// AI-routes
import AiHome from "./components/AiBot/AiHome";
import Uplaod from './components/AiBot/Upload'
import Preview from "./components/AiBot/Preview";
//order-routes
import AddOrderForm from "./components/Order/AddOrderForm";
import Order from "./components/Order/order";
// invoice-routes
import Invoice from "./components/Invoice/Invoice";
import InvoiceForm from "./components/Invoice/InvoiceForm";
// financial-routes
import FinancialMargin from "./components/Financial/FinancialMargin";
import AddNewFinancial from "./components/Financial/AddNewFinancial";
//client Routes
import Ecom from "./client/Ecom";
import Shop from "./client/Shop";
import About from "./client/About";
import Contact from "./client/Contact";
import SingleProductPage from "./client/components/SingleProductPage";
import UserProfile from "./client/components/UserProfile";
import Favourites from "./client/components/Favourites";
import Cart from "./client/components/Cart";
import Blog from './client/Blog'
import CartScreen from "./client/components/CartScreen";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/approval" element={<Approval />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/personalprofile" element={<PersonalProfile />} />
        <Route path="/internalprofile" element={<InternalProfile />} />
        <Route path="/dashboard/" element={<Dashboard />} />
        <Route path="/architectdashboard" element={<ArchitectDashboard />} />
        <Route path="/vendorDashboard" element={<VendorDashboard />} />
        <Route path="/vendormanagement" element={<VendorManagement />} />
        <Route path="/vendormanagementform" element={<VendorManagemenForm />} />
        <Route path="/contract" element={<Contract />} />
        {/* project-routes */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projectform" element={<ProjectForm />} />
        {/* Quote-Routes */}
        <Route path="/quote" element={<Quote />} />
        <Route path="/quotetask" element={<QuoteTask />} />
        <Route path="/quoteform" element={<QuoteForm />} />
        {/* product-routes */}
        <Route path="/product" element={<Product />} />
        <Route path="/productform" element={<ProductForm />} />
        <Route path="/subsrciption" element={<Subscription />} />
        <Route path="/settings" element={<SettingsDashboard />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/addorder" element={<AddOrderForm />} />
        {/* Invoives-routes */}
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/addinvoice" element={<InvoiceForm />} />
        {/* Financial_routes */}
        <Route path="/financial" element={<FinancialMargin />} />
        <Route path="/addfinancial" element={<AddNewFinancial />} />
        {/* DashboardPages-Routes */}
        {/* taskroutes */}
        <Route path="/task" element={<Task />} />
        <Route path="/taskform" element={<TaskForm />} />
        <Route path="/taskmanagement" element={<TaskManagement />} />
        <Route path="/tasklogs" element={<Tasklogs />} />
        {/* Leadroutes */}
        <Route path="/leadmanagement" element={<LeadManagement />} />
        <Route path="/leadform" element={<LeadForm />} />
        {/* Ai-Routes */}
        <Route path="/aihome" element={<AiHome />} />
        <Route path="/aiupload" element={<Uplaod />} />
        <Route path="/aipreview" element={<Preview />} />



        {/* client_routes */}
        <Route path="/ecom" element={<Ecom />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cartscreen" element={<CartScreen />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;

