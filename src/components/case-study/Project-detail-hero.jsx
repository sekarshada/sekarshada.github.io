export default function SectionHeader({ project }) {
    return (
      <section className="px-8 md:px-20 pt-36">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
  
          {/* LEFT */}
          <div>
            <p
              className="uppercase tracking-[0.2em] text-sm mb-4"
              style={{ color: project.theme.primary }}
            >
              {project.hero.type}
            </p>
  
            <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-8">
              {project.hero.title}
            </h1>
  
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mb-12">
              {project.hero.description}
            </p>
  
            <div className="grid sm:grid-cols-3 gap-4">
              {project.hero.impact.map((impact, index) => (
                <div
                  key={index}
                  className="rounded-2xl border p-5 bg-white/[0.04] backdrop-blur-xl"
                  style={{
                    borderColor: project.theme.primarySoft,
                    boxShadow: `0 0 30px ${project.theme.glow}`,
                  }}
                >
                  <p
                    className="font-medium text-xl"
                    style={{ color: project.theme.primary }}
                  >
                    ✓
                  </p>
  
                  <p className="text-sm mt-3 text-gray-300">
                    {impact}
                  </p>
                </div>
              ))}
            </div>
          </div>
  
          {/* RIGHT */}
          <div className="relative">
            <img
              src={project.hero.image}
              alt={project.hero.title}
              className="rounded-[20px]  w-full object-cover"
            />
          </div>
  
        </div>
      </section>
    );
  }