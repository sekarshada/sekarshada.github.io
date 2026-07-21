export default function ProjectDesignStrategy({ project }) {
    return (
      <section className="px-8 md:px-20 py-10">
  
        <div className="max-w-7xl mx-auto">
  
          <p
            className="uppercase tracking-[0.2em] text-sm mb-3"
            style={{ color: project.theme.primary }}
          >
            Design Strategy
          </p>
  
          <h2 className="text-4xl md:text-3xl font-semibold mb-6">
            Translating Insights into Design
          </h2>
  
          <p className="text-gray-400 text-lg mb-20">
            Every design feature was directly derived from a research insight,
            ensuring that solutions addressed genuine user needs rather than
            assumptions.
          </p>
  
          <div className="space-y-10">
  
            {project.designStrategy.map((item, index) => (
  
              <div
                key={index}
                className="
                rounded-3xl
                border
                bg-white/[0.04]
                backdrop-blur-xl
                p-10
              "
                style={{
                  borderColor: project.theme.primarySoft,
                  boxShadow: `0 0 40px ${project.theme.glow}`,
                }}
              >
  
                <div className="grid lg:grid-cols-3 gap-10">
  
                  {/* Insight */}
  
                  <div>
  
                    <p className="uppercase text-sm text-gray-500 mb-3">
                      Insight
                    </p>
  
                    <p className="text-lg font-medium">
                      {item.insight}
                    </p>
  
                  </div>
  
                  {/* Principle */}
  
                  <div>
  
                    <p className="uppercase text-sm text-gray-500 mb-3">
                      Design Principle
                    </p>
  
                    <p className="text-gray-300 leading-7">
                      {item.principle}
                    </p>
  
                  </div>
  
                  {/* Feature */}
  
                  <div>
  
                    <p className="uppercase text-sm text-gray-500 mb-3">
                      Feature
                    </p>
  
                    <p
                      className="text-lg font-semibold"
                      style={{
                        color: project.theme.primary,
                      }}
                    >
                      {item.feature}
                    </p>
  
                  </div>
  
                </div>
  
              </div>
  
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  }