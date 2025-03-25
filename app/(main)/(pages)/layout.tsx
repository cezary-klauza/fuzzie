import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='border-l border-t pb-20 h-screen rounded-l-3xl overflow-auto'>
      {children}
    </div>
  );
};

export default Layout;
