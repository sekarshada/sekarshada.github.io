import {
  CheckCircle2,
  FlaskConical,
  Microscope,
  ClipboardList,
} from "lucide-react";

const icons = {
  check: CheckCircle2,
  flask: FlaskConical,
  microscope: Microscope,
  clipboard: ClipboardList,
};

export default function SectionValidation({ project }) {
  const Icon = icons[project.validation.icon] || CheckCircle2;

  return (
    <section className="px-8 md:px-20 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <p
          className="uppercase tracking-[0.2em] text-sm mb-3"
          style={{ color: project.theme.primary }}
        >
          {project.validation.eyebrow || "Next Phase"}
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-3xl font-semibold mb-6">
          {project.validation.title || "Validation Plan"}
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
                hover:-translate-y-0.5
                hover:border-white/20
              "
              style={{
                borderColor: project.theme.primarySoft,
                boxShadow: `0 0 40px ${project.theme.glow}`,
              }}
            >
              <div className="flex gap-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: project.theme.primarySoft,
                  }}
                >
                  <Icon
                    size={24}
                    style={{
                      color: project.theme.primary,
                    }}
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold leading-snug">
                    {activity.title}
                  </h3>

                  <p className="text-gray-400 leading-7 text-[15px]">
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