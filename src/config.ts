import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent
} from "./types/config";

export const identity: Identity = {
  name: "Derek Ma",
  logo: "/logo.png",
  email: "danderekma@gmail.com"
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/"
  },
  {
    title: "About",
    url: "/about"
  },
  {
    title: "Projects",
    url: "/projects"
  },
  {
    title: "Blog",
    url: "/blog"
  }
];

export const socialLinks: SocialLink[] = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/danderekma",
    icon: "mdi:linkedin",
    external: true
  },
  {
    title: "GitHub",
    url: "https://github.com/danderekma",
    icon: "mdi:github",
    external: true
  },
  {
    title: "Mail",
    url: "mailto:danderekma@gmail.com",
    icon: "mdi:email"
  }
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Derek Ma",
    description: "UC Davis Alumni and Front-End Engineer at AWS.",
    image: identity.logo
  },
  role: "Software Engineer",
  description:
    "Hey there! I'm Derek Ma, an UC Davis Alumni and Front-End Engineer at Amazon Web Services with interests in mobile and full stack web development.",
  socialLinks: socialLinks,
  links: [
    {
      title: "About Me",
      url: "/about"
    },
    {
      title: "My Projects",
      url: "/projects"
    }
  ]
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Derek Ma",
    description: "UC Davis Alumni and Front-End Engineer at AWS.",
    image: identity.logo
  },
  subtitle: "Some information about myself",
  about: {
    description: `
I'm Tim Witzdam, a full time student from Germany who also loves building cool things using code.
<br/><br/>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque placeat est architecto tempora voluptatem sit suscipit aspernatur? <br/><br/>
Facere quibusdam reiciendis, distinctio sunt praesentium error accusantium consectetur nemo vero officia itaque.`, // Markdown is supported
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture"
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture"
    }
  },
  work: {
    description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`, // Markdown is supported
    items: [
      {
        title: "Front-End Engineer I",
        company: {
          name: "Amazon Web Services (AWS)",
          image:
            "https://media.licdn.com/dms/image/v2/C560BAQER_QnUTXrPJw/company-logo_200_200/company-logo_200_200/0/1670264051233/amazon_web_services_logo?e=1738195200&v=beta&t=WESt3uBzAtQ9DNviDbNym5PgJBySdWSOlnEkeysfK_c",
          url: "https://www.linkedin.com/company/amazon-web-services"
        },
        date: "October 2024 - Present"
      },
      {
        title: "Software Engineer Intern",
        company: {
          name: "Optiwise.ai",
          image:
            "https://media.licdn.com/dms/image/v2/D4D0BAQF51T7GBBGhmw/company-logo_200_200/company-logo_200_200/0/1664538589483/optiwise_ai_logo?e=1738195200&v=beta&t=xfrvavuiuI-wQ3BUX0L6DLAYZPOUZ8klL4ggZpaKEp8",
          url: "https://github.com/TimWitzdam"
        },
        date: "January 2024 - June 2024"
      },
      {
        title: "Infrastructure Lead",
        company: {
          name: "CodeLab",
          image:
            "https://media.licdn.com/dms/image/v2/C560BAQGpfM3qv7TaBQ/company-logo_200_200/company-logo_200_200/0/1674088646470/codelabdavis_logo?e=1738195200&v=beta&t=YIt8DmtRWzzfA5OCLAL3LWMfQc7v__8pZiPksjyloi8",
          url: "https://www.linkedin.com/company/codelabdavis"
        },
        date: "June 2023 - June 2024"
      }
    ]
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks
  }
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Derek Ma",
    description: "Check out what I've been working on.",
    image: identity.logo
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam"
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam"
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam"
    }
  ]
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Tim Witzdam",
    description: "Thoughts, stories and ideas.",
    image: identity.logo
  },
  subtitle: "Thoughts, stories and ideas."
};
