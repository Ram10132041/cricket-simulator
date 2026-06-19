import type { ReactNode } from "react";
import { useTheme } from "../../context/ThemeContext";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const { theme, toggleTheme } = useTheme();

  const outerClasses =
    theme === "light"
      ? "min-h-screen bg-slate-50 px-4 py-6 text-slate-900"
      : "min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black px-4 py-6 text-slate-100";

  return (
    <div className={outerClasses}>
      <header className="max-w-5xl mx-auto flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-extrabold tracking-tight">
            Book Cricket
          </h1>
          <div className="hidden sm:inline-block text-sm text-slate-400">
            A quick, fun cricket simulator
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3 py-1 rounded bg-white/10 text-sm">
            You vs Computer
          </div>
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-sm"
            aria-label="Toggle theme"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto">
        {/* Stadium / Pitch area to give the feel of a cricket match */}
        <div className="flex justify-center mb-8">
          <div className="w-full md:w-3/4 lg:w-2/3">
            <div
              className="rounded-xl shadow-inner overflow-hidden"
              aria-hidden
            >
              <div className="bg-gradient-to-b from-green-800 to-green-700 p-6">
                <div className="mx-auto w-full md:w-11/12 lg:w-10/12">
                  <div className="bg-green-900/60 rounded-lg p-3">
                    <div className="bg-green-700 h-14 rounded-md shadow-md flex items-center justify-center text-white font-semibold">
                      Pitch
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main>{children}</main>
      </div>
    </div>
  );
};

export default PageLayout;
