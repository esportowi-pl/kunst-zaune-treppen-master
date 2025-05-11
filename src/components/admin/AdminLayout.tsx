
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  FileEdit, 
  Users, 
  Image, 
  Settings, 
  LogOut 
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function AdminLayout() {
  const { isAdmin, isLoading, signOut } = useAuth();
  const location = useLocation();
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  const navItems = [
    { path: "/admin", icon: <LayoutDashboard className="mr-2 h-5 w-5" />, label: "Dashboard" },
    { path: "/admin/content", icon: <FileEdit className="mr-2 h-5 w-5" />, label: "Inhalte" },
    { path: "/admin/projects", icon: <Image className="mr-2 h-5 w-5" />, label: "Projekte" },
    { path: "/admin/team", icon: <Users className="mr-2 h-5 w-5" />, label: "Team" },
    { path: "/admin/settings", icon: <Settings className="mr-2 h-5 w-5" />, label: "Einstellungen" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-white border-r">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">JW Admin</h1>
        </div>
        <div className="flex flex-col justify-between flex-1 py-4">
          <nav className="space-y-1 px-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-2 text-sm rounded-md ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="px-4">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center"
              onClick={() => signOut()}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Abmelden
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Mobile Header */}
        <header className="bg-white shadow-sm z-10 md:hidden">
          <div className="px-4 py-3 flex justify-between items-center">
            <h1 className="text-lg font-medium">JW Admin</h1>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => signOut()}
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-gray-50 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
