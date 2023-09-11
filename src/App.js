// Importing necessary libraries and components for routing and toasts.
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Importing the main stylesheet for the application.
import "./App.css";

// Importing various page components used within the app.
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";

// Importing admin-related components and screens.
import AdminLayout from "./pages/admin/AdminLayout";
import Admin from "./pages/admin/screens/Admin";
import Comments from "./pages/admin/screens/comments/Comments";
import ManagePosts from "./pages/admin/screens/posts/ManagePosts";
import EditPost from "./pages/admin/screens/posts/EditPost";

function App() {
  return (
    <div className="App font-opensans">
      {/* Setting up the routes for the application. */}
      <Routes>
        {/* Main home route. */}
        <Route index path="/" element={<HomePage />} />

        {/* Route to display a detailed article/blog page. */}
        <Route path="/blog/:slug" element={<ArticleDetailPage />} />

        {/* Registration and login routes. */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* User profile route. */}
        <Route path="/profile" element={<ProfilePage />} />

        {/* Admin-related routes with nested routing. */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* Default admin route. */}
          <Route index element={<Admin />} />

          {/* Admin routes for comments and posts management. */}
          <Route path="comments" element={<Comments />} />
          <Route path="posts/manage" element={<ManagePosts />} />
          <Route path="posts/manage/edit/:slug" element={<EditPost />} />
        </Route>
      </Routes>

      {/* Toast notifications component. */}
      <Toaster />
    </div>
  );
}

// Exporting the App component so it can be used elsewhere.
export default App;
