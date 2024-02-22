/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Surya",
  logo_name: "SURYA",
  nickname: "hrishi1999 / picleric",
  full_name: "SURYA LAKSHMANAN S",
  subTitle:
    "Full Stack Developer, Innovator, Quick Learner.",
  resumeLink:
    "https://drive.google.com/file/d/1L5S2DIt_-bJ0L-Yhpv_me8UVOtXdA3hU/view?usp=drive_link",
  mail: "surya.lakshmanan.2003@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/SuryaLakshmananS",
  linkedin: "https://www.linkedin.com/in/surya-lakshmanan-9078b4200/",
  gmail: "surya.lakshmanan.2003@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "",
  instagram: "",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS and Angular",
        "⚡ Developing mobile applications using Flutter and native Android",
        "⚡ Backend development using NodeJS, ExpressJS and Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },

        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "Rajalakshmi Institute Of Technology",
      subtitle: "B.E,Computer Science and Engineering",
      logo_path: "dal.png",
      alt_name: "DAL",
      duration: "2022 - 2023",
      descriptions: [
        
      ],
      website_link: "https://ritchennai.org/",
    },
    {
      title: "Sir Ramasamy Mudhaliyar Hr Sec School",
      logo_path: "sal.png",
      alt_name: "SETI",
      duration: "2019 - 2020",
      descriptions: [
        
      ],
      website_link: "",
    },
    {
      title: "Britannia High School",
      logo_path: "sal.png",
      alt_name: "SETI",
      duration: "2018 - 2019",
      descriptions: [
        
      ],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "PYTHON ",
      subtitle: "NPTEL",
      logo_path: "nptel.png",
      certificate_link:
        "https://drive.google.com/file/d/1HJa0Ub2LVcel0Wpq_UfwVa-epag9_ARX/view?usp=drive_link",
      alt_name: "AWS",
      color_code: "#FFFFFF",
    },
    {
      title: "C Programming",
      subtitle: "LinkedIn",
      logo_path: "LinkedIn.png",
      certificate_link:
        "https://drive.google.com/file/d/1iPgK2yyHQchviuXllsAqudTj_Zjlzebp/view?usp=drive_link",
      alt_name: "AWS",
      color_code: "#FFFFFF",
    },
    {
      title: "SQL",
      subtitle: "Udmey",
      logo_path: "udemy.jpg",
      certificate_link: "https://drive.google.com/file/d/1HTHyVqIHl7BW64B983uayW7hvvn5FGAZ/view?usp=drive_link",
      alt_name: "Google",
      color_code: "#FFFFFF",
    },
    {
      title: "HTML&CSS",
      subtitle: "Udemy",
      logo_path: "udemy.jpg",
      certificate_link: "https://drive.google.com/file/d/1nKYSMlN1Gf6BMm5_2vC5qcOBGKzg6Xvv/view?usp=drive_link",
      alt_name: "Google",
      color_code: "#FFFFFF",
    },
    {
      title: "JAVA ",
      subtitle: "LinkedIn",
      logo_path: "LinkedIn.png",
      certificate_link: "https://drive.google.com/file/d/1ptSk3VLJ3WGaUOFNa_oPVceSOM57CaTO/view?usp=drive_link",
      alt_name: "Google",
      color_code: "#FFFFFF",
    },
    {
      title: "WEB DESIGN",
      subtitle: "Won 1st Prize",
      logo_path: "we_design_logo.png",
      certificate_link: "https://drive.google.com/file/d/1eNh7SUOL5UvSQHXav0Mw1Qh5aw0aUklk/view?usp=drive_link",
      alt_name: "Google",
      color_code: "#FFFFFF",
    },
    {
      title: "Cloud Computing",
      subtitle: "Azure",
      logo_path: "azure_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/16e5WO_ZHL5x5ENKYe6SJkIMGbMGnExm4/view?usp=drive_link",
      alt_name: "deeplearning.ai",
      color_code: "#2AAFED",
    },
    {
      title: "Problem Solver",
      subtitle: "HackerRank",
      logo_path: "HACKERANK_LOGO.jfif",
      certificate_link:
        "https://drive.google.com/file/d/1oFy8hhj9HjLSPGfJFcOQy4GTcf4So5Fp/view?usp=drive_link",
      alt_name: "deeplearning.ai",
      color_code: "#FFFFFF",
    },
    {
      title: "Azure Internship",
      subtitle: "Azure",
      logo_path: "azure_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1DY9F46ZWQx96qsH3Sxx9V5bW37HILr0S/view?usp=drive_link",
      alt_name: "deeplearning.ai",
      color_code: "#2AAFED",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship",
  description:
    "I've completed one internships. I've mostly done projects on my own and I am actively looking for internships.",
  header_image_path: "experience.svg",
  sections: [
    
    {
      title: "Internships",
      experiences: [
        {
          title: "Azure Cloud Computing",
          company: "Verzeo",
          company_url: "https://www.verzeo.com/",
          logo_path: "google_logo.png",
          duration: "Nov 2022 - Dec 2019",
          location: "Work From Home",
          description:
            "In the Internship I have gained practical experiences in Microsoft Azure in the internship I did some hands-on projects ",
          color: "#ee3c26",
        },
        
      ],
    },
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "surya1.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    
  },
};

const projects = {
  data: [
    {
      name: "Digitizing Handwritten Data",
      url: "https://github.com/SuryaLakshmananS",
      description: "It was done with the help of Convolutional deep neural network and Deep learning. Build a convolutional neuralnetwork model that is able to classify to it's appropriate numerical value",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: " Movie Recommodation System",
      url: "https://github.com/SuryaLakshmananS",
      description:
        "Developed a dynamic and user-friendly movie recommendation website using the MongoDB React.js, Node.js. The platform provides personalized movie suggestions based on user preferences, enhancing the overall movie-watching experience.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      name: "Portfolio",
      url: "https://github.com/SuryaLakshmananS/Surya_Portfolio",
      description: "Designed and developed a responsive portfolio website using React.js, showcasing a collection of personal projects, skills, and experiences. Seamlessly integrated animations and transitions to enhance user engagement and navigation experience",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      name: "Covid-19 Vaccination Analysis",
      url: "https://covid-form-rho.vercel.app/.",
      description: "The project aims to gather and analyzed data among students are Vaccinated or Un vaccinated In that I have Worked in frontend & backend using Html,&Css,Firebase.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      name: "Train Ticket Reservation System",
      url: " https://golden-clafoutis-2bae10.netlify.app/",
      description: "This is a web based application users easily manage and book,search tickets and its is user responsive web application",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
