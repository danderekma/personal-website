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
  logo: "/headshot.jpeg",
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
    "Hey there! I'm Derek, a Front-End Engineer at Amazon Web Services currently located in the San Francisco Bay Area.",
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
I'm Derek, a graduate from UC Davis with a degree in Computer Science and currently a Front-End Engineer at Amazon Web Services. <br><br> I'm incredibly passionate about software engineering and building impactful user-centric products. <br><br> Outside of work, I love attending live concerts, cooking, reading, watching movies, trying new foods, and traveling.`,
    image_l: {
      url: "/banquet.jpeg",
      alt: "Left Picture"
    },
    image_r: {
      url: "/derek.jpeg",
      alt: "Right Picture"
    }
  },
  work: {
    description:
      "I primarily focus on mobile and web development. But I am always learning new things. Here are some of the places I have worked.",
    items: [
      {
        title: "Front-End Engineer I",
        company: {
          name: "Amazon Web Services (AWS)",
          image:
            "https://media.licdn.com/dms/image/v2/D4E0BAQE0fp2sCqnVLg/company-logo_200_200/company-logo_200_200/0/1738855736997/amazon_web_services_logo?e=1747267200&v=beta&t=rtGBlJ7U1LIR5K-ZzuJ0WkesRPA2inh3LJNjFJqNd0o",
          url: "https://www.linkedin.com/company/amazon-web-services"
        },
        date: "October 2024 - Present"
      },
      {
        title: "Software Engineer Intern",
        company: {
          name: "Optiwise.ai",
          image:
            "https://media.licdn.com/dms/image/v2/D4D0BAQF51T7GBBGhmw/company-logo_200_200/company-logo_200_200/0/1664538589483/optiwise_ai_logo?e=1747267200&v=beta&t=Cmt2NGhE8RFZQIjB2FUFDpYWQ2MBskOErTXRqgzImYA",
          url: "https://www.linkedin.com/company/optiwise-ai"
        },
        date: "January 2024 - June 2024"
      },
      {
        title: "Infrastructure Lead",
        company: {
          name: "CodeLab",
          image:
            "https://media.licdn.com/dms/image/v2/C560BAQGpfM3qv7TaBQ/company-logo_200_200/company-logo_200_200/0/1674088646470/codelabdavis_logo?e=1747267200&v=beta&t=nPMeRG1VWyvI3zu2JfjJmKnBSBgCdNyN-ii5xxFy7dQ",
          url: "https://www.linkedin.com/company/codelabdavis"
        },
        date: "June 2023 - June 2024"
      }
    ]
  },
  connect: {
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
      title: "Triplet",
      description:
        "An iOS application that aims to help users effortlessly create, coordinate, and organize their travel plans.",
      image: "/triplet.jpeg",
      year: "2024",
      url: "https://github.com/calchenny/triplet"
    },
    {
      title: "Balancing the Scale",
      description:
        "A static web page dedicated to bringing about environmental awareness of modern artificial intelligence technologies.",
      image: "/scale.jpeg",
      year: "2023",
      url: "https://balancingthescale.tech"
    },
    {
      title: "CodeLab Training Tool",
      description:
        "An internal training tool that allows associates to create and consume educational material and track personal progress.",
      image: "/training-tool.jpeg",
      year: "2022 - 2023",
      url: "https://codelabdavis.medium.com/training-tool-a547c6d311a0"
    },
    {
      title: "AggieExplorer",
      description:
        "A full-stack web application developed to provide grading distributions and enrollment statistics for UC Davis students.",
      image: "/aggie-explorer.jpeg",
      year: "2021 - 2022",
      url: "https://codelabdavis.medium.com/aggieexplorer-605c9d67965c"
    }
  ]
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Derek Ma",
    description: "Thoughts, stories and ideas.",
    image: identity.logo
  },
  subtitle: "Thoughts, stories and ideas."
};
