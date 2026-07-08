import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CREW from "../data/crew";

const CrewSection = () => {
  const [index, setIndex] = useState(0);
  const currentMember = CREW[index];

  return (
    <section className="min-h-screen flex flex-col lg:flex-row lg:items-center justify-center px-400 pt-400 text-center md:gap-800 md:px-800 md:pt-800  lg:px-1000 lg:text-left">
      {/* Content */}
      <div className="flex-1 flex flex-col items-center lg:items-start">
        {/* Section Heading */}
        <h2 className="mb-600 font-condensed text-preset-9 md:text-preset-8 lg:text-preset-6 uppercase tracking-[4.72px] ">
          <span className="mr-200 font-bold opacity-25">02</span>
          Meet your crew
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentMember.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-132"
          >
            <h3 className="font-serif text-preset-9 uppercase opacity-50 md:text-preset-4 lg:text-preset-5">
              {currentMember.role}
            </h3>

            <h1 className=" font-serif text-preset-6 uppercase md:text-preset-3 lg:text-preset-4">
              {currentMember.name}
            </h1>

            <p className="mt-300 font-sans text-preset-9 leading-loose text-blue-300">
              {currentMember.bio}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="mt-800 flex gap-300">
          {CREW.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`View crew member ${i + 1}`}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === i ? "bg-white" : "bg-white/20 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="mt-800 flex flex-1 justify-center md:mt-0 md:justify-end pb-8">
        <AnimatePresence mode="wait">
          <motion.picture
            key={currentMember.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <source srcSet={currentMember.image.webp} type="image/webp" />

            <img
              src={currentMember.image.png}
              alt={currentMember.name}
              className="h-72 md:h-136 lg:h-168 object-contain"
            />
          </motion.picture>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CrewSection;
