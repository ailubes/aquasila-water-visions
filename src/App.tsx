
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import Index from "./pages/Index";
import ProjectsPage from "./pages/ProjectsPage";
import AdminPage from "./pages/AdminPage";
import NotFound from "./pages/NotFound";
import { 
  ReservoirsPage,
  PoolsPage, 
  PondsPage, 
  AquaculturePage, 
  CustomProjectsPage
} from "./pages/ServicePages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/services/reservoirs" element={<ReservoirsPage />} />
            <Route path="/services/pools" element={<PoolsPage />} />
            <Route path="/services/ponds" element={<PondsPage />} />
            <Route path="/services/aquaculture" element={<AquaculturePage />} />
            <Route path="/services/custom" element={<CustomProjectsPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
