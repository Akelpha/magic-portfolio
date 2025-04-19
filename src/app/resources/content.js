import { InlineCode } from "@/once-ui/components";
import { link } from "fs";

const person = {
  firstName: "Keren",
  lastName: "Nzira",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web Developer",
  avatar: "/images/avatar.jpg",
  location: "Africa/Kinshasa", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Lingala", "French", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I will share my journey in learning Web Development and Cybersecurity.
      You’ll also find my web projects, along with a glimpse into my passions —
      photography, Asian pop culture, and reading. As a Christian, I will also
      use this space to express my thoughts on faith and share what Christianity
      means to me.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Akelpha",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/keren-nzira/",
  },
  {
    name: "Email",
    icon: "email",
    link: "kerennzira@icloud.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Web Developer</>,
  subline: (
    <>
      I'm Keren, a junior Web Developer passionate about creating functional and
      user-friendly web experiences.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I'm Keren — a passionate Web Developer and aspiring Cybersecurity
        Engineer. I'm driven by a deep curiosity for building meaningful digital
        experiences and protecting the systems that power them. My journey in
        tech started with web development, where I learned to create responsive,
        user-focused applications using both front-end and back-end
        technologies. As I grow in this field, I'm also exploring the world of
        cybersecurity — studying system vulnerabilities, ethical hacking, and
        learning how to build safer digital environments. But there's more to me
        than just code! I’m also passionate about photography, Asian pop
        culture, and literature. This space is where I not only share my
        projects and learning journey, but also express what inspires me beyond
        tech. As a Christian, my faith plays an important role in my life — so
        you'll also find thoughts and reflections about Christianity and my walk
        with God.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20%
            increase in user engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows,
            enabling designers to iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple
            platforms, improving design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line,
            contributing to a 15% increase in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Kadea Academy",
        description: <>Traning in web developement</>,
        link: "https://kadea.academy",
      },
      {
        name: "CALI",
        description: (
          <>Studied English for improving my communication skills.</>
        ),
        link: "https://www.calicongo.org/",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma and create interactive prototypes.</>
        ),
        link: "https://www.figma.com/design/99yEd26YE4mcPTjkrQLEP5/CheckRoom?m=auto&t=L9BHCcb7Wp56y5SV-6",
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Tailwind CSS",
        description: (
          <>Able to create responsive and modern UI with Tailwind CSS.</>
        ),
        link: "https://product-preview-card-component-olive.vercel.app/",

        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Adonis JS",
        description: (
          <>Able to corporate back-end in front-end with Adonis JS.</>
        ),
        link: "https://shurl-s2nv.onrender.com/",
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "React",
        description: <>Able to use component, state and props with React.</>,
        link: "https://tic-tac-toe-jade-nine.vercel.app/",
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about my hobbies and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // These images are from Keren,so myself.
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.JPG",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
