import { CheckCircle2 } from "lucide-react";

export default function SectionValidation({ project }) {
  return (
    <section className="px-8 md:px-20 py-10"> 
      <div className="max-w-7xl mx-auto">

        {/* Section label */}

        <p
          className="uppercase tracking-[0.2em] text-sm mb-3"
          style={{ color: project.theme.primary }}
        >
          Next Phase
        </p>

        {/* Heading */}

        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Validation Plan
        </h2>

        {/* Intro */}

        <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mb-8">
          {project.validation.intro}
        </p>

        {/* Activities */}

        <div className="grid md:grid-cols-2 gap-8">

          {project.validation.activities.map((activity, index) => (

            <div
              key={index}
              className="
                rounded-3xl
                border
                bg-white/[0.04]
                backdrop-blur-xl
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
              "
              style={{
                borderColor: project.theme.primarySoft,
                boxShadow: `0 0 40px ${project.theme.glow}`,
              }}
            >

              <div className="flex gap-6">

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                  style={{
                    background: project.theme.primarySoft,
                  }}
                >
                  <CheckCircle2
                    size={24}
                    style={{
                      color: project.theme.primary,
                    }}
                  />
                </div>

                <div>

                  <h3 className="text-2xl font-semibold mb-3">
                    {activity.title}
                  </h3>

                  <p className="text-gray-400 leading-7">
                    {activity.description}
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