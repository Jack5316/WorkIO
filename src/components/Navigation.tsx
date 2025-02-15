import Settings from "@/pages/Settings";
import Jobs from "@/pages/Jobs";
import Research from "@/pages/Research";
import Documents from "@/pages/Documents";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import Prep from "@/pages/Prep";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Sonner />
        <Toaster />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/research" element={<Research />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/prep" element={<Prep />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;