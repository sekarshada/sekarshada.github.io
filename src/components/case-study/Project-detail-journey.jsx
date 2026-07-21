export default function SectionJourney({ project }) {
  if (!project.journey) return null;

  const meta = project.journeyMeta || {
    eyebrow: "User Journey",
    title: "Understanding the Experience",
    description: "",
    type: "journey",
  };

  const isWorkflow = meta.type === "workflow";

  return (
    <section className="px-8 md:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        <p
          className="uppercase tracking-[0.2em] text-sm mb-3"
          style={{ color: project.theme.primary }}
        >
          {meta.eyebrow}
        </p>

        <h2 className="text-4xl md:text-3xl font-semibold mb-6">
          {meta.title}
        </h2>

        {meta.description && (
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-16">
            {meta.description}
          </p>
        )}

        <div className="relative">
          <div
            className="hidden md:block absolute top-6 left-0 w-full h-[2px]"
            style={{ background: project.theme.primarySoft }}
          />

          <div
            className={`grid gap-8 relative ${
              isWorkflow ? "md:grid-cols-5" : "md:grid-cols-4"
            }`}
          >
            {project.journey.map((step, index) => (
              <div
                key={index}
                className="rounded-3xl border bg-white/[0.04] backdrop-blur-xl p-6"
                style={{
                  borderColor: project.theme.primarySoft,
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-semibold mb-6"
                  style={{
                    background: project.theme.primary,
                    color: "#111",
                  }}
                >
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {step.stage}
                </h3>

                <p className="text-gray-300 mb-4 leading-7">
                  {step.action}
                </p>

                <div
                  className={`rounded-xl p-4 ${
                    isWorkflow ? "bg-white/[0.05]" : "bg-red-500/10"
                  }`}
                >
                  <p
                    className={`text-sm ${
                      isWorkflow ? "text-gray-400" : "text-red-300"
                    }`}
                  >
                    {isWorkflow ? step.outcome : step.pain}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}