
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import LazyWrapper from "@/components/LazyWrapper";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Resources = lazy(() => import("./pages/Resources"));
const ReferenceValuesPage = lazy(() => import("./pages/ReferenceValuesPage"));
const BusinessPlanPage = lazy(() => import("./pages/BusinessPlanPage"));
const PrototypesPage = lazy(() => import("./pages/PrototypesPage"));
const ImpressPage = lazy(() => import("./pages/ImpressPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
      refetchOnWindowFocus: false, // Reduce unnecessary refetches
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <LazyWrapper>
                <Index />
              </LazyWrapper>
            } 
          />
          <Route 
            path="/resources" 
            element={
              <LazyWrapper>
                <Resources />
              </LazyWrapper>
            } 
          />
          <Route 
            path="/reference-values" 
            element={
              <LazyWrapper>
                <ReferenceValuesPage />
              </LazyWrapper>
            } 
          />
          <Route 
            path="/business-plan" 
            element={
              <LazyWrapper>
                <BusinessPlanPage />
              </LazyWrapper>
            } 
          />
          <Route 
            path="/prototypes" 
            element={
              <LazyWrapper>
                <PrototypesPage />
              </LazyWrapper>
            } 
          />
          <Route 
            path="/impress" 
            element={
              <LazyWrapper>
                <ImpressPage />
              </LazyWrapper>
            } 
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route 
            path="*" 
            element={
              <LazyWrapper>
                <NotFound />
              </LazyWrapper>
            } 
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
