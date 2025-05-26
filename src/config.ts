import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  BlogPageContent,
  HomePageContent
} from "./types/config";
import AWS from "public/aws.jpeg";
import Optiwise from "public/optiwise.jpeg";
import CodeLab from "public/codelab.jpeg";

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
      title: "My Blog",
      url: "/blog"
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
          image: AWS,
          url: "https://www.linkedin.com/company/amazon-web-services"
        },
        date: "October 2024 - Present"
      },
      {
        title: "Software Engineer Intern",
        company: {
          name: "Optiwise.ai",
          image: Optiwise,
          url: "https://www.linkedin.com/company/optiwise-ai"
        },
        date: "January 2024 - June 2024"
      },
      {
        title: "Infrastructure Lead",
        company: {
          name: "CodeLab",
          image: CodeLab,
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

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Derek Ma",
    description: "Thoughts, stories and ideas.",
    image: identity.logo
  },
  subtitle: "Thoughts, stories and ideas."
};
