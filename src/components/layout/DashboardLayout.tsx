import { useState } from "react";
import { Menu, X, Home, FileText, BookOpen, Briefcase, Settings, GraduationCap } from "lucide-react";
import Prep from "@/pages/Prep";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: FileText, label: "Documents", path: "/documents" },
    { icon: BookOpen, label: "Research", path: "/research" },
    { icon: Briefcase, label: "Jobs", path: "/jobs" },
    { icon: GraduationCap, label: "Prep", path: "/prep" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 bg-white/80 backdrop-blur-xl border-r border-border`}
      >
        <div className="h-full px-3 py-4 flex flex-col">
          <div className="mb-10 flex items-center justify-between">
            <h1 className="font-display text-2xl text-primary">WorkIO</h1>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-2 rounded-full hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="space-y-2 flex-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div
        className={`transition-margin ${
          isSidebarOpen ? "lg:ml-64" : "ml-0"
        } p-8`}
      >
        <header className="mb-8 flex items-center justify-between">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className={`lg:hidden p-2 rounded-full hover:bg-gray-100 ${
              isSidebarOpen ? "hidden" : "block"
            }`}
          >
            <Menu className="h-5 w-5" />
          </button>
        </header>
        <main className="animate-fade-in">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
