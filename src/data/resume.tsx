import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Juned Mansuri",
  initials: "JM",
  url: "https://jumicreates.dev/",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Engineer, Video Editor, Graphic Designer and Brand Builder.  Passionate about solving problems, sharing what I learn, and building things that matter.",
  summary:
    " I'm currently pursuing my B.Tech in Computer Science at Mandsaur University while actively building Mnar - A clothing brand — and EliteCards.in, a metal card transformation startup. Alongside academics, I’ve been part of national-level hackathons like SIH 2024, created multiple full-stack projects using the MERN stack I love working at the intersection of engineering, design, and entrepreneurship — whether it’s building SaaS tools, creating real-time collaborative apps, designing modern UIs, or growing brands. I’m also exploring how AI, productivity tools, and content creation can fuel community-driven growth",
  avatarUrl: "/me.png",
 skills: [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
  "Firebase",
  "Tailwind CSS",
  "Bootstrap",
  "Framer Motion",
  "TypeScript",
  "Python",
  "C",
  "C++",
  "Java",
  "PHP",
  "MySQL",
  "PostgreSQL",
  "Git",
  "GitHub",
  "REST APIs",
  "Docker",
  "Linux",
  "Figma",
  "Adobe Premiere Pro",
  "Photoshop",
  "After Effects",
  "Illustrator"
]
,
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "0junedmansuri@gmail.com",
    tel: "+91 8821851060",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/juned-mansuri",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bytesizedjuned/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/bytesized_juned",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@jumicreates",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Mnar India",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/mnar bird.jpg",
      start: "Jan 2024",
      end: "current",
      description:
        "Implemented the full stack development for Mnar India, focusing on building scalable web applications using the MERN stack.",
    },
  ],
  education: [
    {
      school: "St. Thomas Sr. Sec. School",
      href: "https://www.stthomasschool.co.in/",
      degree: "Grade X, XII",
      logoUrl: "/st.png",
      start: "2011",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Mnar - Clothing Brand",
      href: "https://mnar.in",
      dates: "Jan 2024 - current",
      active: true,
      description:
        "Mnar is a clothing brand that My Friend started to explore the intersection of fashion and technology. The brand focuses on creating unique, high-quality clothing that resonates with modern aesthetics.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "MongoDB",
        "Node.js",
        "Express.js",
        "Razorpay",
        "React bits",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://mnar.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/mnar.mp4",
    },
    
  ],
  hackathons: [
    {
      title: "Smart India Hackathon 2024",
      dates: "November 23rd - 25th, 2024",
      location: "Mandsaur, India",
      description:
        "Developed a Web application for the Smart India Hackathon 2024, focusing on Conencting Farmers with Local Markets. The app allows farmers to list their produce, set prices, and connect with local buyers, enhancing the agricultural supply chain.",
      image:
        "https://sih.gov.in/img1/SIH-Logo.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
