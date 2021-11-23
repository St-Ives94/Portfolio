import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ivory Smith | Developer',
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome, Bonjour!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello! My name is ',
  name: 'Ivory Smith',
  subtitle: 'I am a frontend developer.',
  cta: 'Let\'s check it out',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilephoto.png',
  paragraphOne: 'I am a self-taught developer with 8 years of Graphic Design. ',
  paragraphTwo: 'I am an enthusiastic and patient developer with exceptional flexibility and resourcefulness.',
  paragraphThree: 'My favorite hobbies include learning French (je suis un étudiant constant), star-gazing, taking care of my plant babies, creating sweet and savory treats, and playing video games. ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cafe-chic.png',
    title: 'Café Chic',
    info: 'Inspired by the love of pastries and the cafe aesthetic. I created a one-page website for a fake restaurant using only HTML and CSS with the intention of making it responsive to multiple devices.',//More will be added!
    info2: '',
    url: 'https://cafe-chic.herokuapp.com/',
    repo: 'https://github.com/St-Ives94/Cafe_Chic', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'easybank.png',
    title: 'Easy Bank',
    info: 'Landing page that creates a responsive website where users can hover over active links and react.Utilized different effects using CSS selectors.',
    info2: 'Creatively usage of Links to improve viewing and site interaction for users.',
    url: '',
    repo: 'https://github.com/St-Ives94/easyBank_challenge', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'AA_Screenshot.png',
    title: 'Astronomers Anonymous',
    info: 'Design and successfully  implemented Google APIs to present nearby observatories. Successfully implement React Hooks and React Router to smoothly switch between pages.',
    info2: 'Research and applied responsive web page design for multiple devices and user-friendly experience.',/* and login pop-up option*/
    url: 'https://aa-space.netlify.app/',
    // will add a live soon
    repo: 'https://github.com/St-Ives94/Astronomers_Anonymous', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Let\'s Connect!',
  email: 'smith.ivory94@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ivory-s/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/St-Ives94/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
