import type { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div
      className="
        min-h-screen
        bg-slate-50
        px-4
        py-6
      "
    >
      {children}
    </div>
  );
};

export default PageLayout;
