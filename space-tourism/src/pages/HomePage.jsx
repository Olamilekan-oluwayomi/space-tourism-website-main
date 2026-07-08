import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="flex flex-1 flex-col items-center gap-400 px-400 pt-400 text-center md:gap-800 md:px-800 md:pt-800 lg:flex-row lg:items-center lg:justify-between lg:text-left lg:pt-0">
        {/* Text content */}
        <div className="flex max-w-[600px] lg:max-w-[450px] flex-col items-center gap-200 md:gap-400 lg:items-start">
          <p className="font-condensed text-preset-8 tracking-[2.7px] text-blue-300  md:text-preset-6">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className="font-serif text-preset-2 md:text-preset-1 uppercase text-white">
            Space
          </h1>
          <p className="text-preset-9 text-blue-300 md:text-preset-6 lg:text-preset-8">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>

        {/* Explore button */}
        <div className="mt-800 pb-[40px] md:mt-1600 md:pb-[118px] lg:mt-0 lg:pb-0">
          <div className="group relative flex items-center justify-center">
            {/* Expanding translucent ring */}
            <div className="absolute h-[150px] w-[150px] scale-100 rounded-full bg-white/10 opacity-0 transition-all duration-300 group-hover:scale-[1.35] group-hover:opacity-100 md:h-[242px] md:w-[242px] lg:h-[274px] lg:w-[274px]" />

            {/* Explore button */}
            <NavLink
              to="/destination"
              className="relative flex h-[150px] w-[150px] items-center justify-center rounded-full bg-white font-serif text-preset-5 md:text-preset-4 uppercase text-blue-900 transition-transform duration-300 group-hover:scale-105 md:h-[242px] md:w-[242px] lg:h-[274px] lg:w-[274px]"
            >
              Explore
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
