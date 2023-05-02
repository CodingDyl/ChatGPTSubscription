import {
  world,
  expertise,
  efficient,
  customize
} from "../assets";

const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "services",
      title: "Services",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const services = [
    {
      title: "Access Anywhere",
      icon: world
    },
    {
      title: "Efficiency",
      icon: efficient
    },
    {
      title: "Expertise",
      icon: expertise
    },
    {
      title: "Personalization",
      icon: customize
    }
  ];

  export { navLinks, services };