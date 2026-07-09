import HomePage from "../assets/Thumbnails wide.png";

export default function Projects() {
    const projects = [
      {
        title: "MarketMate",
        image: HomePage,
        type: "Mobile App",
        href: "market-mate",
        description: "Navigating Complexity in Physical Environments through study case in Queen Victoria Market, Melbourne Australia",
      },
      // {
      //   title: "Fintech Dashboard",
      //   image: "/project2.jpg",
      //   type: "Web",
      //   description: "Designing a scalable financial platform with clarity and trust.",
      // },
    ];
  
    return (
      <section className="bg-black px-8 md:px-20 py-32">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl text-white font-poppins mb-20">
          Selected Projects
        </h2>
  
        <div className="flex flex-col gap-20">
          
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group flex flex-col md:flex-row ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center 
              backdrop-blur-xl bg-white/5 border border-white/10 
              rounded-2xl overflow-hidden 
              hover:bg-white/10 hover:-translate-y-1
              transition duration-300`}
            >
              
              {/* Image */}
              <div className="w-full md:w-1/2 h-[320px] md:h-[420px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover 
                  group-hover:scale-105 transition duration-500"
                />
              </div>
  
              {/* Content */}
              <div className="w-full md:w-1/2 p-10 md:p-14">
                
                <h3 className="text-3xl md:text-4xl text-white font-semibold mb-4">
                  {project.title}
                </h3>
  
                <span className="text-xs text-white/70 bg-white/10 
                px-3 py-1 rounded-full border border-white/20">
                  {project.type}
                </span>
  
                <p className="text-gray-400 mt-6 max-w-md">
                  {project.description}
                </p>
  
                {/* CTA */}
                <div className="mt-8">
                  <a
                    href="/case-study/market-mate"
                    className="px-5 py-2 rounded-full bg-white/10 text-white text-sm font-poppins 
                    backdrop-blur-md border border-white/20 hover:bg-white/20 transition"
                  >
                    View Case Study
                    {/* <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span> */}
                  </a>
                </div>
  
              </div>
  
            </div>
          ))}
  
        </div>
  
      </section>
    );
  }