// src/data/destinations.js
import moonImage from "../assets/destination/image-moon.png";
import marsImage from "../assets/destination/image-mars.png";
import europaImage from "../assets/destination/image-europa.png";
import titanImage from "../assets/destination/image-titan.png";

export const destinations = [
  {
    name: "Moon",
    image: moonImage,
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    travelTime: "3 Days",
  },
  {
    name: "Mars",
    image: marsImage,
    description:
      "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    distance: "225 Mil. KM",
    travelTime: "9 Months",
  },
  {
    name: "Europa",
    image: europaImage,
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 Mil. KM",
    travelTime: "3 Years",
  },
  {
    name: "Titan",
    image: titanImage,
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 Bil. KM",
    travelTime: "7 Years",
  },
];
