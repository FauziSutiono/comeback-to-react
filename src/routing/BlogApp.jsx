import { lazy, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./Home"));
const BlogPost = lazy(() => import("./BlogPost"));
const Dashboard = lazy(() => import("./Dashboard"));
const NotFound = lazy(() => import("./NotFound"));

const ProtectedRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to=".." />;
};

export const BlogApp = () => {
  const isAuthenticated = false;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="blog/:id" element={<BlogPost />} />

        <Route path="dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<Dashboard />} />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
