const sizes = `
(max-width: 3840px) 3840px,
(max-width: 2560px) 2560px,
(max-width: 1920px) 1920px,
(max-width: 1440px) 1280px,
(max-width: 1024px) 1024px,
(max-width: 768px) 768px,
(max-width: 375px) 375px,
(max-width: 320px) 320px,
100vw
`;

const projects = [
  {
    pageId: "project1",
    title: "Elev Her",
    summary:
      "Elev-Her is a women-focused e-commerce platform prototype designed to showcase and sell retro and rare Jordan sneakers. Built as a full-stack application, it features a responsive frontend, custom backend, and user authentication",
    description:
      "The project combines a responsive, modern frontend built with Next.js with a robust backend powered by Express.js, all backed by MongoDB for data management. Users can filter products, access detailed information, and enjoy a seamless shopping experience, complete with secure authentication features, including Google login. The platform emphasizes clean, intuitive design and mobile-first responsiveness, ensuring accessibility and ease of use across devices. Elev-Her showcases a comprehensive approach to modern web development, integrating dynamic interfaces, secure user authentication, and scalable backend architecture.",
    mainImage: {
      src: "../assets/img/projects/project1/mainImage/0_elevher_preview_ver.576.webp",
      srcset: `
        ../assets/img/projects/project1/1_mainImage/1_elevHer_main_320.webp 320w,
        ../assets/img/projects/project1/1_mainImage/1_elevHer_main_375.webp 375w, 
        ../assets/img/projects/project1/1_mainImage/1_elevHer_main_768.webp 768w,
        ../assets/img/projects/project1/1_mainImage/1_elevHer_main_1024.webp 1024w,
        ../assets/img/projects/project1/1_mainImage/1_elevHer_main_1440.webp 1440w,
        ../assets/img/projects/project1/1_mainImage/1_elevHer_main_1920.webp 1920w,
        ../assets/img/projects/project1/1_mainImage/1_elevHer_main_2560.webp 2560w,
        ../assets/img/projects/project1/1_mainImage/1_elevHer_main_4000.webp 3840w
        `,
      sizes: sizes,
    },
    images: [
      {
        src: `../assets/img/projects/project1/2_elevHer_hero_section/2_elevHer_hero_section_320.webp`,
        srcset: `
        ../assets/img/projects/project1/2_elevHer_hero_section/2_elevHer_hero_section_320.webp 320w,
        ../assets/img/projects/project1/2_elevHer_hero_section/2_elevHer_hero_section_375.webp 375w,
        ../assets/img/projects/project1/2_elevHer_hero_section/2_elevHer_hero_section_768.webp 768w,
        ../assets/img/projects/project1/2_elevHer_hero_section/2_elevHer_hero_section_1024.webp 1024w,
        ../assets/img/projects/project1/2_elevHer_hero_section/2_elevHer_hero_section_1440.webp 1440w,
        ../assets/img/projects/project1/2_elevHer_hero_section/2_elevHer_hero_section_1920.webp 1920w
        `,
        sizes: sizes,
        caption: "Hero Section",
      },
      {
        src: "../assets/img/projects/project1/3_elevHer_mobile_street_mockup/3_elevHer_mobile_street_mockup_320.webp",
        srcset: `
        ../assets/img/projects/project1/3_elevHer_mobile_street_mockup/3_elevHer_mobile_street_mockup_320.webp 320w,
        ../assets/img/projects/project1/3_elevHer_mobile_street_mockup/3_elevHer_mobile_street_mockup_375.webp 375w,
        ../assets/img/projects/project1/3_elevHer_mobile_street_mockup/3_elevHer_mobile_street_mockup_768.webp 768w,
        ../assets/img/projects/project1/3_elevHer_mobile_street_mockup/3_elevHer_mobile_street_mockup_1024.webp 1024w,
        ../assets/img/projects/project1/3_elevHer_mobile_street_mockup/3_elevHer_mobile_street_mockup_1440.webp 1440w,
        ../assets/img/projects/project1/3_elevHer_mobile_street_mockup/3_elevHer_mobile_street_mockup_1920.webp 1920w
        `,
        sizes: sizes,
        caption: `Mobile responsive mockup. Photo credit: Lewis Nguyen, Unsplash`,
      },
      {
        src: "../assets/img/projects/project1/4_elevHer_productCard_showcase/4_elevHer_productCard_showcase_320.webp",
        srcset: `
        ../assets/img/projects/project1/4_elevHer_productCard_showcase/4_elevHer_productCard_showcase_320.webp 320w,
        ../assets/img/projects/project1/4_elevHer_productCard_showcase/4_elevHer_productCard_showcase_375.webp 375w,
        ../assets/img/projects/project1/4_elevHer_productCard_showcase/4_elevHer_productCard_showcase_768.webp 768w,
        ../assets/img/projects/project1/4_elevHer_productCard_showcase/4_elevHer_productCard_showcase_1024.webp 1024w,
        ../assets/img/projects/project1/4_elevHer_productCard_showcase/4_elevHer_productCard_showcase_1440.webp 1440w,
        ../assets/img/projects/project1/4_elevHer_productCard_showcase/4_elevHer_productCard_showcase_1920.webp 1920w
        `,
        sizes: sizes,
        caption: "Product card",
      },
      {
        src: "../assets/img/projects/project1/5_elevHer_explore_section/5_elevher_explore_section_320.webp",
        srcset: `
        ../assets/img/projects/project1/5_elevHer_explore_section/5_elevher_explore_section_320.webp 320w,
        ../assets/img/projects/project1/5_elevHer_explore_section/5_elevher_explore_section_375.webp 375w,
        ../assets/img/projects/project1/5_elevHer_explore_section/5_elevher_explore_section_768.webp 768w,
        ../assets/img/projects/project1/5_elevHer_explore_section/5_elevher_explore_section_1024.webp 1024w,
        ../assets/img/projects/project1/5_elevHer_explore_section/5_elevher_explore_section_1440.webp 1440w
        `,
        sizes: sizes,
        caption: "Products section",
      },
      {
        src: "../assets/img/projects/project1/6_elevHer_color_palette/6_elevHer_color_palette_320.webp",
        srcset: `
        ../assets/img/projects/project1/6_elevHer_color_palette/6_elevHer_color_palette_320.webp 320w,
        ../assets/img/projects/project1/6_elevHer_color_palette/6_elevHer_color_palette_375.webp 375w,
        ../assets/img/projects/project1/6_elevHer_color_palette/6_elevHer_color_palette_768.webp 768w,
        ../assets/img/projects/project1/6_elevHer_color_palette/6_elevHer_color_palette_1024.webp 1024w,
        ../assets/img/projects/project1/6_elevHer_color_palette/6_elevHer_color_palette_1440.webp 1440w,
        ../assets/img/projects/project1/6_elevHer_color_palette/6_elevHer_color_palette_1920.webp 1920w
        `,
        sizes: sizes,
        caption: "Color Palette",
      },
      {
        src: "../assets/img/projects/project1/7_elevHer_materials/elevHer_materials_320.webp",
        srcset: `
        ../assets/img/projects/project1/7_elevHer_materials/7_elevHer_materials_320.webp 320w,
        ../assets/img/projects/project1/7_elevHer_materials/7_elevHer_materials_375.webp 375w,
        ../assets/img/projects/project1/7_elevHer_materials/7_elevHer_materials_768.webp 768w,
        ../assets/img/projects/project1/7_elevHer_materials/7_elevHer_materials_1024.webp 1024w,
        ../assets/img/projects/project1/7_elevHer_materials/7_elevHer_materials_1440.webp 1440w,
        ../assets/img/projects/project1/7_elevHer_materials/7_elevHer_materials_1920.webp 1920w
        `,
        sizes: sizes,
        caption: "Materials - qualities",
      },
      {
        src: "../assets/img/projects/project1/8_elevHer_whyChooseUs_mockup/8_elevHer_whyCooseUs_mockup_320.webp",
        srcset: `
        ../assets/img/projects/project1/8_elevHer_whyChooseUs_mockup/8_elevHer_whyCooseUs_mockup_320.webp 320w,
        ../assets/img/projects/project1/8_elevHer_whyChooseUs_mockup/8_elevHer_whyCooseUs_mockup_375.webp 375w,
        ../assets/img/projects/project1/8_elevHer_whyChooseUs_mockup/8_elevHer_whyCooseUs_mockup_768.webp 768w,
        ../assets/img/projects/project1/8_elevHer_whyChooseUs_mockup/8_elevHer_whyCooseUs_mockup_1024.webp 1024w,
        ../assets/img/projects/project1/8_elevHer_whyChooseUs_mockup/8_elevHer_whyCooseUs_mockup_1440.webp 1440w,
        ../assets/img/projects/project1/8_elevHer_whyChooseUs_mockup/8_elevHer_whyCooseUs_mockup_1920.webp 1920w
        `,
        sizes: sizes,
        caption: "Desktop Mockup - Photo credit: Linus Mimietz on Unsplash",
      },
      {
        src: "../assets/img/projects/project1/9_elevHer_why_choose_us/9_elevHer_why_choose_us_320.webp",
        srcset: `
        ../assets/img/projects/project1/9_elevHer_why_choose_us/9_elevHer_why_choose_us_320.webp 320w,
        ../assets/img/projects/project1/9_elevHer_why_choose_us/9_elevHer_why_choose_us_375.webp 375w,
        ../assets/img/projects/project1/9_elevHer_why_choose_us/9_elevHer_why_choose_us_768.webp 768w,
        ../assets/img/projects/project1/9_elevHer_why_choose_us/9_elevHer_why_choose_us_1024.webp 1024w,
        ../assets/img/projects/project1/9_elevHer_why_choose_us/9_elevHer_why_choose_us_1440.webp 1440w,
        ../assets/img/projects/project1/9_elevHer_why_choose_us/9_elevHer_why_choose_us_1920.webp 1920w
        `,
        sizes: sizes,
        caption: "Why Coose Us Section",
      },
    ],
    skills: [
      "UI & FRONTEND: Shadcn, Lucide Icons, Next.js, Tailwind CSS, React Hook Form, Zod, Zustand",
      "BACKEND & AUTH: Express (ESM, modular routes/controllers), Auth.js, OAUTH, CORS, Bcrypt, Helmet, Mongoose, Joi",
      "DATABASE: MongoDB",
    ],
  },
  {
    pageId: "project2",
    title: "Grow Blog",
    summary:
      "Grow-Blog is a statically generated blog built with Next.js and TypeScript that uses Markdown files (/_posts) to populate content. It emphasizes clean styling, neomorphic design touches, and supports automatic page generation for new posts via the file system.",
    description: `
      Grow-Blog is a modern blogging platform that leverages Next.js’s static generation features to turn Markdown files into full-fledged blog posts, each with its own page. 
      Written in TypeScript for type safety, the project incorporates Sass/neomorphic CSS styles to deliver a visually appealing and responsive user interface. Every time a new Markdown file is added to the _posts directory, Grow-Blog automatically builds a new blog post page using the same layout but tailored content. The code structure emphasizes simplicity and maintainability, with clean file-based routing and styling that balances aesthetic polish with performance.
      `,
    mainImage: {
      src: "../assets/img/projects/project2/mainImage/0_elevher_preview_ver.576.webp",
      srcset: `
        ../assets/img/projects/project2/mainImage/0_growBlog_preview_576.webp 320w,
        ../assets/img/projects/project2/mainImage/0_growBlog_preview_576.webp 375w, 
        ../assets/img/projects/project2/mainImage/0_growBlog_preview_768.webp 768w,
        ../assets/img/projects/project2/mainImage/0_growBlog_preview_2250.webp 1024w,
        ../assets/img/projects/project2/mainImage/0_growBlog_preview_2250.webp 1440w,
        ../assets/img/projects/project2/mainImage/0_growBlog_preview_3240.webp 1920w,
        ../assets/img/projects/project2/mainImage/0_growBlog_preview_3240.webp 2560w
        `,
      sizes: sizes,
    },

    images: [
      {
        src: "../assets/img/placeholders/imgPlaceholder_hor_320.png",
        srcset:
          "../assets/img/placeholders/imgPlaceholder_hor_320.png 320w, ../assets/img/placeholders/imgPlaceholder_hor_375.png 375w, ../assets/img/placeholders/imgPlaceholder_hor_425.png 425w, ../assets/img/placeholders/imgPlaceholder_hor_768.png 768w, ../assets/img/placeholders/imgPlaceholder_hor_1024.png 1024w, ../assets/img/placeholders/imgPlaceholder_hor_1280.png 1280w, ../assets/img/placeholders/imgPlaceholder_hor_1440.png 1440w",
        sizes: sizes,
        caption: "User flow for the onboarding",
      },
      {
        src: "../assets/img/placeholders/imgPlaceholder_hor_320.png",
        srcset:
          "../assets/img/placeholders/imgPlaceholder_hor_320.png 320w, ../assets/img/placeholders/imgPlaceholder_hor_375.png 375w, ../assets/img/placeholders/imgPlaceholder_hor_425.png 425w, ../assets/img/placeholders/imgPlaceholder_hor_768.png 768w, ../assets/img/placeholders/imgPlaceholder_hor_1024.png 1024w, ../assets/img/placeholders/imgPlaceholder_hor_1280.png 1280w, ../assets/img/placeholders/imgPlaceholder_hor_1440.png 1440w",
        sizes: sizes,
        caption: "Mobile responsive design",
      },
      {
        src: "../assets/img/placeholders/imgPlaceholder_hor_320.png",
        srcset:
          "../assets/img/placeholders/imgPlaceholder_hor_320.png 320w, ../assets/img/placeholders/imgPlaceholder_hor_375.png 375w, ../assets/img/placeholders/imgPlaceholder_hor_425.png 425w, ../assets/img/placeholders/imgPlaceholder_hor_768.png 768w, ../assets/img/placeholders/imgPlaceholder_hor_1024.png 1024w, ../assets/img/placeholders/imgPlaceholder_hor_1280.png 1280w, ../assets/img/placeholders/imgPlaceholder_hor_1440.png 1440w",
        sizes: sizes,
        caption: "Admin dashboard interface",
      },
      {
        src: "../assets/img/placeholders/imgPlaceholder_hor_320.png",
        srcset:
          "../assets/img/placeholders/imgPlaceholder_hor_320.png 320w, ../assets/img/placeholders/imgPlaceholder_hor_375.png 375w, ../assets/img/placeholders/imgPlaceholder_hor_425.png 425w, ../assets/img/placeholders/imgPlaceholder_hor_768.png 768w, ../assets/img/placeholders/imgPlaceholder_hor_1024.png 1024w, ../assets/img/placeholders/imgPlaceholder_hor_1280.png 1280w, ../assets/img/placeholders/imgPlaceholder_hor_1440.png 1440w",
        sizes: sizes,
        caption: "Admin dashboard interface",
      },
    ],
    skills: [
      "FRONTEND: Next.js, TypeScript, Sass, Responsive Layouts",
      "CONTENT & DATA: Node.js Fs, Static Pages Generation, Markdown Parsing",
      "STORAGE: Local file system",
    ],
  },
  {
    pageId: "project3",
    title: "Coders App",
    summary:
      `CodersApp is a coding challenge platform prototype designed to help developers practice and improve their skills. Built as a frontend-focused web application, it provides authentication, challenge browsing, and an integrated coding workspace with Markdown-based descriptions.`,
    description:
      `The project delivers a responsive, modern frontend built with React, Redux Toolkit, and React Router, styled using Tailwind CSS. It features protected routes for authenticated users, a customizable dark/light mode, and a challenge library loaded dynamically from JSON. Each challenge supports Markdown rendering for rich descriptions, while the integrated CodeMirror workspace allows users to write and test code directly in the browser. Designed with scalability in mind, CodersApp emphasizes clean UI, intuitive navigation, and maintainable state management, with a manager dashboard planned for future expansion. The platform demonstrates practical application of modern frontend patterns, state handling, and developer-centric features.`,
    mainImage: {
      src: "../assets/img/projects/project3/1_mainimage/1_codersapp_mainimage_320.webp",
      srcset: `
        ../assets/img/projects/project3/1_mainimage/1_codersapp_mainimage_320.webp 320w,
        ../assets/img/projects/project3/1_mainimage/1_codersapp_mainimage_375.webp 375w,
        ../assets/img/projects/project3/1_mainimage/1_codersapp_mainimage_768.webp 768w,
        ../assets/img/projects/project3/1_mainimage/1_codersapp_mainimage_1024.webp 1024w,
        ../assets/img/projects/project3/1_mainimage/1_codersapp_mainimage_1440.webp 1440w,
        ../assets/img/projects/project3/1_mainimage/1_codersapp_mainimage_1920.webp 1920w,
        ../assets/img/projects/project3/1_mainimage/1_codersapp_mainimage_2560.webp 2560w,
        ../assets/img/projects/project3/1_mainimage/1_codersapp_mainimage_3840.webp 3840w
        `,
      sizes: sizes,
    },
    images: [
      {
        src: `../assets/img/projects/project3/2_login/2_codersapp_login_320.webp`,
        srcset: `
        ../assets/img/projects/project3/2_login/2_codersapp_login_320.webp 320w,
        ../assets/img/projects/project3/2_login/2_codersapp_login_375.webp 375w,
        ../assets/img/projects/project3/2_login/2_codersapp_login_768.webp 768w,
        ../assets/img/projects/project3/2_login/2_codersapp_login_1024.webp 1024w,
        ../assets/img/projects/project3/2_login/2_codersapp_login_1440.webp 1440w,
        ../assets/img/projects/project3/2_login/2_codersapp_login_1920.webp 1920w
        `,
        sizes: sizes,
        caption: "Login page",
      },
      {
        src: "../assets/img/projects/project3/3_leaderboard/3_codersapp_leaderboard_320.webp",
        srcset: `
        ../assets/img/projects/project3/3_leaderboard/3_codersapp_leaderboard_320.webp 320w,
        ../assets/img/projects/project3/3_leaderboard/3_codersapp_leaderboard_375.webp 375w,
        ../assets/img/projects/project3/3_leaderboard/3_codersapp_leaderboard_768.webp 768w,
        ../assets/img/projects/project3/3_leaderboard/3_codersapp_leaderboard_1024.webp 1024w,
        ../assets/img/projects/project3/3_leaderboard/3_codersapp_leaderboard_1440.webp 1440w,
        ../assets/img/projects/project3/3_leaderboard/3_codersapp_leaderboard_1920.webp 1920w
        `,
        sizes: sizes,
        caption: `Leaderboard page`,
      },
      {
        src: "../assets/img/projects/project3/4_challenges/4_easybank_mobile-design_320.webp",
        srcset: `
        ../assets/img/projects/project3/4_challenges/4_codersapp_challenges_320.webp 320w,
        ../assets/img/projects/project3/4_challenges/4_codersapp_challenges_375.webp 375w,
        ../assets/img/projects/project3/4_challenges/4_codersapp_challenges_768.webp 768w,
        ../assets/img/projects/project3/4_challenges/4_codersapp_challenges_1024.webp 1024w,
        ../assets/img/projects/project3/4_challenges/4_codersapp_challenges_1440.webp 1440w,
        ../assets/img/projects/project3/4_challenges/4_codersapp_challenges_1920.webp 1920w
        `,
        sizes: sizes,
        caption: "Challenges page",
      },
      {
        src: "../assets/img/projects/project3/5_darkmode/4_easybank_mobile-design_320.webp",
        srcset: `
        ../assets/img/projects/project3/5_darkmode/5_codersapp_darkmode_320.webp 320w,
        ../assets/img/projects/project3/5_darkmode/5_codersapp_darkmode_375.webp 375w,
        ../assets/img/projects/project3/5_darkmode/5_codersapp_darkmode_768.webp 768w,
        ../assets/img/projects/project3/5_darkmode/5_codersapp_darkmode_1024.webp 1024w,
        ../assets/img/projects/project3/5_darkmode/5_codersapp_darkmode_1440.webp 1440w,
        ../assets/img/projects/project3/5_darkmode/5_codersapp_darkmode_1920.webp 1920w
        `,
        sizes: sizes,
        caption: "Challenges page - Darkmode preview",
      },
    ],
    skills: ["React", "Rexux + Async Thunks", "Tailwind"],
  },

  {
    pageId: "project4",
    title: "Easybank Landing Page",
    summary:
      "A responsive landing page challenge from Frontend Mentor, built first with HTML, CSS & JavaScript, then refactored with React + TailwindCSS for a cleaner, component-based design. Focused on responsiveness, interactivity, and semantic structure.",
    description: `This project recreates the Easybank landing page design with a mobile-first approach. The initial version was built using semantic HTML, CSS (Flexbox & Grid), and vanilla JavaScript for menu animations. Later, the project was refactored into a React + TailwindCSS implementation, improving maintainability and responsiveness while modernizing the workflow. Accessibility best practices (semantic markup, focusable elements) and basic performance improvements (lazy loading images, font preloading) were applied to enhance the overall user experience.
      `,
    mainImage: {
      src: "../assets/img/projects/project4/1_mainImage/1_easybank_mainimage_320.webp",
      srcset: `
        ../assets/img/projects/project4/1_mainImage/1_easybank_mainimage_320.webp 320w,
        ../assets/img/projects/project4/1_mainImage/1_easybank_mainimage_375.webp 375w,
        ../assets/img/projects/project4/1_mainImage/1_easybank_mainimage_768.webp 768w,
        ../assets/img/projects/project4/1_mainImage/1_easybank_mainimage_1024.webp 1024w,
        ../assets/img/projects/project4/1_mainImage/1_easybank_mainimage_1440.webp 1440w,
        ../assets/img/projects/project4/1_mainImage/1_easybank_mainimage_1920.webp 1920w,
        ../assets/img/projects/project4/1_mainImage/1_easybank_mainimage_2560.webp 2560w,
        ../assets/img/projects/project4/1_mainImage/1_easybank_mainimage_3841.webp 3840w
        `,
      sizes: sizes,
    },
    images: [
      {
        src: `../assets/img/projects/project4/2_desktop-showcase/1_easybank_desktop_showcase_320.webp`,
        srcset: `
        ../assets/img/projects/project4/2_desktop-showcase/2_easybank_desktop_showcase_320.webp 320w,
        ../assets/img/projects/project4/2_desktop-showcase/2_easybank_desktop_showcase_375.webp 375w,
        ../assets/img/projects/project4/2_desktop-showcase/2_easybank_desktop_showcase_768.webp 768w,
        ../assets/img/projects/project4/2_desktop-showcase/2_easybank_desktop_showcase_1024.webp 1024w,
        ../assets/img/projects/project4/2_desktop-showcase/2_easybank_desktop_showcase_1440.webp 1440w,
        ../assets/img/projects/project4/2_desktop-showcase/2_easybank_desktop_showcase_1920.webp 1920w
        `,
        sizes: sizes,
        caption: "Showcase Preview",
      },
      {
        src: "../assets/img/projects/project4/3_active-states/3_easybank_active-states_320.webp",
        srcset: `
        ../assets/img/projects/project4/3_active-states/3_easybank_active-states_320.webp 320w,
        ../assets/img/projects/project4/3_active-states/3_easybank_active-states_375.webp 375w,
        ../assets/img/projects/project4/3_active-states/3_easybank_active-states_768.webp 768w,
        ../assets/img/projects/project4/3_active-states/3_easybank_active-states_1024.webp 1024w,
        ../assets/img/projects/project4/3_active-states/3_easybank_active-states_1440.webp 1440w,
        ../assets/img/projects/project4/3_active-states/3_easybank_active-states_1920.webp 1920w
        `,
        sizes: sizes,
        caption: `Desktop Landing Page Design By Frontend Mentor`,
      },
      {
        src: "../assets/img/projects/project4/4_mobile-design/4_easybank_mobile-design_320.webp",
        srcset: `
        ../assets/img/projects/project4/4_mobile-design/4_easybank_mobile-design_320.webp 320w,
        ../assets/img/projects/project4/4_mobile-design/4_easybank_mobile-design_375.webp 375w,
        ../assets/img/projects/project4/4_mobile-design/4_easybank_mobile-design_768.webp 768w,
        ../assets/img/projects/project4/4_mobile-design/4_easybank_mobile-design_1024.webp 1024w,
        ../assets/img/projects/project4/4_mobile-design/4_easybank_mobile-design_1440.webp 1440w,
        ../assets/img/projects/project4/4_mobile-design/4_easybank_mobile-design_1920.webp 1920w
        `,
        sizes: sizes,
        caption: "Easybank mobile layout with open menu – showcase preview",
      },
    ],
    skills: [
      "FRONTEND: HTML, CSS, Flexbox, Grid, Tailwind CSS, React",
      "INTERACTIVITY: Mobile menu animation, CSS hover states",
      "ACCESSIBILITY & PERFORMANCE: Semantic HTML, Keyboard navigation awareness, Lazy loading, Font preloading",
    ],
  },
];

/* const iconMap = {
  "UI Design": "triangle",
  "Web Development": "monitor",
  JavaScript: "code",
  "HTML & CSS": "code",
  React: "react",
  Bootstrap: "gridLayout",
}; */
