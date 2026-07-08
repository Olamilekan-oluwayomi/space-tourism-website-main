import douglasWebp from "../assets/crew/image-douglas-hurley.webp";
import douglasPng from "../assets/crew/image-douglas-hurley.png";
import markWebp from "../assets/crew/image-mark-shuttleworth.webp";
import markPng from "../assets/crew/image-mark-shuttleworth.png";
import victorWebp from "../assets/crew/image-victor-glover.webp";
import victorPng from "../assets/crew/image-victor-glover.png";
import anoushehWebp from "../assets/crew/image-anousheh-ansari.webp";
import anoushehPng from "../assets/crew/image-anousheh-ansari.png";

const CREW = [
  {
    id: 0,
    role: "Commander",
    name: "Douglas Hurley",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: {
      webp: douglasWebp,
      png: douglasPng,
    },
  },
  {
    id: 1,
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: {
      webp: markWebp,
      png: markPng,
    },
  },
  {
    id: 2,
    role: "Pilot",
    name: "Victor Glover",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: {
      webp: victorWebp,
      png: victorPng,
    },
  },
  {
    id: 3,
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: {
      webp: anoushehWebp,
      png: anoushehPng,
    },
  },
];

export default CREW;
