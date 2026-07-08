import HomePage from "../assets/HomePage.png";
import MarketAR from "../assets/Market AR - Navigation.png";
import MarketList from "../assets/MarketAR - Lists.png";
import MarketListPage from "../assets/Market VR Listing Page.png";

const ProjectDetails = [
{
  slug: "market-mate",

  theme: {
    primary: "#C7D36F",
    primarySoft: "rgba(199,211,111,0.15)",
    glow: "rgba(199,211,111,0.35)",
  },

  hero: {
    type: "UX Research Case Study",
    title: "Navigating Complexity in Physical Environments",
    description:
      "Helping visitors navigate a 600+ stall market where spatial cues are inconsistent and layouts change frequently.",
    impact: [
      "Reduced navigation confusion",
      "Improved stall discovery success",
      "Increased user confidence in exploration",
    ],
    meta: {
      role: "UX Researcher (Lead)",
      timeline: "8 weeks",
      team: "4",
    },
    image: HomePage
  },

  hook: {
    intro:
      "Visitors expect intuitive navigation, but the market environment introduces constant spatial uncertainty.",

    expectation: [
      "Explore the market without friction",
      "Clearly distinguish sections and categories",
      "Discover new stalls intentionally",
    ],

    reality: [
      "Visitors frequently lose orientation",
      "Layout changes disrupt mental mapping",
      "No consistent navigation system exists",
    ],
  },

  data: {
    intro:
      "Fieldwork observations and interviews revealed recurring breakdowns in how users navigate and explore the space.",

      stats: [
        {
          value: "4 / 8",
          title: "Participants got lost during navigation tasks",
        },
        {
          value: "3×",
          title: "Repeated backtracking was observed",
        },
        {
          value: "100%",
          title: "Relied on wandering instead of planning",
        },
      ],

    quotes: [
      "I just walk around and hope I eventually find it.",
      "There are no clear signs to guide where things are.",
      "I spent quiet sometimes just to find the viral donuts, the social media talking about",
      "As a moeslem and immigrant, I need to makesure whether the product is Halal or not",
    ],
  },
  methods: {
    intro:
      "We combined multiple qualitative research methods to understand both observable user behaviour and the environmental constraints shaping navigation.",
  
    items: [
      {
        icon: "users",
        title: "User Interviews",
        subtitle: "8 participants",
        description:
          "Semi-structured interviews to uncover motivations, frustrations, and shopping behaviours.",
      },
  
      {
        icon: "map",
        title: "Field Observation",
        subtitle: "3 site visits",
        description:
          "Observed real navigation behaviour, crowd movement, and decision-making within the market.",
      },
  
      {
        icon: "layout",
        title: "Affinity Mapping",
        subtitle: "Thematic analysis",
        description:
          "Synthesised qualitative findings into themes that informed design opportunities.",
      },
    ],
  
    why: [
      "Observe real behaviour rather than relying solely on participants' opinions.",
      "Understand how the physical environment influences navigation decisions.",
      "Translate research findings into actionable design requirements.",
    ],
  },
  insights: [
    {
      title: "Navigation is reactive rather than intentional",

      quote:
        "I just walk around and hope I eventually find it.",

      evidence: [
        "4 of 8 participants became disoriented.",
        "Repeated backtracking was observed during tasks.",
      ],

      interpretation:
        "Visitors lacked a reliable mental model of the market layout.",

      designOpportunity:
        "Navigation should become contextual rather than requiring users to interpret static maps.",
    },

    {
      title: "Discovery happens accidentally",

      evidence: [
        "Visitors encountered stalls randomly.",
        "No tools supported intentional planning.",
      ],

      interpretation:
        "Users were unable to align shopping goals with available offerings.",

      designOpportunity:
        "Support personalised exploration before and during visits.",
    },

    {
      title: "Information is difficult to access",

      evidence: [
        "Dietary information was rarely visible.",
        "Product details required asking multiple sellers.",
      ],

      interpretation:
        "Users lacked confidence when making purchasing decisions.",

      designOpportunity:
        "Provide contextual information directly within navigation.",
    },
  ],
  participants: {
    intro:
      "Participants were selected to reflect the diversity of visitors and stakeholders within the market ecosystem.",
  
      groups: [
        {
          emoji: "👩‍🌾",
          title: "Market Sellers",
          description:
            "Understand customer behaviour and provide valuable operational insights into how visitors interact with the market.",
        },
        {
          emoji: "🌏",
          title: "International Visitors",
          description:
            "Represent first-time visitors who rely heavily on visual guidance and have little prior knowledge of the market layout.",
        },
        {
          emoji: "🛒",
          title: "Regular Local Visitors",
          description:
            "Offer perspectives on habitual shopping patterns and highlight recurring navigation challenges despite familiarity.",
        },
        {
          emoji: "👨‍💼",
          title: "Office Workers",
          description:
            "Time-constrained visitors who require quick, efficient navigation during lunch breaks or after work.",
        },
      ],
  
    rationale:
      "This mix ensured coverage of both frequent and first-time users, capturing a wide range of navigation behaviours, expectations, and constraints.",
  },
  designStrategy: [
    {
      insight: "Users frequently lose orientation.",

      principle:
        "Navigation should remain spatial, contextual, and low cognitive load.",

      feature: "MarketAR Navigation",
    },

    {
      insight: "Users struggle to discover relevant stalls.",

      principle:
        "Support intentional exploration instead of reactive wandering.",

      feature: "MarketMatch Recommendation",
    },

    {
      insight: "Users need dietary and product information.",

      principle:
        "Information should appear in context at the point of decision.",

      feature: "AR Product Overlay",
    },
  ],

  designDecision: {
    alternatives: [
      {
        title: "Static Maps",

        reason:
          "Unable to adapt to changing layouts and required users to mentally translate maps into physical space.",
      },

      {
        title: "QR Codes",

        reason:
          "Assumed users already knew where to search and interrupted navigation flow.",
      },

      {
        title: "Physical Signage",

        reason:
          "Difficult to maintain in a frequently changing market environment.",
      },
    ],
    chosen: [
      {
        title: "AR Navigation",

        reason:
          "Provides intuitive real-time guidance aligned directly with the physical environment.",
      },

      {
        title: "Recommendation System",

        reason:
          "Supports personalised planning and reduces exploration effort.",
      },
    ],

    tradeoffs: [
      "Requires modern smartphone capabilities.",
      "AR accuracy depends on localisation quality.",
      "May present accessibility challenges for some users.",
    ],
  },

  solution: {
    intro:
      "The final concept combines contextual AR guidance with personalised discovery...",
  
    products: [
      {
        title: "MarketAR",
        image: MarketAR,
        description: "...",
        features: [
          "Directional AR guidance",
          "Stall information overlay",
          "Indoor wayfinding",
        ],
      },
      {
        title: "MarketMatch",
        image: MarketList,
        description: "...",
        features: [
          "Preference-based recommendation",
          "Optimised route planning",
          "Personalised discovery",
        ],
      },
    ],
  },
  journey: [
    {
      stage: "Arrival",
      action: "User enters the market",
      pain: "No clear orientation or map",
    },
    {
      stage: "Exploration",
      action: "User browses stalls",
      pain: "Gets lost and backtracks frequently",
    },
    {
      stage: "Search",
      action: "User looks for specific stall",
      pain: "No guidance system available",
    },
    {
      stage: "Decision",
      action: "User chooses where to go",
      pain: "Lack of information to compare options",
    },
  ],
  requirements: [
    {
      problem: "Users lack a stable mental model of the market layout",
  
      designPrinciple: "Navigation must be spatial, real-time, and low cognitive load",
  
      requirement:
        "The system should guide users in-context without requiring map interpretation",
  
      useCase:
        "Users follow directional AR cues embedded in their physical environment",
    },
  
    {
      problem: "Users cannot plan their visit due to lack of visibility",
  
      designPrinciple: "Support intentional exploration, not just reactive wandering",
  
      requirement:
        "The system should allow users to preview, select, and optimise their journey",
  
      useCase:
        "Users create multi-stop routes before or during their visit",
    },
  
    {
      problem: "Users have specific dietary and preference needs",
  
      designPrinciple: "Discovery should be personalised and relevant",
  
      requirement:
        "The system should recommend stalls based on user preferences",
  
      useCase:
        "Users receive curated suggestions aligned with dietary needs",
    },
  
],

  constraints: [
    "Market layout changes frequently",
    "High density and crowd movement",
    "Wide variation in user tech familiarity",
  ],

  risks: [
    "AR usability limitations in real-world conditions",
    "Dependence on accurate stall data",
    "Potential barriers to user adoption",
  ],

  expectedImpact: [
    {
      icon: "Clock3",
      title: "Reduce Navigation Time",
      description:
        "Help visitors reach destinations faster through contextual AR guidance.",
    },
    {
      icon: "MapPinned",
      title: "Improve Stall Discovery",
      description:
        "Support intentional exploration through personalised recommendations.",
    },
    {
      icon: "Smile",
      title: "Increase Visitor Confidence",
      description:
        "Reduce uncertainty while navigating an unfamiliar market.",
    },
  ],

 
  validation: {
    intro:
      "The proposed solution has not yet been evaluated with end users. Future work will focus on validating usability, navigation performance, and overall user experience.",
  
    activities: [
      {
        title: "Usability Testing",
        description:
          "Evaluate whether users can comfortably interact with AR navigation and recommendation features during realistic shopping tasks.",
      },
  
      {
        title: "Navigation Performance",
        description:
          "Measure task completion time, successful destination finding, and frequency of backtracking compared with existing navigation behaviour.",
      },
  
      {
        title: "User Experience Evaluation",
        description:
          "Collect qualitative feedback and System Usability Scale (SUS) scores to assess confidence, learnability, and overall satisfaction.",
      },
  
      {
        title: "Longitudinal Evaluation",
        description:
          "Investigate whether repeated use improves familiarity with the market and reduces cognitive effort over time.",
      },
    ],
  },

  reflection: {
    quote:
      "Design is not about adding more features—it is about understanding the right problem deeply enough that the solution becomes obvious.",
  
    learnings: [
      {
        title: "Research Before Solutions",
        description:
          "The most valuable outcome of this project was not the AR interface itself, but uncovering the underlying navigation challenges that users experience in dynamic physical environments.",
      },
  
      {
        title: "Constraints Shape Better Design",
        description:
          "Environmental factors such as changing stall layouts, crowd density, and diverse visitor backgrounds became design opportunities rather than limitations.",
      },
  
      {
        title: "Evidence-Driven Decision Making",
        description:
          "Every major design decision—from AR navigation to personalised recommendations—was directly informed by qualitative findings instead of assumptions.",
      },
    ],
  },

},
];

export default ProjectDetails;