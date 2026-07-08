import { useState } from "react";
import { destinations } from "../data/destinations";

function DestinationPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = destinations[activeIndex];

  return (
    <main className="flex flex-col items-center gap-600 px-400 pt-400 text-center md:gap-800 md:px-800 md:pt-800 lg:items-start lg:px-1000 lg:text-left">
      {/* Page heading */}
      <h2 className="font-condensed text-preset-9 md:text-preset-9 lg:text-preset-6 md:text-left md:self-start tracking-[4.72px] text-white">
        <span className="mr-200 font-bold opacity-25">01</span>
        PICK YOUR DESTINATION
      </h2>

      {/* Image + details row wrapper */}
      <div className="flex flex-col items-center gap-600 lg:w-full lg:flex-row lg:items-center lg:justify-between lg:gap-400">
        {/* Planet image */}
        <div className="relative flex items-center justify-center">
          <div className="absolute h-[170px] w-[170px] rounded-full bg-white/5 blur-2xl md:h-[300px] md:w-[300px] lg:h-[445px] lg:w-[445px]" />
          <img
            src={active.image}
            alt={active.name}
            className="relative h-[170px] w-[170px] md:h-[300px] md:w-[300px] lg:h-[445px] lg:w-[445px]"
          />
        </div>

        <div className="flex flex-col items-center gap-400 lg:items-start">
          {/* Tabs */}
          <ul className="flex gap-400 md:gap-500">
            {destinations.map((destination, index) => (
              <li key={destination.name}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`border-b-[3px] pb-200 font-condensed text-preset-8 md:text-preset-9 tracking-[2.36px] uppercase transition-colors cursor-pointer ${
                    index === activeIndex
                      ? "border-white text-white"
                      : "border-transparent text-blue-300 hover:border-white/50"
                  }`}
                >
                  {destination.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Planet name */}
          <h1 className="font-serif text-preset-3 md:text-preset-2 uppercase text-white">
            {active.name}
          </h1>

          {/* Description */}
          <p className="max-w-[450px] md:max-w-[600px] text-preset-9 text-blue-300 md:text-preset-9">
            {active.description}
          </p>

          {/* Divider */}
          <div className="h-px w-full max-w-[327px] md:max-w-[600px] bg-blue-300/25 md:max-w-[573px] lg:max-w-none" />

          {/* Stats */}
          <div className="flex flex-col gap-400 md:w-4/5 md:max-w-[600px] md:flex-row lg:flex-row md:justify-between md:gap-800 ">
            <div>
              <p className="font-condensed text-preset-9 tracking-[2.36px] text-blue-300">
                AVG. DISTANCE
              </p>
              <p className="font-serif text-preset-6 uppercase text-white mt-2">
                {active.distance}
              </p>
            </div>
            <div>
              <p className="font-condensed text-preset-9 tracking-[2.36px] text-blue-300">
                EST. TRAVEL TIME
              </p>
              <p className="font-serif text-preset-6 uppercase text-white mt-2">
                {active.travelTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DestinationPage;
