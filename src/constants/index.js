import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  Estate,
  Learnify,
  App,
  threejs,
  sviet,
  s60,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "SVIET",
    icon: sviet,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "App Developer",
    company_name: "Super 60",
    icon: s60,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Present",
    points: [
      "Developing and maintaining mobile applications using React Native and modern mobile development frameworks.",
      "Building cross-platform apps with native functionality for both iOS and Android platforms.",
      "Implementing mobile-first UI/UX designs and ensuring smooth performance across different devices.",
      "Optimizing app performance, reducing load times, and implementing offline functionality.",
    ],
  },
  {
    title: "UI/UX Designer",
    company_name: "Super 60",
    icon: s60,
    iconBg: "#383E56",
    date: "Dec 2023 - Present",
    points: [
      "Creating user-centered designs by understanding business requirements and user feedback.",
      "Developing wireframes, user flows, and interactive prototypes using tools like Figma and Adobe XD.",
      "Conducting user research and usability testing to optimize user experiences.",
      "Collaborating with developers to ensure high-quality implementation of design systems and visual elements.",
    ],
  },
  {
    title: "Canva , Wordpress , Shopify , Figma , Adobe Photoshop",
    company_name: "SVIET",
    icon: sviet,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "Creating engaging visual content and marketing materials using Canva and Adobe Photoshop for various digital platforms.",
      "Developing and maintaining WordPress websites, including custom theme modifications and plugin integration.",
      "Building and managing e-commerce stores on Shopify, including theme customization and product optimization.",
      "Designing user interfaces and creating design systems using Figma for web and mobile applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Real Estate",
    description:
      "Web-based platform that allows users to search, book, Their Dream Homes from various Locations, providing a convenient and efficient solution Of real Estate, They Can Even Compare Prices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Estate,
    source_code_link: "https://github.com/",
  },
  {
    name: "Learnify",
    description:
      "Web application that enables Students to search for Their Particular College's Study Materials, They Can Study Online From Any Professor Or Teacher They Want And They Can Also Access Their Notes And RQ.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: Learnify,
    source_code_link: "https://github.com/",
  },
  {
    name: "My Field App",
    description:
      "A Complete Field App For Farmers To Manage Their Field and Their Crops , They Can Also Take E-Consult for Their Agricultural Or Financial Problems,Also Can See The Weather Forecast And Can Have Recommendations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: App,
    source_code_link: "https://github.com/hasnainkhan2404/Myfieldoriginal.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
