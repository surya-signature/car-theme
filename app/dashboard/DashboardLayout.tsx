
import AppSidebar from '@/dashboard-components/AppSidebar';
import TopBar from '@/dashboard-components/TopBar';
import { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState<string>("Home");
  const [loading, setLoading] = useState<boolean>(true); // State for loading

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Simulate loading for 3 seconds (for demonstration)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {/* Top Bar (Full width) */}
      <div className="w-full bg-gray-800  dark:bg-black ">
        <TopBar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      </div>

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {isSidebarOpen && (
          <aside className="w-60 dark:bg-black  bg-white transition-transform transform lg:translate-x-0 lg:static fixed inset-y-0 z-10">
            <AppSidebar activeItem={activeItem} setActiveItem={setActiveItem} closeSidebar={closeSidebar} />
          </aside>
        )}






        {/* Content Area */}
        <main
          className={`dark:shadow-inner dark:bg-black  flex-1 overflow-y-auto p-4 bg-white ${isSidebarOpen ? 'ml-0' : 'ml-0'} transition-all duration-300`}
          style={{
            boxShadow: 'inset 1px 4px 6px rgba(0, 0, 0, 0.1)',
            boxSizing: 'border-box'
          }}
        >
          {/* Show loading spinner if content is loading */}
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <ClipLoader color="#36d7b7" size={50} />
            </div>
          ) : (
            children // Show actual content once loading is complete
          )}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
