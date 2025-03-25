import Infobar from "@/components/infobar";
import Sidebar from "@/components/sidebar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex overflow-hidden h-screen'>
      <Sidebar />
      <div className='w-full'>
        <Infobar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
