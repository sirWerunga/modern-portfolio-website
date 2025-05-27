import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./components/ThemeProvider";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
        <TooltipProvider>
          <div className="min-h-screen bg-background">
            <Navigation />
            <main className="pt-16">
              <Router />
            </main>
            <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="mb-4 md:mb-0">
                    <p className="text-gray-600 dark:text-gray-300">
                      © 2024 Alex Chen. Built with passion and modern web technologies.
                    </p>
                  </div>
                  <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                      <i className="far fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
