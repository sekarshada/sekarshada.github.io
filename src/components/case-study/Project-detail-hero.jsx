export default function SectionHeader({ project }) {
  return (
    <section className="px-8 md:px-20 pt-36">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT */}
        <div>
          <p
            className="uppercase tracking-[0.2em] text-sm mb-4"
            style={{ color: project.theme.primary }}
          >
            {project.hero.type}
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-8">
            {project.hero.title}
          </h1>
          <a
            href="https://www.figma.com/proto/OfwBsPOCkLJH81ClxXtNCc/Design-Concept?page-id=2%3A2&node-id=194-463&p=f&viewport=-9059%2C314%2C0.36&t=m8Zxv58bNMC4iHKc-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=194%3A463" target="_blank"
            className="px-6 py-3 rounded-full mb-6 bg-lime-300 text-black font-semibold hover:scale-105 transition"
          >
            Figma Prototype
          </a>
          <p className="text-xl text-gray-400 mt-6 leading-relaxed max-w-2xl mb-12">
            {project.hero.description}
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {project.hero.impact.map((impact, index) => (
              <div
                key={index}
                className="rounded-2xl border p-5 bg-white/[0.04] backdrop-blur-xl group flex items-center gap-4"
                style={{
                  borderColor: project.theme.primarySoft,
                  boxShadow: `0 0 30px ${project.theme.glow}`,
                }}
              >
                <p
                  className="font-medium text-xl"
                  style={{ color: project.theme.primary }}
                >
                  ✓
                </p>

                <p className="text-sm mt-3 text-gray-300">{impact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <img
            src={project.hero.image}
            alt={project.hero.title}
            className="rounded-[20px]  w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
