import { FaBootstrap, FaCode, FaCss3, FaGit, FaGithub, FaHtml5, FaJs, FaLinkedin, FaNode, FaReact, FaWind } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const MENU_LINKS = [
    {id:'01', label:'Home', offset:'-100', to:'hero'},
    {id:'02', label:'Skills', offset:'-80', to:'skills'},
    {id:'03', label:'About Me', offset:'-80', to:'about'},
    {id:'04', label:'Projects', offset:'-80', to:'projects'},
    {id:'05', label:'Contact', offset:'-80', to:'contact'},
];

export const SKILL_TABS = [
    {id:'01', label:'All', value:'all'},
    {id:'02', label:'Languages', value:'languages'},
    {id:'03', label:'Frameworks', value:'frameworks'},
    {id:'04', label:'Databases', value:'databases'},
    {id:'05', label:'Tools', value:'tools'},
]

export const SKILLS = [
    {
        id: "01",
        icon: FaReact,
        skill: "React JS",
        type: "frameworks",
        description: 
        "Experienced in building scalable, component-driven applications using React.js. Proficient in state management, Hooks, and integrating third-party libraries for enhanced functionality.",
    },
    {
        id: "02",
        icon: FaHtml5,
        skill: "HTML5",
        type: "languages",
        description: 
        "Skilled in structuring semantic, accessible, and SEO-friendly web pages using HTML5. Experienced in building clean and maintainable markup as the foundation for responsive web interfaces.",
    },
    {
        id: "03",
        icon: FaCss3,
        skill: "CSS3",
        type: "languages",
        description: 
        "Proficient in designing responsive, visually engaging user interfaces using CSS3. Experienced in leveraging Flexbox, Grid, and animations to create modern, consistent layouts across devices.",
    },
    {
        id: "04",
        icon: FaWind,
        skill: "TailWind",
        type: "frameworks",
        description: 
        " Experienced in building sleek, responsive user interfaces with utility-first classes. Skilled in rapid UI development, custom theming, and maintaining design consistency across components.",
    },
    {
        id: "05",
        icon: FaBootstrap,
        skill: "Bootstrap",
        type: "frameworks",
        description: 
        "Proficient in quickly developing responsive, mobile-first websites using Bootstrap’s prebuilt components and grid system. Experienced in customizing themes to create consistent and professional designs.",
    },
    {
        id: "06",
        icon: FaJs,
        skill: "JavaScript",
        type: "languages",
        description: 
        "Experienced in writing clean, efficient, and maintainable JavaScript code for dynamic and interactive web applications. Proficient in ES6+ features, asynchronous programming, and DOM manipulation.",
    },
    {
        id: "07",
        icon: FaNode,
        skill: "Node",
        type: "frameworks",
        description: 
        " Skilled in building scalable and efficient server-side applications using Node.js. Experienced in handling asynchronous operations, creating RESTful APIs, and integrating with databases.",
    },
    {
        id: "08",
        icon: FaReact,
        skill: "Express",
        type: "frameworks",
        description: 
        "Experienced in building fast, scalable backend APIs using Express.js. Skilled in routing, middleware integration, and creating RESTful services for web applications.",
    },
    {
        id: "09",
        icon: FaReact,
        skill: "TypeScript",
        type: "languages",
        description: 
        "Proficient in writing strongly-typed, scalable code using TypeScript to improve code quality and maintainability. Experienced in leveraging advanced types and interfaces for robust application development.",
    },
    {
        id: "10",
        icon: FaReact,
        skill: "NextJS",
        type: "frameworks",
        description: 
        "Skilled in building performant, SEO-friendly React applications using Next.js. Experienced with server-side rendering, static site generation, and API routes for full-stack development.",
    },
    {
        id: "11",
        icon: FaReact,
        skill: "MySQL",
        type: "databases",
        description: 
        " Proficient in designing and managing relational databases using MySQL. Experienced in writing efficient queries, optimizing database performance, and ensuring data integrity.",
    },
    {
        id: "12",
        icon: FaReact,
        skill: "MongoDB",
        type: "databases",
        description: 
        "Skilled in working with NoSQL databases using MongoDB. Experienced in designing flexible, schema-less data models and performing efficient queries for scalable applications.",
    },
    {
        id: "13",
        icon: FaReact,
        skill: "PostgreSQL",
        type: "databases",
        description:
        " Experienced in building and managing robust relational databases with PostgreSQL. Proficient in complex queries, data integrity, and advanced features like JSON support and indexing for optimized performance.",
    },
    {
        id: "14",
        icon: FaGit,
        skill: "Git",
        type: "tools",
        description:
        "Proficient in version control using Git for efficient code collaboration and management. Experienced in branching, merging, and resolving conflicts to maintain clean project history.",
    },
    {
        id: "15",
        icon: FaGithub,
        skill: "GitHub",
        type: "tools",
        description:
        "Skilled in using GitHub for collaborative development, code hosting, and version control. Experienced in managing repositories, pull requests, and continuous integration workflows.",
    },
    {
        id: "16",
        icon: FaCode,
        skill: "VS Code",
        type: "tools",
        description:
        "Proficient in using Visual Studio Code as a powerful code editor. Experienced with extensions, debugging tools, and workspace customization to streamline development workflows.",
    }
];

export const ABOUT_ME = {
    content: `I'm a web developer 🧩 with a passion for crafting interactive, responsive, and impactful digital experiences. I specialize in building modern web applications that combine clean code with thoughtful design to deliver seamless user experiences across devices.
    \nDriven by curiosity and a love for continuous learning, I'm always exploring the latest trends in web development—from component-driven architectures and state management strategies to performance tuning and accessibility best practices.
    \nFor me, innovation in web development is about pushing boundaries, refining the user experience, and building products that people genuinely enjoy using. I'm constantly honing my skills to stay current with the fast-paced evolution of the web, and I take pride in delivering solutions that are not just functional but thoughtfully engineered.`,
    socialLinks: [
        {id: "01", label: "GitHub", icon: FaGithub, link: "https://github.com/Anurag2618g"},
        {id: "02", label: "Linkedin", icon: FaLinkedin, link: "https://www.linkedin.com/in/anurag-gupta-77b701215/"},
        {id: "03", label: "Twitter", icon: FaXTwitter, link: "https://x.com/Anurag2618G"},
    ],
    email: "anurag2618g@gail.com",
    phone: "+91 9258376208",
};