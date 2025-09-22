const sizes = `
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
        ../assets/img/projects/project1/1_mainImage/0_elevher_preview_ver.576.webp 320w,
        ../assets/img/projects/project1/1_mainImage/0_elevher_preview_ver.576.webp 375w, 
        ../assets/img/projects/project1/1_mainImage/0_elevher_preview_ver.768.webp 768w,
        ../assets/img/projects/project1/1_mainImage/0_elevher_preview_ver.2250.webp 1024w,
        ../assets/img/projects/project1/1_mainImage/0_elevher_preview_ver.2250.webp 1440w,
        ../assets/img/projects/project1/1_mainImage/0_elevher_preview_ver.3240.webp 1920w,
        ../assets/img/projects/project1/1_mainImage/0_elevher_preview_ver.3240.webp 2560w
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
        src: "../assets/img/projects/project1/6_elevHer_color_palette/4_elevHer_productCard_showcase_320.webp",
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
        src: "../assets/img/projects/project1/8_elevHer_whyCooseUs_mockup/8_elevHer_whyCooseUs_mockup_320.webp",
        srcset: `
        ../assets/img/projects/project1/8_elevHer_whyCooseUs_mockup/8_elevHer_whyCooseUs_mockup_320.webp 320w,
        ../assets/img/projects/project1/8_elevHer_whyCooseUs_mockup/8_elevHer_whyCooseUs_mockup_375.webp 375w,
        ../assets/img/projects/project1/8_elevHer_whyCooseUs_mockup/8_elevHer_whyCooseUs_mockup_768.webp 768w,
        ../assets/img/projects/project1/8_elevHer_whyCooseUs_mockup/8_elevHer_whyCooseUs_mockup_1024.webp 1024w,
        ../assets/img/projects/project1/8_elevHer_whyCooseUs_mockup/8_elevHer_whyCooseUs_mockup_1440.webp 1440w,
        ../assets/img/projects/project1/8_elevHer_whyCooseUs_mockup/8_elevHer_whyCooseUs_mockup_1920.webp 1920w
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
      "BACKEND & AUTH: Express (ESM, modular routes/controllers), Auth.js, OAUTH, CORS, Bycrypt, Helmet, Mongoose, Joi",
      "DATABASE: MongoDB"
    ],
  },
  {
    pageId: "project2",
    title: "Cool Project 2",
    summary:
      "Ut ac fringilla tellus. Proin quam metus, interdum ut posuere non, consequat eu ante. Etiam vel placerat ante. Donec mollis turpis sit amet ipsum commodo fermentum. Suspendisse feugiat augue ut massa gravida, pretium ultrices velit accumsan. Donec malesuada semper viverra.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et lacus ac leoultrices posuere. Donec mattis tellus eu turpis porta rutrum. Nam lacus lorem, laoreet ut nibh non, vehicula egestas ante. Cras vulputate tristique quam, id fermentum dolor malesuada in. Praesent sed ullamcorper dolor. Nunc in accumsan nunc. Donec tempor dolor nec diam malesuada, sit amet feugiat lorem tempor. Vivamus a purus et magna semper fringilla commodo a urna. Donec sem ante, iaculis ut turpis eleifend, euismod molestie metus. Phasellus tincidunt dignissim lacus, porta sagittis mi fringilla sit amet. Nullam sit amet nisl sed est sagittis sagittis quis eu turpis. In porttitor mollis quam in interdum. In aliquam velit turpis, sed ultricies massa aliquet sed. Aliquam ac erat at nisl hendrerit lacinia vel id augue. Ut sed nisl at ipsum pharetra sollicitudin vel id elit.",
    mainImage: "../assets/img/projects/beach.jpg",

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
    skills: ["UX Research", "HTML", "SCSS", "JS Animations"],
  },
  {
    pageId: "project3",
    title: "Neat Project 3",
    summary:
      "Ut ac fringilla tellus. Proin quam metus, interdum ut posuere non, consequat eu ante. Etiam vel placerat ante. Donec mollis turpis sit amet ipsum commodo fermentum. Suspendisse feugiat augue ut massa gravida, pretium ultrices velit accumsan. Donec malesuada semper viverra.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et lacus ac leoultrices posuere. Donec mattis tellus eu turpis porta rutrum. Nam lacus lorem, laoreet ut nibh non, vehicula egestas ante. Cras vulputate tristique quam, id fermentum dolor malesuada in. Praesent sed ullamcorper dolor. Nunc in accumsan nunc. Donec tempor dolor nec diam malesuada, sit amet feugiat lorem tempor. Vivamus a purus et magna semper fringilla commodo a urna. Donec sem ante, iaculis ut turpis eleifend, euismod molestie metus. Phasellus tincidunt dignissim lacus, porta sagittis mi fringilla sit amet. Nullam sit amet nisl sed est sagittis sagittis quis eu turpis. In porttitor mollis quam in interdum. In aliquam velit turpis, sed ultricies massa aliquet sed. Aliquam ac erat at nisl hendrerit lacinia vel id augue. Ut sed nisl at ipsum pharetra sollicitudin vel id elit.",
    mainImage: "../assets/img/projects/geom.jpg",
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
    skills: ["Figma", "Design Systems", "Accessibility", "HTML/CSS"],
  },

  {
    pageId: "project4",
    title: "Neat Project 4",
    summary:
      "Ut ac fringilla tellus. Proin quam metus, interdum ut posuere non, consequat eu ante. Etiam vel placerat ante. Donec mollis turpis sit amet ipsum commodo fermentum. Suspendisse feugiat augue ut massa gravida, pretium ultrices velit accumsan. Donec malesuada semper viverra.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et lacus ac leoultrices posuere. Donec mattis tellus eu turpis porta rutrum. Nam lacus lorem, laoreet ut nibh non, vehicula egestas ante. Cras vulputate tristique quam, id fermentum dolor malesuada in. Praesent sed ullamcorper dolor. Nunc in accumsan nunc. Donec tempor dolor nec diam malesuada, sit amet feugiat lorem tempor. Vivamus a purus et magna semper fringilla commodo a urna. Donec sem ante, iaculis ut turpis eleifend, euismod molestie metus. Phasellus tincidunt dignissim lacus, porta sagittis mi fringilla sit amet. Nullam sit amet nisl sed est sagittis sagittis quis eu turpis. In porttitor mollis quam in interdum. In aliquam velit turpis, sed ultricies massa aliquet sed. Aliquam ac erat at nisl hendrerit lacinia vel id augue. Ut sed nisl at ipsum pharetra sollicitudin vel id elit.",
    mainImage: "../assets/img/projects/station.jpg",
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
    skills: ["Next.js", "Tailwind", "REST API", "GraphQL"],
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
