import { Users, MapPinned, LayoutGrid, CheckCircle2 } from "lucide-react";

export default function SectionSolution({ project }) {
    return (
      <section className="px-8 md:px-20 py-10">
  
        <div className="max-w-7xl mx-auto">
  
          <p
            className="uppercase tracking-[0.2em] text-sm mb-3"
            style={{ color: project.theme.primary }}
          >
            Final Solution
          </p>
  
          <h2 className="text-5xl font-semibold mb-6">
            From Insight to Product
          </h2>
  
          <p className="text-gray-400 text-lg max-w-3xl mb-20">
            {project.solution.intro}
          </p>
  
          <div className="grid lg:grid-cols-2 gap-10">
  
            {project.solution.products.map((item,index)=>(
  
              <div
                key={index}
                className="rounded-[40px] border bg-white/[0.04] backdrop-blur-xl overflow-hidden"
                style={{
                  borderColor:project.theme.primarySoft
                }}
              >
  
                <img
                  src={item.image}
                  className="w-full aspect-[4/3] object-cover"
                />
  
                <div className="p-10">
  
                  <h3
                    className="text-3xl font-semibold mb-4"
                    style={{
                      color:project.theme.primary
                    }}
                  >
                    {item.title}
                  </h3>
  
                  <p className="text-gray-400 mb-8">
                    {item.description}
                  </p>
  
                  <div className="space-y-4">
  
                    {item.features.map((feature,i)=>(
  
                      <div key={i} className="flex gap-3">
  
                        <div
                          className="w-2 h-2 rounded-full mt-3"
                          style={{
                            background:project.theme.primary
                          }}
                        />
  
                        <p>{feature}</p>
  
                      </div>
  
                    ))}
  
                  </div>
  
                </div>
  
              </div>
  
            ))}
  
          </div>
  
        </div>
  
      </section>
    )
  }