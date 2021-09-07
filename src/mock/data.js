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
  img: 'download20210704125238.png',
  paragraphOne: 'I am a self-taught developer with 8 years of Graphic Design. ',
  paragraphTwo: 'I am an enthusiastic and patient developer with exceptional flexibility and resourcefulness.',
  paragraphThree: 'My favorite hobbies include learning French (je suis un étudiant constant), star-gazing, taking care of my plant babies, creating sweet and savory treats, and playing video games. ',
  resume: 'https://drive.google.com/file/d/1e03dlO316Z__sgadN1S04L62hFUvqsjL/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cafe-chic.png',
    title: 'Café Chic',
    info: 'Inspired by the love of pastries and the cafe aesthetic. I created a one-page website for a fake restaurant using only HTML and CSS with the intention of making it responsive to sizing aspects.',//More will be added!
    info2: '',
    url: 'https://cafe-chic.herokuapp.com/',
    repo: 'https://github.com/St-Ives94/Cafe_Chic', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tarot-landing.png',
    title: 'Tarot 2 Go',
    info: 'This is a landing page for a lifestyle app that was implemented in HTML and CSS. ',
    info2: '',
    url: '',
    repo: 'https://github.com/St-Ives94/tarot-2-go-landing', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'astronaut-sample.jpg',
    title: 'Astronomers Anonymous',
    info: 'Welcome to the club of space lovers! I created a website with JavaScript, and ReactJS components.',
    info2: 'Included Google Maps API to show nearby observatories . ',/* and login pop-up option*/
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
      url: 'https://www.linkedin.com/in/ivory-smith-865abb143/',
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
