import EndeavourGallery1 from "../assets/engagements/endeavour-1.png"
import EndeavourGallery2 from "../assets/engagements/endeavour-2.png"
import EndeavourCover from "../assets/engagements/endeavour-cover.png"
import NiscalaCover from "../assets/engagements/niscala-cover.png";
import NiscalaGallery1 from "../assets/engagements/niscala-1.png";
import NiscalaGallery2 from "../assets/engagements/niscala-2.png";
import NiscalaGallery3 from "../assets/engagements/niscala-3.png";
import InstagramThumb from "../assets/engagements/instagram-thumb.png";
import TikTokThumb from "../assets/engagements/tiktok-thumb.png";
import LinkedinThumb from "../assets/engagements/linkedin-thumb.png";

export const engagements = [
  {
    id: "niscala-melbourne-design-week",
    year: "2024",
    type: "exhibition",
    title: "NISCALA",
    event: "Melbourne Design Week",
    location: "Melbourne, Australia",
    award: "Curator's Choice Awards",
    description:
      "An interactive installation exploring the relationship between human emotions and responsive technologies through tangible interaction and shared experience.",
    engagement:
      "Visitors were invited to interact directly with the installation and experience how physical input could be translated into expressive visual and technological responses.",
    cover: NiscalaCover,
    gallery: [
      NiscalaCover,
      NiscalaGallery1,
      NiscalaGallery2,
      NiscalaGallery3,
    ],
  },

  {
    id: "endeavour-exhibition",
    year: "2025",
    type: "exhibition",
    title: "Endeavour Exhibition",
    event: "University of Melbourne",
    location: "Melbourne, Australia",
    award: "Top 5 Finalist Research, Innovation and Commercialisation Category",
    description:
      "Presented an interactive mixed reality physiotherapy training system during the University of Melbourne’s annual engineering and technology showcase.",
    engagement:
      "Demonstrated the research prototype and discussed its design, sensing system, clinical training applications, and research findings with researchers, industry representatives, students, and public visitors.",
    cover: EndeavourCover,
    gallery: [
      EndeavourCover,
      EndeavourGallery1,
      EndeavourGallery2,
    ],
  },

  {
    id: "featured-online",
    year: "2025",
    type: "media",
    title: "Featured Online",
    event: "University of Melbourne",
    description:
      "The mixed reality physiotherapy project was highlighted across university social media channels, bringing the research to audiences beyond the exhibition space.",
  
    items: [
      {
        platform: "Instagram",
        thumbnail: InstagramThumb,
        url: "https://www.instagram.com/reel/DYMbm8EEqPG/",
        title: "Research Showcase",
        description:
          "A research showcase featuring the mixed reality physiotherapy training project.",
        isVideo: true,
      },
      {
        platform: "TikTok",
        thumbnail: TikTokThumb,
        url: "https://vt.tiktok.com/ZS4eQHo37/",
        title: "Student's life",
        description:
          "What's best from becoming Computer Science student",
        isVideo: true,
      },
      {
        platform: "LinkedIn",
        thumbnail: LinkedinThumb,
        url: "https://www.linkedin.com/posts/master-of-computer-science-student-gabriella-ugcPost-7459407036917788672-Z5Ev/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB4_7RcBE6gOWp8lTx-M03m_4-oLZBWQIG8",
        title: "Research Feature",
        description:
          "A professional feature sharing the project with research and industry audiences.",
        isVideo: false,
      },
    ],
  }
];