export default function SectionDesignDecision({ project }) {
  return (
    <section className="px-8 md:px-20">
      <div className="max-w-7xl mx-auto">
        <p
          className="uppercase tracking-[0.2em] text-sm mb-3"
          style={{ color: project.theme.primary }}
        >
          Design Decisions
        </p>

        <h2 className="text-4xl md:text-3xl font-semibold mb-6">
          Why This Solution?
        </h2>

        <p className="text-gray-400 text-lg max-w-4xl mb-16">
          Multiple concepts were explored before selecting the final direction.
          Each option was evaluated against user needs, environmental
          constraints, and long-term scalability.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Alternatives */}

          <div>
            <h3 className="text-xl font-semibold text-red-400 mb-8">
              Alternatives Considered
            </h3>

            <div className="space-y-6">
              {project.designDecision.alternatives.map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border bg-white/[0.04] backdrop-blur-xl p-8"
                  style={{
                    borderColor: "rgba(255,80,80,.2)",
                  }}
                >
                  <h4 className="font-semibold text-lg mb-3">{item.title}</h4>

                  <p className="text-gray-400">{item.reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Chosen */}

          <div>
            <h3
              className="text-xl font-semibold mb-8"
              style={{
                color: project.theme.primary,
              }}
            >
              Final Direction
            </h3>

            <div className="space-y-6">
              {project.designDecision.chosen.map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border bg-white/[0.04] backdrop-blur-xl p-8"
                  style={{
                    borderColor: project.theme.primarySoft,
                    boxShadow: `0 0 40px ${project.theme.glow}`,
                  }}
                >
                  <h4
                    className="text-lg font-semibold mb-3"
                    style={{
                      color: project.theme.primary,
                    }}
                  >
                    {item.title}
                  </h4>

                  <p className="text-gray-400">{item.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tradeoff */}

        <div
          className="mt-16 rounded-3xl border bg-white/[0.04] p-5"
          style={{
            borderColor: project.theme.primarySoft,
          }}
        >
          <h3 className="text-xl font-semibold mb-8">Trade-offs</h3>

          <div className="grid md:grid-cols-3">
            {project.designDecision.tradeoffs.map((item, index) => (
              <div className="flex items-start gap-4" key={index}>
                <div
                  className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                  style={{
                    background: project.theme.primary,
                  }}
                />

                <p className="text-gray-400 leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
