import {
    Users,
    MapPinned,
    LayoutGrid,
    CheckCircle2,
  } from "lucide-react";
export default function SectionHeader({ project }) {
    return (
      <section className="px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <p
            className="uppercase tracking-[0.2em] text-sm mb-3"
            style={{ color: project.theme.primary }}
          >
            Research Process
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            How We Approached This
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl leading-relaxed mb-16">
            {project.methods.intro}
          </p>

          {/* ================= METHOD CARDS ================= */}

          <div className="grid md:grid-cols-3 gap-8">
            {project.methods.items.map((item, index) => {
              const Icon =
                item.icon === "users"
                  ? Users
                  : item.icon === "map"
                  ? MapPinned
                  : LayoutGrid;

              return (
                <div
                  key={index}
                  className="
          group
          rounded-3xl
          border
          backdrop-blur-xl
          bg-white/[0.04]
          p-8
          transition-all
          duration-500
          hover:-translate-y-2
          hover:bg-white/[0.06]
          "
                  style={{
                    borderColor: project.theme.primarySoft,
                    boxShadow: `0 0 40px ${project.theme.glow}`,
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
                    style={{
                      background: project.theme.primarySoft,
                    }}
                  >
                    <Icon
                      size={28}
                      style={{
                        color: project.theme.primary,
                      }}
                    />
                  </div>

                  <p
                    className="text-sm mb-2"
                    style={{
                      color: project.theme.primary,
                    }}
                  >
                    {item.subtitle}
                  </p>

                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>

                  <p className="text-gray-400 leading-7">{item.description}</p>
                </div>
              );
            })}
          </div>

          {/* ================= WHY THIS APPROACH ================= */}

          <div
            className="
    mt-16
    rounded-3xl
    border
    backdrop-blur-xl
    bg-white/[0.04]
    p-10
    "
            style={{
              borderColor: project.theme.primarySoft,
              boxShadow: `0 0 40px ${project.theme.glow}`,
            }}
          >
            <h3
              className="text-2xl font-semibold mb-8"
              style={{
                color: project.theme.primary,
              }}
            >
              Why this approach?
            </h3>

            <div className="space-y-6">
              {project.methods.why.map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2
                    size={22}
                    style={{
                      color: project.theme.primary,
                    }}
                    className="mt-1 shrink-0"
                  />

                  <p className="text-gray-300 leading-7">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }