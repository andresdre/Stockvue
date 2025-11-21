import React from "react";
import { Link, useLocation, } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { BarChart3, TrendingUp, Briefcase, Eye, Search, Bell, Settings, Sun, Moon, Newspaper } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/Components/ui/button";

const navigationItems = [
  {
    title: "Dashboard",
    url: createPageUrl("Dashboard"),
    icon: BarChart3,
  },
  {
    title: "Markets",
    url: createPageUrl("Markets"),
    icon: TrendingUp,
  },
  {
    title: "Portfolio",
    url: createPageUrl("Portfolio"),
    icon: Briefcase,
  },
  {
    title: "Watchlist",
    url: createPageUrl("Watchlist"),
    icon: Eye,
  },
  {
    title: "News",
    url: createPageUrl("News"),
    icon: Newspaper,
  },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <SidebarProvider>
      <div className={`min-h-screen flex w-full ${darkMode ? 'dark' : ''}`}>
        <style>{`
          :root {
            --primary-navy: #0A0E27;
            --primary-blue: #00D4FF;
            --accent-purple: #6C5CE7;
            --success-green: #00B894;
            --warning-orange: #FDCB6E;
            --danger-red: #E84393;
            --neutral-100: #F8FAFC;
            --neutral-200: #E2E8F0;
            --neutral-800: #1E293B;
            --neutral-900: #0F172A;
          }
          
          .dark {
            --background: var(--neutral-900);
            --foreground: var(--neutral-100);
            --card: var(--primary-navy);
            --card-foreground: var(--neutral-100);
          }
          
          .glass-card {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .dark .glass-card {
            background: rgba(10, 14, 39, 0.8);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(0, 212, 255, 0.2);
          }
          
          .gradient-text {
            background: linear-gradient(135deg, var(--primary-blue), var(--accent-purple));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        `}</style>
        
        <Sidebar className="border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900">
          <SidebarHeader className="border-b border-gray-200 dark:border-gray-800 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-bold text-lg gradient-text">StockVue</h2>
                  <p className="text-xs text-gray-500">Professional Trading</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="h-8 w-8"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-4">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
                Navigation
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        className={`rounded-xl mb-2 transition-all duration-200 ${
                          location.pathname === item.url 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                            : 'hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        <Link to={item.url} className="flex items-center gap-3 px-4 py-3">
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup className="mt-8">
              <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
                Market Status
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="px-3 py-2 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">S&P 500</span>
                    <span className="font-semibold text-green-600">+0.85%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">NASDAQ</span>
                    <span className="font-semibold text-green-600">+1.23%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">DOW</span>
                    <span className="font-semibold text-red-600">-0.42%</span>
                  </div>
                </div>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-gray-200 dark:border-gray-800 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">U</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm truncate">Trader</p>
                <p className="text-xs text-gray-500 truncate">Professional Account</p>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-900">
          <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4 md:hidden">
            <div className="flex items-center justify-between">
              <SidebarTrigger className="hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors duration-200" />
              <h1 className="text-xl font-bold gradient-text">StockVue</h1>
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
            </div>
          </header>

          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
