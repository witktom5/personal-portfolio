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
} from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const html = { name: 'HTML5', icon: <FaHtml5 className='w-10 h-10' /> };
const css = { name: 'CSS3', icon: <FaCss3Alt className='w-10 h-10' /> };
const js = { name: 'JavaScript', icon: <FaJs className='w-10 h-10' /> };
const react = { name: 'React', icon: <FaReact className='w-10 h-10' /> };
const sass = { name: 'Sass', icon: <FaSass className='w-10 h-10' /> };
const node = { name: 'NodeJS', icon: <FaNodeJs className='w-10 h-10' /> };
const mongo = { name: 'MongoDB', icon: <SiMongodb className='w-10 h-10' /> };
const bootstrap = {
  name: 'Bootstrap',
  icon: <FaBootstrap className='w-10 h-10' />,
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
    ],
    seeMore: [],
    liveUrl: 'https://sensational-haupia-506264.netlify.app/',
    gitUrl: 'https://github.com/witktom5/words-app',
    techs: [html, css, js, react, sass],
  },
];

export default projectsData;
