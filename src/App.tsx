import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "./pages/Home";
import CommercialServices from "./pages/CommercialServices";
import ResidentialServices from "./pages/ResidentialServices";
import WaterDamageRestoration from "./pages/WaterDamageRestoration";
import FireDamageRecovery from "./pages/FireDamageRecovery";
import HurricaneStormRepair from "./pages/HurricaneStormRepair";
import MoldRemediation from "./pages/MoldRemediation";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/commercial-services" element={<CommercialServices />} />
          <Route path="/residential-services" element={<ResidentialServices />} />
          <Route path="/water-damage-restoration" element={<WaterDamageRestoration />} />
          <Route path="/fire-damage-recovery" element={<FireDamageRecovery />} />
          <Route path="/hurricane-storm-repair" element={<HurricaneStormRepair />} />
          <Route path="/mold-remediation" element={<MoldRemediation />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
