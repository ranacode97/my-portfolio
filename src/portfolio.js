/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shobhit Rana",
  title: "Hi all, I'm Shobhit",
  subTitle: emoji(
    "Data & Software Engineer | Backend Developer passionate about building smart, data-driven solutions using analytics, automation, and clean, scalable code."
  ),
  /*resumeLink:
    "https://docs.google.com/document/d/1jDr7HoVDjj9cGerG2ar39v4j4mYyUSQO/edit?usp=share_link&ouid=118034882682353202562&rtpof=true&sd=true", // Set to empty to hide the button 
  */
  displayGreeting: false // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ranacode97",
  linkedin: "https://www.linkedin.com/in/shobhit-rana/",
  gmail: "shobhit.rana09@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BACKEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Data cleaning, validation, and transformation using Python & SQL"),
    emoji("⚡ Build dashboards and reports using Power BI, Tableau & Excel"),
    emoji("⚡ Develop backend systems and REST APIs using Java Spring Boot & Flask"),
    emoji("⚡ Perform statistical analysis, trend detection, and business insight generation")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Excel", fontAwesomeClassname: "fas fa-file-excel" },
    { skillName: "Tableau", fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "Flask", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Western Sydney University",
      logo: require("./assets/images/wsu.png"),
      subHeader: "Master of Information and Communications Technology (Data Analytics)",
      duration: "July 2023 - July 2025",
      desc: "Capstone Project: Predicting Patient Readmission in Healthcare using a FAIR, Interpretable, Reproducible, and Ethical Ensemble (FIRE-READ) framework.",
      descBullets: [
        "Developed the FIRE-READ framework to predict patient hospital readmission using ensemble models (XGBoost, Random Forest).",
        "Incorporated fairness, bias mitigation, and multi-centre datasets for better generalizability.",
        "Used SHAP values for interpretability and clinical validation of predictive factors, achieving strong predictive performance and ~15% bias reduction."
      ]
    },
    {
      schoolName: "Galgotias University",
      logo: require("./assets/images/galgotias.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "September 2016 - April 2020",
      desc: "Completed coursework in AI, Software Engineering, Web Security, and Operating Systems.",
      descBullets: [
        "Published research paper: 'Human Disease Prediction Using Logistic Regression' to assist healthcare practitioners in accurate and efficient diagnosis.",
        "Gained strong foundation in programming, data structures, and algorithms.",
        "Developed several projects in Java, Python, and SQL for academic and practical applications."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analytics", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Intern",
      company: "Cognitive Robotics Lab",
      companylogo: require("./assets/images/wsu.png"),
      date: "Mar 2025 – Jun 2025",
      desc: "Worked on robotic automation and system control for assistive healthcare technology.",
      descBullets: [
      "Developed Python scripts using ROS 2 for motion control and task automation of a robotic arm",
      "Built a Flask-based REST API enabling remote mobile control and real-time system interaction",
      "Documented architecture and control logic to ensure reproducibility and system clarity"
      ]
    },
    {
      role: "Backend Developer",
      company: "Parkquility",
      companylogo: require("./assets/images/pq.png"),
      date: "Sep 2022 – July 2023",
      desc: "Developed cloud-based backend services and data-driven application workflows.",
      descBullets: [
      "Built backend services using Java, Spring Boot, and Hibernate on Azure",
      "Designed and optimized complex SQL queries across MySQL databases",
      "Implemented data validation and business rule enforcement to ensure data integrity",
      "Supported API integrations and backend system reliability"
      ]
    },
    {
      role: "Assistant Systems Engineer ",
      company: "Tata Consultancy Services",
      companylogo: require("./assets/images/tcs.png"),
      date: "Jan 2021 – Aug 2022",
      desc: "Supported enterprise backend systems and data operations in production environments.",
      descBullets: [
      "Maintained backend systems using Java, Spring Boot, and REST APIs",
      "Worked with relational databases and structured data models",
      "Performed SQL-based data analysis to identify trends and operational anomalies",
      "Assisted in troubleshooting and production issue resolution"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Full-stack projects spanning cloud infrastructure, backend systems, and data analytics",
  projects: [
    {
      image: require("./assets/images/dashboard.png"),
      projectName: "Log Vault",
      projectDesc: "A real-time log aggregation and classification platform built with Java Spring Boot and React.",
      footerLink: [
        {
          name: "View Project on GitHub",
          url: "https://github.com/ranacode97/logvault"
        }
      ]
    },
    {
      image: require("./assets/images/clouddeploy.png"),
      projectName: "Cloud Deploy",
      projectDesc: "A self-hostable deployment platform. Deploy any Dockerised app with a single command — your own open-source Heroku.",
      footerLink: [
        {
          name: "View Project on GitHub",
          url: "https://github.com/ranacode97/clouddeploy"
        }
      ]
    },
    {
      image: require("./assets/images/insuranceproj.png"),
      projectName: "Insurance Customer Analytics & Prediction",
      projectDesc: "Analyzed customer data to identify high-potential vehicle insurance buyers and built a Logistic Regression model achieving 96.5% recall to maximise conversions.",
      footerLink: [
        {
          name: "View Project on GitHub",
          url: "https://github.com/ranacode97/Insurance-Data-Analysis"
        }
      ]
    },
    {
      image: require("./assets/images/quantium.png"),
      projectName: "Customer Segmentation & Store Trial Evaluation",
      projectDesc: "Performed customer segmentation and store trial analysis using Python, uncovering key purchase patterns, targetable customer segments, and actionable recommendations for retail sales strategy.",
      footerLink: [
        {
          name: "View Project on GitHub",
          url: "https://github.com/ranacode97/Customer-Analytics"
        }
      ]
    },
    {
      image: require("./assets/images/aushousing.png"),
      projectName: "Australian Housing Data Analysis",
      projectDesc: "Explored Australian housing sales with Excel dashboards, uncovering trends in pricing, suburb performance, property types, and seasonal sales patterns.",
      footerLink: [
        {
          name: "View Project on GitHub",
          url: "https://github.com/ranacode97/Australian-Housing-Data-Analysis?tab=readme-ov-file#-australian-housing-data-analysis-project"
        }
      ]
    },
    {
      image: require("./assets/images/health.png"),
      projectName: "Australian Health Data Visualisation & Analysis",
      projectDesc: "Visualized Australian hospital and emergency data with Tableau, uncovering trends in hospitalisations, ED arrivals, and preventable conditions across states and cohorts.",
      footerLink: [
        {
          name: "View Project on GitHub",
          url: "https://github.com/ranacode97/Australian-Health-Data-Visualizations"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Cisco AI Technical Practitioner (AITECH)",
      subtitle:
        "Demonstrates intermediate AI skills in effectively designing technical solutions, automating tasks, and leading technical teams using AI tools and methodologies.",
      image: require("./assets/images/ciscoai.png"),
      imageAlt: "Cisco AI certification",
      footerLink: [
        { name: "Certification", 
          url: "https://www.credly.com/badges/4410b753-cf8f-4356-8ef5-5795f7218e0a/public_url" }
      ]
    },
    {
      title: "Quantium Customer Analytics Virtual Experience Program",
      subtitle:
        "Completed virtual experience program focused on customer segmentation, sales uplift analysis, and actionable business insights using Python and data visualization.",
      image: require("./assets/images/quantium.png"),
      imageAlt: "Quantium Logo",
      footerLink: [
        { name: "Final Project", 
          url: "https://github.com/ranacode97/Customer-Analytics" },
        { name: "Certification", 
          url: "https://drive.google.com/file/d/1pyu0-RPCewTwcoXse83ZJ-eE6uvMvOpa/view?usp=share_link" }
      ]
    },
    {
      title: "FIRE-READ Capstone Project – Predicting Patient Readmission",
      subtitle:
        "INFO7016 Postgraduate Project A – Distinction (Score: 81/100). Developed a fair, interpretable, and reproducible ML framework (FIRE-READ) using XGBoost & Random Forest to predict patient hospital readmission. Incorporated SHAP interpretability and bias mitigation across demographics for ethical decision-making.",
      image: require("./assets/images/wsu.png"),
      imageAlt: "Western Sydney University Logo",
      footerLink: [
        {
          name: "Final Research Report",
          url: "https://docs.google.com/document/d/1iK2LxGsXHcmmpxYEXrNRDXZR1ySVYjlS/edit?usp=share_link&ouid=118034882682353202562&rtpof=true&sd=true" // or PDF link
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to roles, collabs, and good conversations.",
  number: "+61-0403596597",
  email_address: "shobhit.rana09@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
