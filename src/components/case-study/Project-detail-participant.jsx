export default function SectionHeader({ project }) {
  return (
    <section className="px-8 md:px-20 py-10 text-white">
      <h2 className="text-3xl md:text-4xl mb-10 font-semibold">
        {project.participants.title}
      </h2>

      <p className="text-gray-400 text-lg  mb-10">
        {project.participants.intro}
      </p>

      <div
        className={`grid ${
          project.participants.groups.length > 3
            ? "md:grid-cols-4"
            : "md:grid-cols-3"
        } gap-6 mb-10`}
      >
        {project.participants.groups.map((participant, index) => (
          <div
            key={index}
            className="
      rounded-3xl
      border
      bg-white/[0.04]
      backdrop-blur-xl
      p-8
    "
            style={{
              borderColor: project.theme.primarySoft,
              boxShadow: `0 0 30px ${project.theme.glow}`,
            }}
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="text-4xl shrink-0">{participant.emoji}</div>

              <h3 className="text-xl font-semibold leading-tight">
                {participant.title}
              </h3>
            </div>

            <p className="text-gray-400 leading-7">{participant.description}</p>
          </div>
        ))}
      </div>

      <p className="text-gray-400 text-lg ">{project.participants.rationale}</p>
    </section>
  );
}
