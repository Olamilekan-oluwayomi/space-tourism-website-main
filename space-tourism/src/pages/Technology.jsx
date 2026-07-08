import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import technologyData from "../data/technology";

function Technology() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTechnology = technologyData[activeIndex];

  return (
    <main className="flex min-h-screen flex-col px-400 pt-400 pb-800 text-center md:px-800 md:pt-800 md:pb-1000 lg:px-1000 lg:pt-1000 lg:pb-1000 lg:text-left">
      <h2 className="mb-300 font-condensed text-preset-9 uppercase tracking-[4.72px] text-white md:text-left md:text-preset-8 lg:text-preset-6">
        <span className="mr-200 font-bold opacity-25">03</span>
        Space launch 101
      </h2>

      <div className="mt-600 flex flex-col items-center gap-600 lg:mt-800 lg:flex-row lg:items-center lg:justify-between lg:gap-800">
        {/* Content */}
        <div className="order-2 flex flex-col items-center gap-400 lg:order-1 lg:flex-row lg:items-start lg:gap-600 lg:pr-8">
          <div className="flex gap-300 md:gap-400 lg:flex-col">
            {technologyData.map((technology, index) => (
              <button
                key={technology.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-pressed={index === activeIndex}
                className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border font-serif text-preset-8 transition-all duration-300 md:h-14 md:w-14 md:text-preset-5 ${
                  index === activeIndex
                    ? "border-white bg-white text-blue-900"
                    : "border-white/25 text-white hover:border-white hover:bg-white/10"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTechnology.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="max-w-[400px] md:max-w-[600px] lg:max-w-[470px]"
            >
              <p className="font-condensed text-preset-9 uppercase tracking-[2.36px] text-blue-300 md:text-preset-6">
                The terminology...
              </p>

              <h1 className="mt-200 font-serif text-preset-4 uppercase text-white md:text-preset-3">
                {activeTechnology.title}
              </h1>

              <p className="mt-300 text-preset-9 leading-loose text-blue-300">
                {activeTechnology.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image */}
        <div className="order-1 -mx-400 md:-mx-800 lg:order-2 lg:mx-0 lg:flex lg:flex-1 lg:justify-end">
          <picture className="block w-full lg:max-w-[608px]">
            <source
              media="(min-width: 1024px)"
              srcSet={activeTechnology.images.portrait}
              sizes="608px"
            />

            <img
              src={activeTechnology.images.landscape}
              alt={activeTechnology.title}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              sizes="100vw"
              className="h-55 w-full object-cover md:h-90 lg:h-auto lg:object-contain"
            />
          </picture>
        </div>
      </div>
    </main>
  );
}

export default Technology;
