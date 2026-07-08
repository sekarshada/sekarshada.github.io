export default function SectionHeader({ project }) {
  return (
    <section className="px-8 md:px-20 py-10 text-white">
      <h2 className="text-3xl md:text-4xl mb-10 font-semibold">
        Participant Selection
      </h2>

      <p className="text-gray-400 text-lg  mb-10">
        {project.participants.intro}
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {project.participants.groups.map((participant, index) => (
          <div
            key={index}
            className="
      rounded-3xl
      border
      bg-white/[0.04]
      backdrop-blur-xl
      p-8
      transition-all
      duration-500
      hover:-translate-y-2
    "
            style={{
              borderColor: project.theme.primarySoft,
              boxShadow: `0 0 30px ${project.theme.glow}`,
            }}
          >
            <div className="text-4xl mb-5">{participant.emoji}</div>

            <h3 className="text-2xl font-semibold mb-3">{participant.title}</h3>

            <p className="text-gray-400 leading-7">{participant.description}</p>
          </div>
        ))}
      </div>

      <p className="text-gray-400 text-lg ">{project.participants.rationale}</p>
    </section>
  );
}
