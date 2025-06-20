import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Admin/pages/Home";
import Signup from "./Admin/pages/Signup";
import Login from "./Admin/pages/Login";
import Dashboard from "./Admin/pages/Dashboard";
import ArchitectDashboard from "./Admin/pages/ArchitectDashboard";
import Approval from "./Admin/components/Approval";
import SettingsDashboard from "./Admin/components/Settings/SettingsDashboard";
import Subscription from "./Admin/components/Subscription";
// vendor-routes
import VendorDashboard from "./Admin/pages/VendorDashboard";
import VendorManagement from "./Admin/components/VendorDashboard/VendorManagement";
import VendorManagemenForm from "./Admin/components/VendorDashboard/VendorManagemenForm";
// profile imports
import Profile from "./Admin/components/profile/Profile";
import PersonalProfile from "./Admin/components/profile/PersonalProfile";
import InternalProfile from "./Admin/components/profile/InternalProfile";
//Task imports
import Task from "./Admin/DashboardPages/Task/Task";
import TaskForm from "./Admin/DashboardPages/Task/TaskForm";
import TaskManagement from "./Admin/DashboardPages/Task/TaskManagement";
import Tasklogs from "./Admin/DashboardPages/Task/Tasklogs";
//lead imports
import LeadManagement from "./Admin/DashboardPages/Lead/LeadManagement";
import LeadForm from "./Admin/DashboardPages/Lead/LeadForm";
import Contract from "./Admin/components/Contract";
// project importss
import Projects from "./Admin/components/projects/Projects";
import ProjectForm from "./Admin/components/projects/ProjectForm";
// quote imports
import Quote from "./Admin/components/Quote/Quote";
import QuoteTask from "./Admin/components/Quote/QuoteTask";
import QuoteForm from "./Admin/components/Quote/QuoteForm";
// product imports
import Product from "./Admin/components/Product/Product";
import ProductForm from "./Admin/components/Product/ProductForm";
// AI-routes
import AiHome from "./Admin/components/AiBot/AiHome";
import Uplaod from './Admin/components/AiBot/Upload'
import Preview from "./Admin/components/AiBot/Preview";
//order-routes
import AddOrderForm from "./Admin/components/Order/AddOrderForm";
import Order from "./Admin/components/Order/order";
// invoice-routes
import Invoice from "./Admin/components/Invoice/Invoice";
import InvoiceForm from "./Admin/components/Invoice/InvoiceForm";
// financial-routes
import FinancialMargin from "./Admin/components/Financial/FinancialMargin";
import AddNewFinancial from "./Admin/components/Financial/AddNewFinancial";
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
import ProjectView from "./Admin/components/projects/ProjectView";
import CategoryPage from "./client/components/CategoryPage";
import BasicDetails from "./Admin/components/projects/BasicDetails";
import LeadDetails from "./Admin/DashboardPages/Lead/LeadDetails";
import ProjectManagement from "./Admin/components/projects/ProjectManagement";
import SiteProgress from "./Admin/components/projects/SiteProgress";


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
        <Route path="/project/:id" element={<ProjectView />} />
        <Route path="/projectform/:id" element={<ProjectForm />} />
        <Route path="/project/basicdetails" element={<BasicDetails />} />
        <Route path="/project/management" element={<ProjectManagement />} />
        <Route path="/project/progress" element={<SiteProgress />} />
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
        <Route path="/leads/leaddetails" element={<LeadDetails />} />
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
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;

