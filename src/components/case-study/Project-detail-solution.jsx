import SystemArchitectureDiagram from "./SystemArchitectureDiagram";

export default function SectionSolution({ project }) {
  return (
    <section className="px-8 md:px-20 ">
      <div className="max-w-7xl mx-auto">
        <p
          className="uppercase tracking-[0.2em] text-sm mb-3"
          style={{ color: project.theme.primary }}
        >
          Design Solution
        </p>

        <h2 className="text-3xl font-semibold mb-6">
          From Ideas to Final Experience
        </h2>

        <p className="text-gray-400  mb-24">{project.solution.intro}</p>

        {project.solution.phases.map((phase, index) => (
          <section key={index} className="">
            <div className="mb-10">
              <p
                className="uppercase text-sm tracking-widest mb-2"
                style={{ color: project.theme.primary }}
              >
                {phase.subtitle}
              </p>

              <h3 className="text-3xl font-semibold mb-4">{phase.title}</h3>

              <p className="text-gray-400 max-w-3xl">{phase.description}</p>
            </div>

            <div
              className={`w-3/4 grid gap-8 mb-6 ${
                phase.items.length === 1
                  ? "grid-cols-1"
                  : phase.items.length === 4
                  ? "md:grid-cols-4"
                  : "md:grid-cols-3"
              }`}
            >
            
              {phase.items?.map((item, i) => {
                // Skip completely empty objects
                if (!item || Object.keys(item).length === 0) return null;

                // Custom HTML diagram
                if (item.type === "system-diagram") {
                  return (
                    <SystemArchitectureDiagram key={i} theme={project.theme} />
                  );
                }

                if (item.type === "image-landscape") {
                  return (
                    <div
                      key={i}
                      className="rounded-3xl overflow-hidden border bg-white/[0.03]"
                      style={{
                        borderColor: project.theme.primarySoft,
                      }}
                    >
                      <div className="bg-black/40 p-6">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="
                            w-3/4
                            h-auto
                            rounded-xl
                            object-contain
                          "
                        />
                      </div>
                
                      {item.title && (
                        <div className="px-6 pb-6">
                          <h4 className="text-xl font-semibold">
                            {item.title}
                          </h4>
                        </div>
                      )}
                    </div>
                  );
                }

                if (!item.image) return null;

                // Normal image card
                if (item.image) {
                  return (
                    <div
                      key={i}
                      className="
                      flex
                      flex-col
                      overflow-hidden
                      rounded-3xl
                      border
                      bg-white/[0.03]
                    "
                      style={{
                        borderColor: project.theme.primarySoft,
                      }}
                    >
                      {/* Fixed image area */}
                      <div className="h-[420px] w-full bg-black/40 p-4 flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.title || "Project visual"}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Title */}
                      {item.title && (
                        <div className="border-t border-white/10 p-6">
                          <h4 className="text-xl md:text-xl font-semibold">
                            {item.title}
                          </h4>
                        </div>
                      )}
                    </div>
                  );
                }

                // Card without image (optional)
                return (
                  <div
                    key={i}
                    className="rounded-3xl border bg-white/[0.03] p-8"
                    style={{
                      borderColor: project.theme.primarySoft,
                    }}
                  >
                    {item.title && (
                      <h4 className="text-xl font-semibold mb-4">
                        {item.title}
                      </h4>
                    )}

                    {item.description && (
                      <p className="text-gray-400 leading-7">
                        {item.description}
                      </p>
                    )}
                  </div>
                );
              })}
              
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
