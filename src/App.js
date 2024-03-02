import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";
import AdminLayout from "./pages/admin/AdminLayout";
import Admin from "./pages/admin/screens/Admin";
import Comments from "./pages/admin/screens/comments/Comments";
import ManagePosts from "./pages/admin/screens/posts/ManagePosts";
import EditPost from "./pages/admin/screens/posts/EditPost";
import Categories from "./pages/admin/screens/categories/Categories";
import EditCategories from "./pages/admin/screens/categories/EditCategories";
import Users from "./pages/admin/screens/users/Users";
import BlogPage from "./pages/blog/BlogPage";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        {/* Main home route. */}
        <Route index path="/" element={<HomePage />} />

        {/* Route to display the blog page with all articles. */}
        <Route path="/blog" element={<BlogPage />} />

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
          <Route path="categories/manage" element={<Categories />} />
          <Route
            path="categories/manage/edit/:slug"
            element={<EditCategories />}
          />
          <Route path="users/manage" element={<Users />} />
        </Route>
      </Routes>

      {/* Toast notifications component. */}
      <Toaster />
    </div>
  );
}

export default App;
