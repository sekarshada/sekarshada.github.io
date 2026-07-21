function DiagramCard({ title, subtitle, theme, className = "" }) {
    return (
      <div
        className={`relative rounded-xl border bg-white/[0.05] px-3 py-3 text-center backdrop-blur-xl ${className}`}
        style={{
          borderColor: theme.primarySoft,
          boxShadow: `0 0 24px ${theme.glow}`,
        }}
      >
        <h4 className="font-semibold text-white">{title}</h4>
  
        {subtitle && (
          <p className="mt-1 text-xs leading-5 text-gray-400">
            {subtitle}
          </p>
        )}
      </div>
    );
  }
  
  function VerticalConnector({ theme, height = "h-5" }) {
    return (
      <div className={`mx-auto w-px ${height}`} style={{ background: theme.primarySoft }} />
    );
  }
  
  export default function SystemArchitectureDiagram({ theme }) {
    return (
      <div
        // className="rounded-[32px] border bg-white/[0.025] p-6 md:p-10 overflow-x-auto"
        // style={{
        //   borderColor: theme.primarySoft,
        //   boxShadow: `0 0 40px ${theme.glow}`,
        // }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Trainee */}
          <div className="mx-auto max-w-xs">
            <DiagramCard
              title="Physiotherapy Trainee"
              subtitle="Performs lumbar mobilisation training"
              theme={theme}
            />
          </div>
  
          <VerticalConnector theme={theme} />
  
          {/* Headset */}
          <div className="mx-auto max-w-xs">
            <DiagramCard
              title="Meta Quest 3"
              subtitle="Mixed Reality training interface"
              theme={theme}
            />
          </div>
  
          <VerticalConnector theme={theme} height="h-6" />
  
          {/* Feedback layer */}
          <div className="relative">
            <div
              className="absolute left-[16.66%] right-[16.66%] top-0 h-px"
              style={{ background: theme.primarySoft }}
            />
  
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="relative">
                <div
                  className="absolute left-1/2 top-[-32px] h-8 w-px -translate-x-1/2"
                  style={{ background: theme.primarySoft }}
                />
  
                <DiagramCard
                  title="Ghost Hand"
                  subtitle="Feedforward expert guidance"
                  theme={theme}
                />
              </div>
  
              <div className="relative">
                <div
                  className="absolute left-1/2 top-[-32px] h-8 w-px -translate-x-1/2"
                  style={{ background: theme.primarySoft }}
                />
  
                <DiagramCard
                  title="Pressure Visualisation"
                  subtitle="Heatmap, bone deformation, and force-time feedback"
                  theme={theme}
                />
              </div>
  
              <div className="relative">
                <div
                  className="absolute left-1/2 top-[-32px] h-8 w-px -translate-x-1/2"
                  style={{ background: theme.primarySoft }}
                />
  
                <DiagramCard
                  title="Robot Feedback"
                  subtitle="Furhat verbal and affective responses"
                  theme={theme}
                />
              </div>
            </div>
          </div>
  
          {/* Merge into Unity */}
          <div className="relative">
            <div
              className="absolute left-[16.66%] right-[16.66%] top-8 h-px"
              style={{ background: theme.primarySoft }}
            />
  
            <div className="grid grid-cols-3">
              {[0, 1, 2].map((item) => (
                <div
                  key={item}
                  className="mx-auto h-8 w-px"
                  style={{ background: theme.primarySoft }}
                />
              ))}
            </div>
  
            <VerticalConnector theme={theme} />
          </div>
  
          <div className="mx-auto max-w-sm">
            <DiagramCard
              title="Unity Application"
              subtitle="Coordinates MR content, sensor processing, and multimodal feedback"
              theme={theme}
            />
          </div>
  
          <VerticalConnector theme={theme} height="h-6" />
  
          {/* Hardware / API layer */}
          <div className="relative">
            <div
              className="absolute left-[16.66%] right-[16.66%] top-0 h-px"
              style={{ background: theme.primarySoft }}
            />
  
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="relative">
                <div
                  className="absolute left-1/2 top-[-32px] h-8 w-px -translate-x-1/2"
                  style={{ background: theme.primarySoft }}
                />
  
                <DiagramCard
                  title="Pressure Sensor"
                  subtitle="ESP32 + EeonTex pressure matrix"
                  theme={theme}
                />
              </div>
  
              <div className="relative">
                <div
                  className="absolute left-1/2 top-[-32px] h-8 w-px -translate-x-1/2"
                  style={{ background: theme.primarySoft }}
                />
  
                <DiagramCard
                  title="OptiTrack System"
                  subtitle="Motion capture + Manus gloves"
                  theme={theme}
                />
              </div>
  
              <div className="relative">
                <div
                  className="absolute left-1/2 top-[-32px] h-8 w-px -translate-x-1/2"
                  style={{ background: theme.primarySoft }}
                />
  
                <DiagramCard
                  title="Furhat API"
                  subtitle="Voice, facial expressions, and interaction triggers"
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }