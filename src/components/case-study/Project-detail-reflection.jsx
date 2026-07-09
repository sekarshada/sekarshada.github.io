import { Shield, Users, Eye, Wifi } from "lucide-react";

export default function SectionReflection({ project }) {
  const icons = [Users, Eye, Shield, Wifi];

  return (
    <section className="px-8 md:px-20">
      <div className="max-w-7xl mx-auto">
        <p
          className="uppercase tracking-[0.2em] text-sm mb-3"
          style={{ color: project.theme.primary }}
        >
          Design Reflections
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Designing Responsibly
        </h2>

        <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mb-14">
          {project.reflection.intro}
        </p>

        <div
          className="rounded-[40px] border p-10 md:p-14 mb-12 bg-white/[0.04]"
          style={{
            borderColor: project.theme.primarySoft,
            boxShadow: `0 0 40px ${project.theme.glow}`,
          }}
        >
          <p className="text-2xl md:text-4xl leading-tight font-semibold text-white">
            “{project.reflection.quote}”
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {project.reflection.learnings.map((item, index) => {
            const Icon = icons[index] || Shield;

            return (
              <div
                key={index}
                className="rounded-3xl border bg-white/[0.04] backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2"
                style={{
                  borderColor: project.theme.primarySoft,
                  boxShadow: `0 0 40px ${project.theme.glow}`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7"
                  style={{ background: project.theme.primarySoft }}
                >
                  <Icon size={26} style={{ color: project.theme.primary }} />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
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