export default function ProjectInsights({ project }) {
  return (
    <section className="px-8 md:px-20 py-10">

      <div className="max-w-7xl mx-auto">

        <p
          className="uppercase tracking-[0.2em] text-sm mb-3"
          style={{ color: project.theme.primary }}
        >
          Research Insights
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Key Insights
        </h2>

        <p className="text-gray-400 text-lg max-w-3xl mb-16">
          We synthesized recurring behavioural patterns into actionable design
          opportunities.
        </p>

        <div className="space-y-10">

          {project.insights.map((insight, index) => (

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

              <h3
                className="text-3xl font-semibold mb-8"
                style={{
                  color: project.theme.primary,
                }}
              >
                {insight.title}
              </h3>

              <div className="grid lg:grid-cols-3 gap-8">

                {/* Evidence */}

                <div>

                  <p className="text-sm uppercase text-gray-500 mb-4">
                    Evidence
                  </p>

                  {insight.quote && (

                    <div className="italic text-gray-300 mb-5">
                      "{insight.quote}"
                    </div>

                  )}

                  <ul className="space-y-3 text-gray-400">

                    {insight.evidence.map((item, i) => (

                      <li key={i}>
                        • {item}
                      </li>

                    ))}

                  </ul>

                </div>

                {/* Interpretation */}

                <div>

                  <p className="text-sm uppercase text-gray-500 mb-4">
                    Interpretation
                  </p>

                  <p className="text-gray-300 leading-7">
                    {insight.interpretation}
                  </p>

                </div>

                {/* Design Opportunity */}

                <div>

                  <p className="text-sm uppercase text-gray-500 mb-4">
                    Design Opportunity
                  </p>

                  <p
                    className="leading-7 font-medium"
                    style={{
                      color: project.theme.primary,
                    }}
                  >
                    {insight.designOpportunity}
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