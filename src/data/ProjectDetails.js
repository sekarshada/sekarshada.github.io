// import HomePage from "../assets/HomePage.png";
import MarketAR from "../assets/Market AR - Navigation.png";
// import MarketList from "../assets/MarketAR - Lists.png";
// import MarketListPage from "../assets/Market VR Listing Page.png";
import lofi1 from "../assets/lofi-1.png"
import lofi2 from "../assets/lofi-2.png"
import lofi3 from "../assets/lofi-3.png"
import lofi4 from "../assets/lofi-4.png"

import hifi1 from "../assets/hifi-1.png"
import hifi2 from "../assets/hifi-2.png"
import hifi3 from "../assets/hifi-3.png"
import hifi4 from "../assets/hifi-4.png"
import hifi5 from "../assets/hifi-5.png"
import Thumbnail from "../assets/Thumbnail detail.png"
import ThumbnailXR from "../assets/Thumbnail XR.png"
import heatmap from "../assets/heatmap.png"
import sensorMatrix from "../assets/sensor-matrix.png"

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
    url:"https://www.figma.com/proto/OfwBsPOCkLJH81ClxXtNCc/Design-Concept?page-id=2%3A2&node-id=194-463&p=f&viewport=-9059%2C314%2C0.36&t=m8Zxv58bNMC4iHKc-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=194%3A463",
    link:"Figma Prototype",
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
    image: Thumbnail
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
    title: "Participants Selection",
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
      "The solution evolved through multiple iterations, progressing from early information architecture sketches to high-fidelity mobile interfaces and finally an augmented reality navigation experience.",
  
    phases: [
      // {
      //   title: "Concept Exploration",
      //   subtitle: "Early Design Thinking",
  
      //   description:
      //     "Before designing interfaces, multiple concepts were explored to determine how visitors should discover stalls, plan journeys, and navigate within the market.",
  
      //   items: [
      //     {
      //       title: "Journey Recommendation",
      //       image: "/projects/market-mate/concept-journey.png",
      //     },
      //     {
      //       title: "Personalised Planning",
      //       image: "/projects/market-mate/concept-plan.png",
      //     },
      //     {
      //       title: "Indoor Navigation",
      //       image: "/projects/market-mate/concept-navigation.png",
      //     },
      //   ],
      // },
  
      {
        title: "Low-Fidelity Prototype",
        subtitle: "Wireframing",
  
        description:
          "Wireframes were created to validate information architecture, user flow, and navigation before investing in visual design.",
  
        items: [
          {
            title: "MarketMatch Recommendation",
            image: lofi1,
          },
          {
            title: "Custom Tour Builder",
            image: lofi2,
          },
          {
            title: "Itinerary Planning",
            image: lofi3,
          },
          {
            title: "Market Browser",
            image: lofi4,
          },
        ],
      },
  
      {
        title: "High-Fidelity Mobile Design",
        subtitle: "Final UI",
  
        description:
          "The interface was refined using the Queen Victoria Market visual identity, improving readability, visual hierarchy, and overall user experience.",
  
        items: [
          {
            title: "AR Navigation",
            image: MarketAR,
          },
          {
            title: "Market Browser",
            image: hifi4,
          },
          {
            title: "Stall Details",
            image: hifi5,
          },
        ],
      },
  
      // {
      //   title: "Augmented Reality Navigation",
      //   subtitle: "Final Prototype",
  
      //   description:
      //     "The final prototype combines AR navigation with contextual information overlays, allowing visitors to navigate confidently while learning about nearby stalls.",
  
      //   items: [
      //     {
      //       title: "Live AR Navigation",
      //       image: "/projects/market-mate/ar.png",
      //     },
      //   ],
      // },
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
    eyebrow: "Next Phase",
    title: "Validation Plan",
    icon: "check",
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
    intro:
      "Designing for complex physical environments revealed broader considerations beyond usability alone. These reflections highlight important trade-offs and ethical questions that should shape future iterations of the system.",
  
    quote:
      "Great design is not only about solving today's problems, but also anticipating tomorrow's consequences.",
  
    learnings: [
      {
        title: "Inclusive by Design",
  
        description:
          "AR navigation offers an intuitive experience for many users, but it also assumes access to modern devices and a certain level of digital confidence. Future iterations should consider complementary low-tech alternatives to ensure accessibility for a broader audience.",
      },
  
      {
        title: "Balancing Personalisation and Fairness",
  
        description:
          "Recommendation systems can improve discovery, yet they also risk reinforcing the popularity of already well-known stalls. Designing for equitable visibility remains an important challenge for supporting the entire market ecosystem.",
      },
  
      {
        title: "Privacy Requires Deliberate Design",
  
        description:
          "Personalised experiences rely on contextual information such as location, preferences, and browsing behaviour. Protecting this data through transparent and privacy-conscious design should be treated as a core requirement rather than an afterthought.",
      },
  
      {
        title: "Technology Has Practical Boundaries",
  
        description:
          "The effectiveness of AR navigation depends on reliable localisation, compatible devices, and stable connectivity. These real-world constraints remind us that successful experiences are shaped as much by technical feasibility as by interface design.",
      },
    ],
  }

},

{
  slug: "xr-physiotherapy",

  theme: {
    primary: "#8EE6D1",
    primarySoft: "rgba(142,230,209,0.15)",
    glow: "rgba(142,230,209,0.35)",
  },

  hero: {
    type: "Mixed Reality Research Project",
    title:
      "Social Robot & Visualisation for Medical Training",
    description:
      "Back pain is the world's leading cause of disability, yet physiotherapy training still relies heavily on peer practice and verbal feedback, lacking the precision needed to develop fine tactile control and clinical empathy. This project presents a Mixed Reality training system for spinal mobilisation 🔴 Pressure sensing, 🤖 Social robot (Furhat) and 🖐️ Ghost hand guidance. The study shows that immersive training systems can maintain stable cognitive load across different feedback configurations, indicating good usability and integration. While all feedback types were perceived as clear and helpful, presenting too many cues simultaneously increased cognitive effort, highlighting the importance of timing and simplicity in interface design. The inclusion of a socially expressive robot enhanced engagement and encouraged patient-centred awareness, supporting empathy without adding mental load.",
    image: ThumbnailXR,
    url:"https://github.com/sekarshada/SpinalLog_Quest3",
    link:"Github",
    // impact: [
    //   "MR-based motor skill training",
    //   "Pressure and force feedback",
    //   "Social robot patient simulation",
    // ],
    meta: {
      role: "Researcher & Developer",
      timeline: "2025 Thesis Project",
      team: "Supervised Research",
    },
  },

  // hook: {
  //   intro:
  //     "Physiotherapy training requires students to develop precise motor skills while also responding to patient cues, yet existing training tools often separate technical performance from patient-centred interaction.",

  //   expectation: [
  //     "Students receive clear feedback on applied pressure",
  //     "Trainees understand expert hand placement and movement",
  //     "Patient communication is practiced alongside technical skill",
  //   ],

  //   reality: [
  //     "Pressure feedback is often hard to perceive in real time",
  //     "Expert technique is difficult to observe and reproduce",
  //     "Patient reactions are rarely embedded into simulator-based practice",
  //   ],
  // },

  data: {
    intro:
      "The project was grounded in prior work on mixed reality medical training, tangible physiotherapy simulators, haptic feedback, and social robots in learning environments.",

    stats: [
      {
        value: "99",
        title: "Pressure sensing points",
        description:
          "An 11×9 pressure matrix captured touch distribution across the lumbar model.",
      },
      {
        value: "8",
        title: "Magnetometer sensors",
        description:
          "MLX90393 sensors supported force-related measurement and interaction feedback.",
      },
      {
        value: "4",
        title: "Experimental conditions",
        description:
          "The study compared MR baseline, pressure feedback, robot feedback, and combined feedback.",
      },
    ],

    quotes: [
      "Physiotherapy skill training depends on both accurate force application and patient communication.",
      "The system explores how real-time multisensory feedback can support technical learning and empathy-oriented interaction.",
    ],
  },

  methods: {
    intro:
      "The project combined system development, hardware prototyping, mixed reality integration, and experimental design.",

    items: [
      {
        icon: "layout",
        title: "System Design",
        subtitle: "MR + sensors + robot",
        description:
          "Designed an integrated training environment connecting a physical lumbar model, sensor feedback, MR visuals, and Furhat robot responses.",
      },
      {
        icon: "map",
        title: "Prototype Integration",
        subtitle: "Unity + ESP32 + Furhat",
        description:
          "Built communication pipelines for pressure sensing, magnetometer data, hand guidance, and robot feedback.",
      },
      {
        icon: "users",
        title: "Experimental Design",
        subtitle: "Within-subject study",
        description:
          "Prepared a counterbalanced study comparing different feedback combinations for motor learning and patient-centred training.",
      },
    ],

    why: [
      "Connect technical motor-skill feedback with patient communication practice.",
      "Evaluate whether multisensory feedback can improve training awareness.",
      "Explore how social robots may support empathy-oriented medical education.",
    ],
  },

  participants: {
    title: "Who I worked with",
    intro:
      "The target users are physiotherapy learners who need to practice both physical assessment technique and patient-centred communication.",

      groups: [
        {
          emoji: "🧑‍⚕️",
          title: "2 Physiotherapy Experts",
          description:
          "Two senior physiotherapy educators, each with over 18 years of clinical experience and more than 15 years of teaching experience, collaborated throughout the project to validate techniques, refine interaction design, and ensure clinical relevance.",
        },
        {
          emoji: "💻",
          title: "Technical Supervisor",
          description:
            "Provided focused guidance on technical system integration, and the implementation of the interactive training environment.",
        },
        {
          emoji: "🤝",
          title: "Research Supervisor",
          description:
            "Supported the visualisation, mixed reality feedback, broader research direction, interdisciplinary collaboration, study design, physiotherapy integration, and coordination across the project.",
        },
      ],
    
    rationale:
      "These groups reflect the learning ecosystem of physiotherapy education: students, instructors, simulated patients, and technology-mediated training environments.",
  },

  insights: [
    {
      title: "Empirical Contribution",
  
      evidence: [
        "Examines how preview guidance and multimodal feedback influence cognitive load, task clarity, and user engagement.",
        "Compares visual feedback, embodied robot feedback, and combined feedback conditions in an MR physiotherapy training context.",
      ],
  
      interpretation:
        "The study provides evidence on how different feedback modalities shape learner perception and performance in early-stage XR training systems.",
  
      designOpportunity:
        "Use empirical comparison to identify when visual guidance, robotic cues, or combined feedback are most useful for learning.",
    },
  
    {
      title: "Theoretical Contribution",
  
      evidence: [
        "Positions preview guidance, real-time visualisation, and embodied robotic feedback as complementary forms of instructional support.",
        "Frames MR learning as a combination of spatial perception, embodied action, and affective feedback.",
      ],
  
      interpretation:
        "The project proposes a conceptual understanding of how multisensory feedback may shape perception, attention, and learning in MR environments.",
  
      designOpportunity:
        "Use this framing to reason about how different feedback types support different stages of learning.",
    },
  
    {
      title: "Methodological Contribution",
  
      evidence: [
        "Combines workload metrics, structured questionnaires, qualitative reflection, and interaction logs.",
        "Designed for early-stage evaluation of XR learning systems where both usability and learning experience matter.",
      ],
  
      interpretation:
        "The evaluation framework captures not only whether the system works, but how learners experience, interpret, and respond to feedback.",
  
      designOpportunity:
        "Apply mixed-method evaluation to study cognitive load, engagement, perceived clarity, and learning value together.",
    },
  
    {
      title: "Artefact Contribution",
  
      evidence: [
        "Integrates Mixed Reality using Unity and Meta Quest 3.",
        "Uses ESP32-based real-time pressure sensing to capture physical interaction.",
        "Connects Furhat social robot feedback to the MR training experience.",
      ],
  
      interpretation:
        "The system contributes a novel integrated platform that combines sensing, MR visualisation, and social robotics for healthcare training.",
  
      designOpportunity:
        "Use the platform as a testbed for studying multimodal feedback and affective simulation in medical education.",
    },
  
    {
      title: "Design Insight Contribution",
  
      evidence: [
        "Identifies when preview guidance may support preparation before action.",
        "Shows how real-time visualisation can support correction during action.",
        "Explores how social cues may influence engagement and patient-centred awareness.",
      ],
  
      interpretation:
        "The project produces actionable guidance for designing immersive healthcare training systems that balance technical skill feedback with affective learning cues.",
  
      designOpportunity:
        "Translate findings into design guidelines for preview guidance, real-time feedback, and embodied social cues in MR learning.",
    },
  ],
  designStrategy: [
    {
      insight: "Students need real-time awareness of applied pressure.",
      principle:
        "Feedback should be visible at the moment of physical interaction.",
      feature: "Pressure Heatmap Overlay",
    },
    {
      insight: "Expert technique is hard to reproduce from instruction alone.",
      principle:
        "Expert motion should be spatially embedded into the learning environment.",
      feature: "Ghost-hand Guidance",
    },
    {
      insight: "Patient response is missing from many simulator-based tasks.",
      principle:
        "Training should include affective and communicative feedback.",
      feature: "Furhat Simulated Patient",
    },
  ],

  designDecision: {
    alternatives: [
      {
        title: "Screen-based Feedback",
        reason:
          "Separated feedback from the physical action and increased attention switching.",
      },
      {
        title: "Pure VR Simulation",
        reason:
          "Reduced connection to the tactile physical simulator and real hand interaction.",
      },
      {
        title: "Instructor-only Feedback",
        reason:
          "Useful but difficult to scale and not always available during independent practice.",
      },
    ],

    chosen: [
      {
        title: "Mixed Reality Overlay",
        reason:
          "Keeps feedback spatially aligned with the physical lumbar simulator.",
      },
      {
        title: "Pressure + Robot Feedback",
        reason:
          "Supports both motor learning and patient-centred awareness.",
      },
    ],

    tradeoffs: [
      "Requires headset familiarity and careful calibration.",
      "Hardware integration adds technical complexity.",
      "Robot responses must be designed carefully to avoid distraction.",
    ],
  },

  journeyMeta: {
    eyebrow: "Research Workflow",
    title: "From Requirements to Experimental Study",
    description:
      "The project followed an iterative research and development process where technical implementation, expert consultation, and validation informed the final experimental setup.",
    type: "workflow",
  },
  
  journey: [
    {
      stage: "Requirements",
      action: "Understand learning needs and define system requirements.",
      outcome: "Research questions and system specifications",
    },
    {
      stage: "System Design",
      action: "Design the MR architecture, sensing pipeline, and feedback mechanisms.",
      outcome: "Technical system architecture",
    },
    {
      stage: "Prototyping",
      action: "Develop and integrate MR, pressure sensing, and robot components.",
      outcome: "Working multimodal prototype",
    },
    {
      stage: "Expert Validation",
      action: "Consult physiotherapy experts and refine the system.",
      outcome: "Iterative system improvements",
    },
    {
      stage: "User Study",
      action: "Conduct experimental evaluation with participants.",
      outcome: "Empirical findings",
    },
  ],
  solution: {
    intro:
      "The final prototype integrates a tangible lumbar simulator, custom pressure sensing hardware, mixed reality visualisation, expert motion guidance, and an embodied social robot into a unified physiotherapy training platform. Beyond interface design, the project required the development of real-time sensing, signal processing, and multimodal system integration pipelines.",
  
    phases: [
      {
        title: "System Architecture",
        subtitle: "Integrated MR Training Platform",
  
        description:
          "The system connects the physical simulator, ESP32 sensor controller, Unity-based mixed reality application, expert motion capture, and Furhat social robot into a real-time interactive training environment.",
  
        items: [
          {
            type: "system-diagram",
            title: "Hardware & Software Pipeline",
          },
        ],
      },
  
      {
        title: "Pressure Sensing Pipeline",
        subtitle: "Calibration & Real-time Signal Processing",
  
        description:
          "A custom 11×9 pressure sensing matrix captures touch distribution across the lumbar model. Before each session, sensor values are calibrated to establish a stable baseline, while initialization spikes during the first few seconds are discarded. The remaining pressure values are normalised and streamed in real time to generate a stable heatmap within the MR environment.",
  
        items: [
          {

            type: "image-landscape",
            title: "Pressure Sensor Matrix",
            image: sensorMatrix
          }
        ],
      },
  
      {
        title: "Expert Motion Guidance",
        subtitle: "Ghost-hand Demonstration",
  
        description:
          "Expert physiotherapy techniques were captured using Manus Quantum gloves and OptiTrack motion tracking. These recordings were replayed as ghost-hand guidance within mixed reality, allowing learners to observe expert movement directly overlaid on the physical simulator.",
  
        items: [
          {
            
                type: "image-landscape",
                title: "Real-time Heatmap",
                image: heatmap
              
           
            
          },
        ],
      },
  
      {
        title: "Robot Patient Simulation",
        subtitle: "Embodied Feedback",
  
        description:
          "A Furhat social robot was integrated as a simulated patient capable of delivering verbal, facial, and behavioural responses based on learner interaction. This extends training beyond technical accuracy by incorporating patient-centred communication and affective feedback.",
  
        items: [
          {
            // type: "image",
            // title: "Furhat Patient Responses",
            // image: "/projects/xr-physiotherapy/furhat.png",
          },
        ],
      },
    ],
  },
  
  expectedImpact: [
    {
      icon: "target",
      title: "Improve Motor Skill Awareness",
      description:
        "Help students understand applied pressure, hand placement, and force distribution more clearly.",
    },
    {
      icon: "heart",
      title: "Support Patient-centred Training",
      description:
        "Encourage students to consider patient comfort and communication during manual assessment.",
    },
    {
      icon: "layers",
      title: "Advance MR Medical Education",
      description:
        "Explore how mixed reality, tangible sensing, and social robots can be combined in healthcare training.",
    },
  ],

  validation: {
    eyebrow: "Evaluation",
    title: "Experimental Study",
    icon: "flask",
    intro:
      "The integrated mixed reality training system was evaluated through a controlled experimental study to investigate how different guidance and feedback modalities influence learners' experience during physiotherapy training. The evaluation combined quantitative and qualitative methods to capture both measurable outcomes and participant perspectives.",
    activities: [  
      {
        title: "Experimental Design",
        description:
          "A within-subject, task-based experiment using a mixed-method approach. Participants completed identical physiotherapy assessment tasks across four experimental conditions, with condition order counterbalanced using a Latin Square to minimise learning and ordering effects.",
      },
  
      {
        title: "Experimental Variables",
        description:
          "The independent variables were the availability of visual pressure feedback and embodied robot feedback, resulting in four experimental conditions: baseline MR, MR with pressure feedback, MR with robot feedback, and MR with combined multimodal feedback.",
      },
  
      {
        title: "Measurements",
        description:
          "The study evaluated perceived workload, task clarity, and user engagement through post-condition questionnaires, supported by qualitative observations, think-aloud sessions, and interaction logs collected throughout the experiment.",
      },
  
      {
        title: "Research Outcomes",
        description:
          "Following the experiment, participants completed a participatory design activity by sketching their ideal future training system. These concepts consistently highlighted preferences for adaptive feedback, personalised guidance, richer patient interaction, and more responsive multimodal learning environments.",
      },
    ],
  },

  reflection: {
    intro:
      "This project highlighted the challenge of designing training systems that support technical precision without losing sight of human-centred care.",

    quote:
      "In healthcare training, good feedback should not only correct technique — it should also cultivate awareness of the person receiving care.",

    learnings: [
      {
        title: "Feedback Must Be Carefully Balanced",
        description:
          "Multisensory feedback can support learning, but too many signals may increase cognitive load if not designed with restraint.",
      },
      {
        title: "Embodied Learning Matters",
        description:
          "The physical simulator remained important because students learn through touch, movement, and spatial awareness, not only through screens.",
      },
      {
        title: "Patient-centred Design Extends Beyond UI",
        description:
          "The social robot shifted the system from a purely technical trainer into a more relational learning environment.",
      },
      {
        title: "Integration Is Part of the Research",
        description:
          "Building the system revealed that technical feasibility, reliability, and interaction design are deeply connected in MR research.",
      },
    ],
  },
}
];

export default ProjectDetails;