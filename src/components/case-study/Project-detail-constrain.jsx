export default function SectionConstraints({ project }) {
    return (
      <section className="px-8 md:px-20 py-10">
        <div className="max-w-7xl mx-auto">
  
          <p
            className="uppercase tracking-[0.2em] text-sm mb-3"
            style={{ color: project.theme.primary }}
          >
            Real World Considerations
          </p>
  
          <h2 className="text-4xl md:text-5xl font-semibold mb-16">
            Constraints & Challenges
          </h2>
  
          <div className="grid lg:grid-cols-2 gap-8">
  
            {/* Constraints */}
  
            <div
              className="rounded-3xl border bg-white/[0.04] backdrop-blur-xl p-10"
              style={{
                borderColor: project.theme.primarySoft,
                boxShadow: `0 0 40px ${project.theme.glow}`,
              }}
            >
              <h3
                className="text-2xl font-semibold mb-8"
                style={{ color: project.theme.primary }}
              >
                Project Constraints
              </h3>
  
              <div className="space-y-5">
                {project.constraints.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div
                      className="w-3 h-3 rounded-full mt-2"
                      style={{ background: project.theme.primary }}
                    />
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Risks */}
  
            <div className="rounded-3xl border border-red-400/20 bg-white/[0.04] backdrop-blur-xl p-10">
  
              <h3 className="text-2xl font-semibold text-red-400 mb-8">
                Potential Risks
              </h3>
  
              <div className="space-y-5">
                {project.designDecision.tradeoffs.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-3 h-3 rounded-full bg-red-400 mt-2" />
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }