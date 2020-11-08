import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Keerthana ',
  lang: 'en', // e.g: en, es, fr, jp
  description: 'I do tech stuff',
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Keerthana Krishnan',
  subtitle: "I'm passionate about tech",
  cta: 'Read more',
};

// ABOUT DATA
export const aboutData = {
  title: 'A bit about me',
  img: 'profile.jpg',
  paragraphOne:
    "I'm a software engineer based in Munich. I love building websites and talking about tech stuff",
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.linkedin.com/in/keerthana-krishnan-39375557/', // if no resume, the button will not show up
  cta: 'Even More',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'KK_jsConfAsia.jpg',
    title: 'JS Conf Asia 2019, Singapore',
    info: 'Speaker on the topic "Real World Problems - Internet Beyond The First World Bubble"',
    info2: '',
    url:
      'https://www.youtube.com/watch?v=skml8SjOtKg&list=PL37ZVnwpeshEHcw37PA29vZCJRoIER9r3&index=8&ab_channel=JSConf',
    btn: 'Watch Now',
    link: 'Link to slides',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'KK_perfMatters.png',
    title: 'Perf Matters 2019, San Francisco',
    info: 'Speaker on the topic "A Billion Phones and Even More People"',
    info2: '',
    url:
      'https://www.youtube.com/watch?v=sJGFXuvKyt4&list=PLSmH2HL6l9pw47J-xWZSIH7HpEgqlGiXD&index=2&ab_channel=estellevw',
    btn: 'Watch Now',
    link: 'Link to slides',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'KK_jsKongress.jpg',
    title: 'JS Kongress 2019, Munich',
    info: 'Speaker on the topic "The Front-End Stands Alone"',
    info2: '',
    url: 'https://www.youtube.com/watch?v=4Y7LnVILnGE&ab_channel=JSKongress',
    btn: 'Watch Now',
    link: 'Link to slides',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  title: 'Wanna talk?',
  cta: "Reach out, let's connect!",
  btn: 'Ping me',
  email: 'keerthanakrishnan.mec@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/keerthanak17',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/keerthana-krishnan-39375557/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/keerthanak17',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
