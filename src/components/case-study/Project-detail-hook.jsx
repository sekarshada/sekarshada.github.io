export default function SectionHook({ project }) {
    return (
    <div>
      <section className="px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <p
            className="uppercase tracking-[0.2em] text-sm mb-3"
            style={{ color: project.theme.primary }}
          >
            Problem Space
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Expectation vs Reality
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-16">
            {project.hook.intro}
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* ================= EXPECTATION ================= */}

            <div
              className="
          group
          rounded-3xl
          border
          bg-white/[0.04]
          backdrop-blur-xl
          p-10
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
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 text-2xl font-bold"
                style={{
                  background: project.theme.primarySoft,
                  color: project.theme.primary,
                }}
              >
                ✓
              </div>

              <h3
                className="text-2xl font-semibold mb-8"
                style={{ color: project.theme.primary }}
              >
                Expectation
              </h3>

              <div className="space-y-6">
                {project.hook.expectation.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className="w-2 h-2 rounded-full mt-3 shrink-0"
                      style={{
                        background: project.theme.primary,
                      }}
                    />

                    <p className="text-gray-300 leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= REALITY ================= */}

            <div
              className="
          group
          rounded-3xl
          border
          bg-white/[0.04]
          backdrop-blur-xl
          p-10
          transition-all
          duration-500
          hover:-translate-y-2
          hover:bg-white/[0.06]
        "
              style={{
                borderColor: "rgba(239,68,68,0.25)",
                boxShadow: "0 0 40px rgba(239,68,68,0.15)",
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 text-2xl font-bold"
                style={{
                  background: "rgba(239,68,68,0.12)",
                  color: "#ef4444",
                }}
              >
                ✕
              </div>

              <h3 className="text-2xl font-semibold text-red-400 mb-8">
                Reality
              </h3>

              <div className="space-y-6">
                {project.hook.reality.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-3 shrink-0" />

                    <p className="text-gray-300 leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
<section className="px-8 md:px-20 py-32">

<div className="max-w-7xl mx-auto">

  {/* Section Label */}
  <p
    className="uppercase tracking-[0.2em] text-sm mb-3"
    style={{ color: project.theme.primary }}
  >
    Research Findings
  </p>

  {/* Heading */}
  <h2 className="text-4xl md:text-5xl font-semibold mb-6">
    A Look Into the Data
  </h2>

  {/* Intro */}
  <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-16">
    {project.data.intro}
  </p>

  <div className="grid lg:grid-cols-2 gap-10">

    {/* ================= LEFT : KEY FINDINGS ================= */}

    <div>

      <h3
        className="text-2xl font-semibold mb-8"
        style={{ color: project.theme.primary }}
      >
        Key Findings
      </h3>

      <div className="space-y-6">

        {project.data.stats.map((stat, index) => (

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

            <div className="flex items-center gap-6">

              {/* Metric */}

              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0"
                style={{
                  background: project.theme.primarySoft,
                }}
              >
                <span
                  className="text-2xl font-bold"
                  style={{
                    color: project.theme.primary,
                  }}
                >
                  {stat.value}
                </span>
              </div>

              {/* Text */}

              <div>

                <h4 className="text-2xl font-semibold">
                  {stat.title}
                </h4>

                <p className="text-gray-400 mt-2 leading-relaxed">
                  {stat.description}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

            {/* ================= RIGHT : USER VOICES ================= */}

            <div>
              <h3
                className="text-2xl font-semibold mb-8"
                style={{ color: project.theme.primary }}
              >
                Voice of Users
              </h3>

              <div className="space-y-6">
                {project.data.quotes.map((quote, index) => (
                  <div
                    key={index}
                    className="
                rounded-3xl
                border
                backdrop-blur-xl
                bg-white/[0.04]
                p-8
              "
                    style={{
                      borderColor: project.theme.primarySoft,
                      boxShadow: `0 0 40px ${project.theme.glow}`,
                    }}
                  >
                    {/* <div className="text-5xl text-white/10x">"</div> */}

                    <p className="italic text-lg text-gray-300 leading-8">
                      {quote}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }