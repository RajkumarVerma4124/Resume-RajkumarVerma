import GitHubIcon from "@material-ui/icons/GitHub";
import {
  AssignmentOutlined,
  Devices,
  Language,
  WebOutlined,
} from "@material-ui/icons";
import Resume from "../assets/files/RajkumarCV(2021).pdf";
import {
  portfolioImages
} from "./portfolioImages";
import { RiFacebookFill } from 'react-icons/ri'
import { RiLinkedinFill } from 'react-icons/ri'
import { ImGithub } from 'react-icons/im'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "Rajkumar Verma",
  title: "Senior Full-Stack Developer",
  birthday: "13th January 1997",
  email: "vermar4124@gmail.com",
  address: "Ghansoli Sector 16, Navi Mumbai, 400701, MH",
  phone: "+91 8169521112",

  socials: {
    Facebook: {
      link: "https://www.facebook.com",
      text: "Rajkumar Verma",
      icon: <RiFacebookFill />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/in/rajkumar-verma-6378ba308/",
      text: "Rajkumar Verma",
      icon: <RiLinkedinFill />,
    },
    GitHub: {
      link: "https://github.com/RajkumarVerma4124",
      text: "RajkumarVerma4124",
      icon: <ImGithub />,
    },
  },

  resume: Resume,

  about:
    "I am a hands-on full stack developer with experience in designing and developing websites and applications using a varied range of technologies and programming languages. I have proven ability to build interactive and user friendly websites and applications. I am personally known to be a very hard working, passionate, adaptable and skilled individual, always striving to get better and achieve.",
  //"A passionate developer constantly acquiring and putting my knowledge to practice by serving the community.",

  experiences: [
    {
      institute: "Instant Transport Solution Pvt Ltd – Gurugram, India",
      title: "Senior Full Stack Developer",
      date: "May 2025 – Present",
      description: "• Collaborated with product owners and BA teams to define feature requirements and translatethem into scalable application modules." +
        "Increased API response speed by 30% by designing and deploying RESTful services using .NET Core Web API." +
        "\n• Refactored legacy ASP.NET Web Forms applications, reducing code complexity and boosting maintainability." +
        "\n• Streamlined user evaluation process, reducing manual assessment time by 40% through automation and optimized workflows." +
        "\n• Coordinated with global stakeholders to ensure compliance with international product standards."
    },
    {
      institute: "Instant Transport Solution Pvt Ltd – Gurugram, India",
      title: "Full Stack Developer",
      date: "June 2022 – April 2025",
      description: "Spearheaded the development of Driver Management, Tyre MIS, and Trip Management modules used by over 500+ users/managers daily." +
        "\n• Created interactive MIS dashboards for Tyres & Trips, increasing operational visibility and decision-making efficiency by 35%." +
        "\n• Migrated apps from Angular 7 to Angular 16 and .NET Core 3.1 to .NET 6, improving erformance by 20% and reducing tech debt." +
        "\n• Implemented AWS S3 file compression, reducing storage usage by over 50%, optimizing monthly cloud costs." +
        "\n• Integrated Fastag & Payment Gateway APIs (Terra, LogiPe, Happay) supporting real-time payment reconciliation." +
        "\n• Designed a role-based auth system with JWT and middleware, enhancing security and user control." +
        "\n• Maintained clean code standards, enforced unit testing, and led code reviews—resulting in 15% fewer bugs in production." +
        "\n• Streamlined CI/CD with Azure DevOps, reducing deployment time by 40%." +
        "\n• Hands-on with Git, AWS EC2, and Azure pipelines."
    },
    {
      institute: "BrideLabz Fellowship Program",
      title: ".Net With Angular and SQL Server",
      date: "Jan 2022 - June 2022",
      description:
        "• The program covered the concepts of Basic & Object Oriented" +
        "Programming with #C, Advanced Programming Constructs," +
        "Web Application Introduction with HTML, CSS and JS, .NET FS w Angular + SQL Server"
    },
    {
      institute: "BrideLabz Fellowship Program",
      title: "Java Developer",
      date: "june 2020 - July 2020",
      description:
        "• Completed Coding Star Certification on the programming language on java and shell scripting programming",
    },
  ],

  educations: [
    {
      title: "SSC",
      institute: "PEHS (Maharashtra Board)",
      date: "Mar 2014",
      description: "Scored Percentage Of - 82%",
    },
    {
      title: "HSC",
      institute: "KBP College (Maharashtra Board)",
      date: "FEB 2016",
      description: "Scored Percentage Of - 67.38%",
    },
    {
      title: "Bacheholor Of Engineering In Information Technology ",
      institute: "SCOE College, (Mumbai University)",
      date: "From 2016 to 2020",
      description:
        "Graduated in Bachelor of degree in Information Technology - 73.64%",
    },
  ],

  services: [
    {
      title: "Angular",
      description:
        "Over 3 years of professional experience in Angular, with additional expertise in React and Next.js technologies.",
      icon: <Devices />,
    },
    {
      title: ".Net",
      description:
        "Over 3 years of professional experience with ASP.NET MVC and Razor Pages.",
      icon: <WebOutlined />,
    },
    {
      title: "SQL Server",
      description: "Over 3 years of professional experience in SQL Server, including database design, development, and optimization",
      icon: <AssignmentOutlined />,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: [
        "Angular",
        "ReactJS",
        "Tailwind",
        "JavaScript",
        "NextJS",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      title: "BACK-END",
      description: [".NET Framework", ".NET Core", "C#"]
    },
    {
      title: "DATABASES",
      description: ["Firebase", "MySQL", "SQL Server"],
    },
    {
      title: "SOURCE CONTROL ",
      description: ["Git (ShellScript)", "GitHub"],
    },
  ],

  projects: [
    {
      tag: "React Js",
      images: [...portfolioImages.react.airbnbreact],
      title: "Airbnb",
      caption: "Airbnb UI Clone",
      description:
        "Homepage UI of the official Airbnb website, including the dates dopdown using an external library.\n\nTechnologies used:\n• ReactJS",
      links: [
        {
          link: "https://airbnb-clone-rv.netlify.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "React Js",
      images: [...portfolioImages.react.amazon],
      title: "Amazon Clone",
      caption: "Amzone Clone Ecommerce Web App",
      description:
        "Build amazon clone with many features like adding, removing buying product with stripe.\n\nTechnologies used:\n• ReactJS\n• Firebase\n• STRIPE-CLI",
      links: [
        {
          link: "https://amazon-shop-rv.netlify.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "React Js",
      images: [...portfolioImages.react.alanai],
      title: "Alan AI",
      caption: "Alan AI News App",
      description:
        "React web-app that utilizes Alan AI's API to integrate voice feature where one can search and speak to the website, like SIRI.\n\nTechnologies used:\n• ReactJS\n• Alan AI Api",
      links: [
        // {
        //   link: "https://github.com/salmanfazal01/react-alan-ai-news",
        //   icon: <GitHubIcon />,
        // },
        {
          link: "https://rv-news-app.netlify.app/",
          icon: <Language />,
        },
      ],
    },

    // {
    //   tag: "React Js",
    //   images: [...portfolioImages.react.projectmanager],
    //   title: "MERN Project Manager App",
    //   caption: "MERN Stack Tutorial Series",
    //   description:
    //     "I created a full MERN stack project manager from Youtube.",
    //   links: [
    //     {
    //       link: "https://youtube.com/playlist?list=PLISG6SSQ9nqytPpYmpvt6r9m_vDi_f_ww",
    //       icon: <YouTube />,
    //     },
    //   ],
    // },

    {
      tag: "React Js",
      images: [...portfolioImages.react.slack2],
      title: "Slack Clone Updated",
      caption: "Full Slack Webapp Clone",
      description:
        "Clone of the web verion of the Slack app, with the ability to create channels and send chats.\n\nTechnologies used:\n• ReactJS\n• Material UI\n• Firebase",
      links: [
        {
          link: "https://github.com/RajkumarVerma4124/slack-clone-1.0",
          icon: <GitHubIcon />,
        },
      ],
    },

    {
      tag: "React Js",
      images: [...portfolioImages.react.productlanding],
      title: "Landing Page",
      caption: "Product Landing Page",
      description:
        "Fully responsive product landing page built purely using ReactJS and Material-UI.\n\nDesign idea taken from Dribbble.",
      links: [
        {
          link: "https://rv-landing-page.netlify.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "React Js",
      images: [...portfolioImages.react.disney],
      title: "Disney CLone",
      caption: "Disney Clone Web Page",
      description:
        "Fully responsive disney clone web page built purely using ReactJS and Material-UI.\n\nLearn from youtube",
      links: [
        {
          link: "https://github.com/RajkumarVerma4124/disney-yt-clone",
          icon: <GitHubIcon />,
        },
        {
          link: "https://disney-yt-clone.web.app/",
          icon: <Language />,
        },
      ],
    },
    {
      tag: "React Js",
      images: [...portfolioImages.react.fbmessenger],
      title: "Facebook Messenger",
      caption: "Facebook Messenger Web App",
      description:
        "Built Facebook Messenger Web App to chat with a pop-up name feature using ReactJS and Material-UI.\n\nLearn from youtube",
      links: [
        {
          link: "https://github.com/RajkumarVerma4124/facebook-clone-messenger",
          icon: <GitHubIcon />,
        },
        {
          link: "https://facebook-messenger-clone-86374.web.app/",
          icon: <Language />,
        },
      ],
    },
    {
      tag: "React Js",
      images: [...portfolioImages.react.gmail],
      title: "Gmail CLone App ",
      caption: "Gmail Mail Web App ",
      description:
        "Built Gmail Mailing App for composing viwing and deleting the mails using ReactJS and Material-UI.\n\nLearn from youtube",
      links: [
        {
          link: "https://github.com/RajkumarVerma4124/gmail-clone-2.0",
          icon: <GitHubIcon />,
        },
        {
          link: "https://gmail-clone-rv.netlify.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "React Js",
      images: [...portfolioImages.react.linkedin],
      title: "Linkedin Clone App ",
      caption: "Linkedin Social Web App ",
      description:
        "Built linkedin web app for posting the photos or messages on your social page with the help of ReactJS and Material-UI.\n\nLearn from youtube",
      links: [
        {
          link: "https://github.com/RajkumarVerma4124/linkedin-clone",
          icon: <GitHubIcon />,
        },
        {
          link: "https://linkedin-clone-rv.web.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "React Js",
      images: [...portfolioImages.react.prime],
      title: "Prime Clone App ",
      caption: "Prime Movie Trailer Web App ",
      description:
        "Built prime movie web app for watching the new movies trailer page with the help of tmdb api ReactJS and Material-UI.\n\nLearn from youtube",
      links: [
        {
          link: "https://github.com/RajkumarVerma4124/prime-clone",
          icon: <GitHubIcon />,
        },
        {
          link: "https://primetv-clone.web.app",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "React Js",
      images: [...portfolioImages.react.projectmanager],
      title: "Mern Project Manager App ",
      caption: "MernProject Manager Web App ",
      description:
        "Created project manager web app for adding link, deleting the web app projects \n\nTechnologies used:\n• ReactJS\n• Material UI\n• NodeJS\n• Express\n• MongoDB\n\nLearn from youtube",
      // links: [
      //   {
      //     link: "https://github.com/RajkumarVerma4124/prime-clone",
      //     icon: <GitHubIcon />,
      //   },
      //   {
      //     link: "https://primetv-clone.web.app",
      //     icon: <Language />,
      //   },
      // ],
    },

    {
      tag: "React Js",
      images: [...portfolioImages.react.hotelweb],
      title: "Hotel Web App ",
      caption: "React Hotel Web App ",
      description:
        "Built react hotel web app template for different hotel website using ReactJS and Material-UI.\n\nLearn from youtube",
      links: [
        {
          link: "https://hotel-website-template.netlify.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "React Js",
      images: [...portfolioImages.react.website],
      title: "React Web App ",
      caption: "Ultra Landing Page",
      description:
        "Built React landing page for Ultra Web App using ReactJS and Material-UI.\n\nLearn from youtube",
      links: [
        {
          link: "https://ultra-website-template.netlify.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "React Js",
      images: [...portfolioImages.react.trvlwebsite],
      title: "React Web App ",
      caption: "Travel Web App",
      description:
        "Built React landing page for Travel Web App using ReactJS and Material-UI.\n\nLearn from youtube",
      links: [
        {
          link: "https://travel-web-template.netlify.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "React Js",
      images: [...portfolioImages.react.robinhood],
      title: "Robinhood Clone Web App ",
      caption: "Robinhood Crypto Clone Web App",
      description:
        "Built Robinhood clone web app using ReactJS and Material-UI and Crypto-api from finnhub.io.\n\nLearn from youtube",
      links: [
        {
          link: "https://robinhood-clone-rv.netlify.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "React Js",
      images: [...portfolioImages.react.slack],
      title: "Slack Clone",
      caption: "Full Slack Webapp Clone",
      description:
        "Built slack Clone of the web verion of the Slack app, with the ability to create channels and send chats using ReactJS and Material-UI.\n\nLearn from youtube",
      links: [
        {
          link: "https://slack-clone-ba200.web.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "React Js",
      images: [...portfolioImages.react.slack2],
      title: "Slack Clone 2.0",
      caption: "Slack Clone Chat Web App",
      description:
        "Built slack clone web app for creating pages or forum to chat using ReactJS and Material-UI.\n\nLearn from youtube",
      links: [
        {
          link: "https://slack-clone-rv.web.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "React Js",
      images: [...portfolioImages.react.snapchat],
      title: "Snapchat App",
      caption: "Snapchat Clone Chat Web App",
      description:
        "Built snapchat clone web app for clinking pictures and post it using ReactJS and Material-UI.\n\nLearn from youtube",
      links: [
        {
          link: "https://snapchat-clone-rv.netlify.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "React Js",
      images: [...portfolioImages.react.stockpage],
      title: "Stock Page Template",
      caption: "React Stock Page Template",
      description:
        "Designed a simple react stock trade web template using ReactJS and Material-UI.\n\nLearn from youtube",
      links: [
        {
          link: "https://stock-trade-template.netlify.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "React Js",
      images: [...portfolioImages.react.tesla],
      title: "Tesla Clone Web App",
      caption: "Tesla Clone React Web App",
      description:
        "Designed a tesla clone react web app with menu and a sign up page using ReactJS and Material-UI.\n\nLearn from youtube",
      links: [
        {
          link: "https://tesla-futurecar.web.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "React Js",
      images: [...portfolioImages.react.virtualbank],
      title: "Virtual Bank Web App",
      caption: "Virtual Bank React Web App",
      description:
        "Designed a virtual bank react web app with smooth transitioning feature and sign up page using ReactJS and Material-UI.\n\nLearn from youtube",
      links: [
        {
          link: "https://virtual-bank-web-app.netlify.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "React Js",
      images: [...portfolioImages.react.todo],
      title: "Todo App",
      caption: "Todo React Web App",
      description:
        "Created a basic todo web app for creating, updating and deleting the list using ReactJS, FIREBASE and Material-UI.\n\nLearn from youtube",
      links: [
        {
          link: "https://todo-app-cp-c863e.web.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "React Js",
      images: [...portfolioImages.react.whatsapp],
      title: "WhatsApp Clone App",
      caption: "WhatsApp Web Chat App",
      description:
        "Created a whatsapp web chat app for creating different chat group using ReactJS, FIREBASE and Material-UI.\n\nLearn from youtube",
      links: [
        {
          link: "https://whatsapp-web-chat-rv.web.app/",
          icon: <Language />,
        },
      ],
    },

    //next

    {
      tag: "Next Js",
      images: [...portfolioImages.next.basic],
      title: "Next App",
      caption: "Next Web App Template",
      description:
        "Styled basic next web app template for learning purpose.\n\nTechnologies used:\n• NextJS\n• Material UI",
      links: [
        // {
        //   link: "https://google-clone-rv.vercel.app/",
        //   icon: <Language />,
        // },
      ],
    },

    {
      tag: "Next Js",
      images: [...portfolioImages.next.googledocs],
      title: "Google Docs Clone ",
      caption: "Google Docs Web App ",
      description:
        "Built google docs web app for creating editing and deleting the docs online using ReactJS and Material-UI.\n\nLearn from youtube",
      links: [
        {
          link: "https://github.com/RajkumarVerma4124/google-docs",
          icon: <GitHubIcon />,
        },
        {
          link: "https://google-docs-rv.vercel.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "Next Js",
      images: [...portfolioImages.next.google],
      title: "Google Search",
      caption: "Full Google Search Clone",
      description:
        "Styled clone of the Google.com Homepage and web search page.\n\nTechnologies used:\n• ReactJS\n• Material UI\n• Google Search API",
      links: [
        {
          link: "https://google-clone-rv.vercel.app/",
          icon: <Language />,
        },
        {
          link: "https://github.com/RajkumarVerma4124/google-clone",
          icon: <GitHubIcon />,
        },
      ],
    },

    {
      tag: "Next Js",
      images: [...portfolioImages.next.amazon],
      title: "Amazon Clone",
      caption: "Amzone Clone Ecommerce Web App",
      description:
        "Build amazon clone with many features like adding, removing from cart, buying product with stripe payment method.\n\nTechnologies used:\n• NEXTJS\n• Firebase\n• STRIPE-CLI",
      links: [
        {
          link: "https://github.com/RajkumarVerma4124/amazone-shopping-clone",
          icon: <GitHubIcon />,
        },
        {
          link: "https://amazone-shopping-clone.vercel.app",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "Next Js",
      images: [...portfolioImages.next.airbnbnext],
      title: "Airbnb",
      caption: "Airbnb UI Clone",
      description:
        "Homepage UI of the official Airbnb website, including the dates dopdown using an external library.\n\nTechnologies used:\n• NEXTJS \n• MAPBOX",
      links: [
        {
          link: "https://github.com/RajkumarVerma4124/airbnb-clone-next",
          icon: <GitHubIcon />,
        },
        {
          link: "https://airbnb-clone-next-rv.vercel.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "Next Js",
      images: [...portfolioImages.next.facebook],
      title: "Facebook Clone",
      caption: "Facebook Clone Next Web App",
      description:
        "Created facebook clone web app ui for creating post with images or messages.\n\nTechnologies used:\n• NEXTJS \n• FIREBASE",
      links: [
        {
          link: "https://github.com/RajkumarVerma4124/rv-facebook-clone",
          icon: <GitHubIcon />,
        },
        {
          link: "https://rv-facebook-clone.vercel.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "Next Js",
      images: [...portfolioImages.next.hulu],
      title: "Hulu Clone",
      caption: "Hulu Clone Next Web App",
      description:
        "Created hulu clone web app ui for checking out new movies.\n\nTechnologies used:\n• NEXTJS \n• FIREBASE \n• TMDB-API",
      links: [
        {
          link: "https://github.com/RajkumarVerma4124/hulu-clone",
          icon: <GitHubIcon />,
        },
        {
          link: "https://hulu-clone-rv.vercel.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "Next Js",
      images: [...portfolioImages.next.whatsapp],
      title: "WhatsApp Clone",
      caption: "WhatsApp Clone Next Web App",
      description:
        "Created a whatsapp web chat app for creating different chat group using google login feature.\n\nTechnologies used:\n• NEXTJS \n• FIREBASE",
      links: [
        {
          link: "https://github.com/RajkumarVerma4124/whatsapp-chat-rv",
          icon: <GitHubIcon />,
        },
        {
          link: "https://whatsapp-chat-rv.vercel.app/",
          icon: <Language />,
        },
      ],
    },

    //Web (Html & Css)
    {
      tag: "Html,Css & Js",
      images: [...portfolioImages.web.airpods],
      title: "Airpods",
      caption: "Airpods Web Template",
      description:
        "A simple web template for airpods.\n\nTechnologies used:\n• HTML & CSS \n• JAVASCRIPT",
      links: [
        {
          link: "https://airpods-webapp.netlify.app",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "Html,Css & Js",
      images: [...portfolioImages.web.architecture],
      title: "Architecture Web Page",
      caption: "Architecture Web Page Template",
      description:
        "A simple web template for architecture design.\n\nTechnologies used:\n• HTML & CSS \n• JAVASCRIPT",
      links: [
        {
          link: "https://architecture-template.netlify.app/",
          icon: <Language />,
        },
      ],
    },

    // {
    //   tag: "Html,Css & Js",
    //   images: [...portfolioImages.web.portfolio],
    //   title: "Portfolio Web Page",
    //   caption: "Portfolio Web Page Template",
    //   description:
    //     "A sample web template for portfolio of for different students.\n\nTechnologies used:\n• HTML & CSS \n• JAVASCRIPT",
    //   links: [
    //     {
    //       link: "https://basic-portfolio-template.netlify.app/",
    //       icon: <Language />,
    //     },
    //   ],
    // },

    {
      tag: "Html,Css & Js",
      images: [...portfolioImages.web.restaurent],
      title: "Restaurent Web Page",
      caption: "Restaurent Web Page Template",
      description:
        "A sample web template for Restaurent.\n\nTechnologies used:\n• HTML & CSS \n• JAVASCRIPT",
      links: [
        {
          link: "https://basic-restaurent-template.netlify.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "Html,Css & Js",
      images: [...portfolioImages.web.beach],
      title: "Beach hotel",
      caption: "Beach hotel Web Page Template",
      description:
        "A sample web template for Beach hotel.\n\nTechnologies used:\n• HTML & CSS \n• JAVASCRIPT",
      links: [
        {
          link: "https://beach-hotel-template.netlify.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "Html,Css & Js",
      images: [...portfolioImages.web.cardslider],
      title: "Marvel Card Slider",
      caption: "Marvel Card Slider Web Page Template",
      description:
        "A sample web page for Marvel Card Slider.\n\nTechnologies used:\n• HTML & CSS \n• JAVASCRIPT",
      links: [
        {
          link: "https://marvel-card-slider.netlify.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "Html,Css & Js",
      images: [...portfolioImages.web.christmas],
      title: "Christmas Template",
      caption: "Christmas Festival Web Page Template",
      description:
        "A sample web page for Christmas Festival.\n\nTechnologies used:\n• HTML & CSS \n• JAVASCRIPT",
      links: [
        {
          link: "https://chrimstmas-festive-template.netlify.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "Html,Css & Js",
      images: [...portfolioImages.web.clock],
      title: "Clock Template",
      caption: "Clock Web Page Template",
      description:
        "A sample web page for Clock with day and night mode.\n\nTechnologies used:\n• HTML & CSS \n• JAVASCRIPT",
      links: [
        {
          link: "https://clockingtell.netlify.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "Html,Css & Js",
      images: [...portfolioImages.web.coffeeshop],
      title: "Coffeeshop Template",
      caption: "Coffeeshop Web Page Template",
      description:
        "A sample web page for coffeeshop designed ui from starbucks.\n\nTechnologies used:\n• HTML & CSS",
      links: [
        {
          link: "https://rv-coffee-shop.netlify.app/",
          icon: <Language />,
        },
      ],
    },

    // {
    //   tag: "Html,Css & Js",
    //   images: [...portfolioImages.web.ecommerce],
    //   title: "Ecommerce Template",
    //   caption: "Ecommerce Web Page Template",
    //   description:
    //     "A sample web page for Ecommerce template for different products.\n\nTechnologies used:\n• HTML & CSS \n• JAVASCRIPT",
    //   links: [
    //     {
    //       link: "https://e-commerce-rv.netlify.app/",
    //       icon: <Language />,
    //     },
    //   ],
    // },

    {
      tag: "Html,Css & Js",
      images: [...portfolioImages.web.headphones],
      title: "Headphones Template",
      caption: "Headphones Web Page Template",
      description:
        "A sample web page for Headphones template for different headphones product.\n\nTechnologies used:\n• HTML & CSS \n• JAVASCRIPT",
      links: [
        {
          link: "https://headphones-rv.netlify.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "Html,Css & Js",
      images: [...portfolioImages.web.bankcard],
      title: "Bank Card Template",
      caption: "Bank Card  Web Page Template",
      description:
        "A simple web page for Bank Card  template \n\nTechnologies used:\n• HTML & CSS \n• JAVASCRIPT",
      links: [
        {
          link: "https://invis-card-template.netlify.app",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "Html,Css & Js",
      images: [...portfolioImages.web.logintemplate],
      title: "Login Form Template",
      caption: "Login Form Web Page Template",
      description:
        "A simple web  for Login Form web template \n\nTechnologies used:\n• HTML & CSS \n• JAVASCRIPT",
      links: [
        {
          link: "https://green-login-template.netlify.app/",
          icon: <Language />,
        },
        {
          link: "https://basic-login-template.netlify.app",
          icon: <Language />,
        },
      ],
    },

    // {
    //   tag: "Html,Css & Js",
    //   images: [...portfolioImages.web.mobilestore],
    //   title: "Mobile Store",
    //   caption: "Mobile Store Web Page Template",
    //   description:
    //     "A mobile store web page template \n\nTechnologies used:\n• HTML & CSS \n• JAVASCRIPT",
    //   links: [
    //     {
    //       link: "https://mobile-store-template.netlify.app",
    //       icon: <Language />,
    //     },
    //   ],
    // },

    {
      tag: "Html,Css & Js",
      images: [...portfolioImages.web.mobilelandingpage],
      title: "Mobile Landing Page Template",
      caption: "Mobile Landing Page Template",
      description:
        "A mobile landing web page template \n\nTechnologies used:\n• HTML & CSS \n• JAVASCRIPT",
      links: [
        {
          link: "https://mobile-template.netlify.app",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "Html,Css & Js",
      images: [...portfolioImages.web.nikecard],
      title: "Nike Card Template",
      caption: "Nike Card Web Page Template",
      description:
        "A nike card web page template \n\nTechnologies used:\n• HTML & CSS \n• JAVASCRIPT",
      links: [
        {
          link: "https://nike-card-template.netlify.app",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "Html,Css & Js",
      images: [...portfolioImages.web.pizza],
      title: "Pizza Restaurent",
      caption: "Pizza Restaurent Web Page Template",
      description:
        "A pizza restaurent web page template \n\nTechnologies used:\n• HTML & CSS \n• JAVASCRIPT",
      links: [
        {
          link: "https://pizza-restaurent-template.netlify.app",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "Html,Css & Js",
      images: [...portfolioImages.web.loginform],
      title: "Login Form Template",
      caption: "Sliding Login Web Page Template",
      description:
        "A sliding login form web page template \n\nTechnologies used:\n• HTML & CSS \n• JAVASCRIPT",
      links: [
        {
          link: "https://sliding-signup-form.netlify.app",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "Html,Css & Js",
      images: [...portfolioImages.web.sneaker],
      title: "Sneaker Buy",
      caption: "Sneaker Buy Order Template",
      description:
        "A sneaker buy order web page template \n\nTechnologies used:\n• HTML & CSS \n• JAVASCRIPT",
      links: [
        {
          link: "https://sneaker-template.netlify.app",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "Angular",
      images: [...portfolioImages.angular.bookstore],
      title: "Book Store E-commerce",
      caption: "Book Store Web App",
      description:
        "A book store web page to buy books and view books details with cart view order and add to wishlist \n\nTechnologies used:\n• Angular \n• Asp.net\n• Sql Server\n• C Sharp",
      links: [
        {
          link: "https://github.com/RajkumarVerma4124/BookStore_Testing",
          icon: <GitHubIcon />,
        },
        {
          link: "https://rv-bookstore.netlify.app/",
          icon: <Language />,
        },
      ],
    },

    {
      tag: "Angular",
      images: [...portfolioImages.angular.fundoonotes],
      title: "Fundoo Notes(Google keep clone)",
      caption: "Fundoo Note Web App",
      description:
        "A fundoo note web page with feature to take, update, archive, trash, collab notes with addition of images and colors \n\nTechnologies used:\n• Angular \n• Asp.net\n• Sql Server\n• C Sharp",
      links: [
        {
          link: "https://github.com/RajkumarVerma4124/FundooNotes_Angular",
          icon: <GitHubIcon />,
        },
        {
          link: "https://rvfundoonote.netlify.app/",
          icon: <Language />,
        },
      ],
    },
  ],
};