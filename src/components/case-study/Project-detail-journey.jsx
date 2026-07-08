export default function SectionJourney({ project }) {
    return (
      <section className="px-8 md:px-20 py-8">
  
        <div className="max-w-7xl mx-auto">
  
          <p
            className="uppercase tracking-[0.2em] text-sm mb-3"
            style={{ color: project.theme.primary }}
          >
            User Journey
          </p>
  
          <h2 className="text-4xl font-semibold mb-16">
            Understanding the Experience
          </h2>
  
          <div className="relative">
  
            <div
              className="absolute top-6 left-0 w-full h-[2px]"
              style={{
                background:project.theme.primarySoft
              }}
            />
  
            <div className="grid md:grid-cols-4 gap-8 relative">
  
              {project.journey.map((step,index)=>(
  
                <div key={index}>
  
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-semibold mb-6"
                    style={{
                      background:project.theme.primary,
                      color:"#111"
                    }}
                  >
                    {index+1}
                  </div>
  
                  <h3 className="text-xl font-semibold mb-3">
                    {step.stage}
                  </h3>
  
                  <p className="text-gray-300 mb-4">
                    {step.action}
                  </p>
  
                  <div className="rounded-xl bg-red-500/10 p-4">
  
                    <p className="text-red-300 text-sm">
                      {step.painPoint}
                    </p>
  
                  </div>
  
                </div>
  
              ))}
  
            </div>
  
          </div>
  
        </div>
  
      </section>
    )
  }