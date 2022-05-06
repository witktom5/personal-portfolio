// kind of a "database" for my projects displayed on the portfolio page,
// so i can map over instead of repeating myself

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaSass,
  FaNodeJs,
  FaBootstrap,
  FaNpm,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';

const html = { name: 'HTML5', icon: <FaHtml5 className='w-10 h-10' /> };
const css = { name: 'CSS3', icon: <FaCss3Alt className='w-10 h-10' /> };
const js = { name: 'JavaScript', icon: <FaJs className='w-10 h-10' /> };
const react = { name: 'React', icon: <FaReact className='w-10 h-10' /> };
const sass = { name: 'Sass', icon: <FaSass className='w-10 h-10' /> };
const node = { name: 'NodeJS', icon: <FaNodeJs className='w-10 h-10' /> };
const mongo = { name: 'MongoDB', icon: <SiMongodb className='w-10 h-10' /> };
const bootstrap = {
  name: 'Bootstrap 5',
  icon: <FaBootstrap className='w-10 h-10' />,
};
const tailwind = {
  name: 'Tailwind CSS',
  icon: <SiTailwindcss className='w-10 h-10' />,
};
const npm = {
  name: 'NPM',
  icon: <FaNpm className='w-10 h-10' />,
};
const git = {
  name: 'Git',
  icon: <FaGitAlt className='w-10 h-10' />,
};
const gitHub = {
  name: 'GitHub',
  icon: <FaGithub className='w-10 h-10' />,
};
const projectsData = [
  {
    id: 0,
    title: 'WitMemes',
    description: [
      'A web application that allows to upload images (called memes in the app) and to display them on a dashboard. After registering an account it is possible to add new memes to the page, comment already existing ones and up- or downvote the memes and their comments.',
      'Because I did not use a frontend framework, it was somewhat challenging to implement some features, like making the voting system not refresh the page and instantly display the updated counters.',
      'The show page for memes feature a Go back button, which was a bit tricky to implement. It redirects precisely to where the user clicked on the meme.',
    ],
    seeMore: [
      'MongoDB with Mongoose, Express (with express-session), Node.js, with EJS as a templating engine. Bootstrap 5 with some custom Sass were used for the looks. Cloudinary and its API were used to handle image upload and storage. Multer and multer-storage-cloudinary were used to handle multipart/form-data Cloudinary file upload',
      'This project also uses: Passport, connect-flash, connect-mongo, method-override, moment and express-mongo-sanitize.',
    ],
    liveUrl: 'https://witmemes.herokuapp.com/',
    gitUrl: 'https://github.com/witktom5/witmemes',
    techs: [html, css, js, node, sass, mongo, bootstrap],
  },
  {
    id: 1,
    title: 'Words App',
    description: [
      'This is my first React App. It is a simple quiz with random words from Random Words API. It takes 4 random words and their definitions from API and makes one of the definitions a question.',
      'I used Bootstrap 5 with a tiny bit of Sass. I also used framer-motion for some little animations and react-icons',
      'It is pretty colorful, there is a subtle gradient animation in the background. Correct answers in the quiz grant points. It has "streak" functionality - if you give two correct answers consecutively, you will gain more points for your next correct answer. You lose after 3 wrong answers.',
    ],
    seeMore: [
      'Can be improved by using more complex API, so word categories and difficulty levels could be added. There could also be a high score system. Overall there is a lot to potentially implement in this small app.',
    ],
    liveUrl: 'https://quiz-words.netlify.app',
    gitUrl: 'https://github.com/witktom5/words-app',
    techs: [html, css, js, react, sass, bootstrap],
  },
  {
    id: 2,
    title: 'TV Show Finder',
    description: [
      'A webapp that fetches TV show data from two APIs: TV API (TVmaze) & TV Shows API (EpisoDate) and displays the data. It allows to search for TV shows by their titles (with the use of TVmaze), and it also displays 5 most popular shows according to EpisoDate.',
      'It is responsive and comes with a togglable dark mode.',
    ],
    seeMore: [
      'React 18 with React Router v6 were used as the front-end framework. Axios was used to handle fetch requests from the API.',
      'Tailwind and DaisyUI as well as some custom CSS were used for the UI. There is also a few icons from Font Awesome (react-icons/fa).',
    ],
    liveUrl: 'https://tvshow-finder.netlify.app',
    gitUrl: 'https://github.com/witktom5/tv-app',
    techs: [html, css, js, react, tailwind],
  },

  {
    id: 3,
    title: 'Tetris',
    description: [
      `My first attempt at creating a game. It's a clone of the legendary video game of the same name. Main rules are pretty much the same. You gain points and progress through levels (which just increases the game speed). More rows filled at once means more points. You can restart or pause the game (it also pauses/unpauses itself when window loses/gains focus, for example if you go on another tab in your browser).`,
      'It was made with just HTML5, vanilla JavaScript and pure CSS3.',
    ],
    seeMore: [],
    liveUrl: 'https://witktom5.github.io/tetris/',
    gitUrl: 'https://github.com/witktom5/tetris',
    techs: [html, css, js],
  },
];

export const myTechs = [
  html,
  css,
  js,
  react,
  node,
  mongo,
  sass,
  bootstrap,
  tailwind,
  npm,
  git,
  gitHub,
];

export default projectsData;
