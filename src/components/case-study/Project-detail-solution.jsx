export default function SectionSolution({ project }) {
  return (
    <section className="px-8 md:px-20">

      <div className="max-w-7xl mx-auto">

        <p
          className="uppercase tracking-[0.2em] text-sm mb-3"
          style={{ color: project.theme.primary }}
        >
          Design Solution
        </p>

        <h2 className="text-5xl font-semibold mb-6">
          From Ideas to Final Experience
        </h2>

        <p className="text-gray-400 max-w-3xl mb-24">
          {project.solution.intro}
        </p>

        {project.solution.phases.map((phase, index) => (

          <section key={index} className="mb-28">

            <div className="mb-10">

              <p
                className="uppercase text-sm tracking-widest mb-2"
                style={{ color: project.theme.primary }}
              >
                {phase.subtitle}
              </p>

              <h3 className="text-3xl font-semibold mb-4">
                {phase.title}
              </h3>

              <p className="text-gray-400 max-w-3xl">
                {phase.description}
              </p>

            </div>

            <div
              className={`w-3/4 grid gap-8 ${
                phase.items.length === 1
                  ? "grid-cols-1"
                  : phase.items.length === 4
                  ? "md:grid-cols-4"
                  : "md:grid-cols-3"
              }`}
            >

              {phase.items.map((item, i) => (

                <div
                  key={i}
                  className="rounded-3xl overflow-hidden border bg-white/[0.03]"
                  style={{
                    borderColor: project.theme.primarySoft,
                  }}
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover"
                  />

                  <div className="p-6">

                    <h4 className="text-xl font-semibold">
                      {item.title}
                    </h4>

                  </div>

                </div>

              ))}

            </div>

          </section>

        ))}

      </div>

    </section>
  );
}