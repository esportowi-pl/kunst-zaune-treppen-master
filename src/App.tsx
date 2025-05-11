
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";

// Pages
import Index from "./pages/Index";
import Metallzaune from "./pages/Metallzaune";
import Holztreppen from "./pages/Holztreppen";
import Projekte from "./pages/Projekte";
import UberUns from "./pages/UberUns";
import Kontakt from "./pages/Kontakt";
import NotFound from "./pages/NotFound";

// Admin Pages
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import ContentManagement from "./pages/admin/ContentManagement";
import ProjectsManagement from "./pages/admin/ProjectsManagement";
import TeamManagement from "./pages/admin/TeamManagement";
import Settings from "./pages/admin/Settings";
import AdminLayout from "./components/admin/AdminLayout";

// Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="content" element={<ContentManagement />} />
              <Route path="projects" element={<ProjectsManagement />} />
              <Route path="team" element={<TeamManagement />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            {/* Public Routes */}
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <main className="min-h-screen pt-16">
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/metallzaune" element={<Metallzaune />} />
                      <Route path="/holztreppen" element={<Holztreppen />} />
                      <Route path="/projekte" element={<Projekte />} />
                      <Route path="/uber-uns" element={<UberUns />} />
                      <Route path="/kontakt" element={<Kontakt />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
