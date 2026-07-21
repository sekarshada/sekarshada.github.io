import {
    Clock3,
    MapPinned,
    Smile,
    Target,
    Heart,
    Layers,
  } from "lucide-react";
  
  export default function SectionImpact({ project }) {
    const icons = {
      Clock3,
      MapPinned,
      Smile,
      target: Target,
      heart: Heart,
      layers: Layers,
    };
  
    return (
      <section className="px-8 md:px-20 py-2">
        <div className="max-w-7xl mx-auto">
  
          <p
            className="uppercase tracking-[0.2em] text-sm mb-3"
            style={{ color: project.theme.primary }}
          >
            Expected Outcome
          </p>
  
          <h2 className="text-4xl md:text-3xl font-semibold mb-16">
            Expected Impact
          </h2>
  
          <div className="grid md:grid-cols-3 gap-8">
  
            {project.expectedImpact.map((item, index) => {
  
              const Icon = icons[item.icon];
  
              return (
  
                <div
                  key={index}
                  className="
                  rounded-3xl
                  border
                  bg-white/[0.04]
                  backdrop-blur-xl
                  p-8
                  "
                  style={{
                    borderColor: project.theme.primarySoft,
                    boxShadow: `0 0 40px ${project.theme.glow}`,
                  }}
                >
  
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background: project.theme.primarySoft,
                    }}
                  >
                    <Icon
                      size={28}
                      style={{
                        color: project.theme.primary,
                      }}
                    />
                  </div>
  
                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>
  
                  <p className="text-gray-400 leading-7">
                    {item.description}
                  </p>
  
                </div>
  
              );
            })}
          </div>
        </div>
      </section>
    );
  }