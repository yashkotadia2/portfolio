import chat from '../assets/svg/projects/chat.svg'
import erp from '../assets/svg/projects/erp.svg'
import jewelry from '../assets/svg/projects/jewelry.svg'
import security from '../assets/svg/projects/security.svg'
import quotes from '../assets/svg/projects/quotes.svg'
import exam from '../assets/svg/projects/exam.svg'

export const projectsData = [
    {
        id: 1,
        projectName: 'Enterprise Resource Planning',
        projectDesc: 'OEMUP is a cutting-edge Enterprise Resource Planning (ERP) software designed to revolutionize the way businesses operate and manage their processes.',
        tags: ['React', 'SASS', 'AG-Grid', 'Antd'],
        code: '',
        demo: 'https://aeroda.in/register',
        image: erp
    },
    {
        id: 2,
        projectName: 'Chat App with Socket.io',
        projectDesc: 'React Chat App powered by Socket.io, combines the dynamic capabilities of React.js and the real-time communication prowess of Socket.io to deliver a seamless and engaging chat application.',
        tags: ['React', 'Socket.io', 'Node.js', 'Express.js', 'MongoDB'],
        code: '',
        demo: 'https://simple-chat-mern.netlify.app/signup',
        image: chat
    },
    {
        id: 3,
        projectName: 'Security Website with Animations',
        projectDesc: 'RSF Guards is a security website that leverages the power of React.js and Framer Motion to deliver a visually appealing and interactive user interface. It features smooth animations and transitions, ensuring a delightful user experience.',
        tags: ['React', 'Framer Motion', 'React-Icons'],
        code: '',
        demo: 'https://rsfguards.ca/',
        image: security
    },
    {
        id: 4,
        projectName: 'Jewelry Website Template',
        projectDesc: 'This Jewelry Website Template aims to provide an elegant and user-friendly UI for showcasing exquisite jewelry collections. It features a clean design with smooth transitions and interactive elements, ensuring a seamless user experience.',
        tags: ['HTML', 'CSS', 'Vanilla JS'],
        code: '',
        demo: 'https://jewelsbyneha.netlify.app/',
        image: jewelry
    },
    {
        id: 5,
        projectName: 'Random Quotes App',
        projectDesc: ' A simple app that fetches random quotes from an API and displays them with a beautiful animation.',
        tags: ['React', 'Animations', 'APIs'],
        code: '',
        demo: 'https://mindful-quote.netlify.app/',
        image: quotes
    },
    {
        id: 6,
        projectName: 'Exam Material Access',
        projectDesc: 'A web application that allows students to access exam materials and resources. It features a user-friendly interface and seamless navigation, ensuring a delightful user experience.',
        tags: ['React', 'Firebase', 'Authentication', 'Timer', 'Quiz'],
        code: '',
        demo: 'https://rsf-training.netlify.app/',
        image: exam
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/