import SidebarLeft from "./LeftMenu/SidebarLeft";
import SidebarRight from "./RightMenu/SidebarRight";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 relative">
      {/* Sidebar izquierdo */}
      <div className="hidden md:block fixed top-0 left-0 h-screen w-[240px] bg-white shadow-md z-20">
        <SidebarLeft />
      </div>

      {/* Sidebar derecho */}
      <div className="hidden md:block fixed top-0 right-0 h-screen w-[60px] bg-white border-l z-20">
        <SidebarRight />
      </div>

      {/* Contenido principal */}
      <main className="md:ml-[240px] md:mr-[60px]">
        {children}
      </main>
    </div>
  );
};

export default Layout;
