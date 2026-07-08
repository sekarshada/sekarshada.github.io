import { useParams } from "react-router-dom";
import ProjectDetails from "../data/ProjectDetails";
import SectionHeader from "../components/case-study/Project-detail-hero";
import SectionHook from "../components/case-study/Project-detail-hook";
import SectionMethod from "../components/case-study/Project-detail-methodology";
import SectionParticipant from "../components/case-study/Project-detail-participant";
import SectionInsight from "../components/case-study/Project-detail-insight";
import SectionDesignStrategy from "../components/case-study/Project-detail-design-strategy";
import SectionDesignDecision from "./case-study/Project-detail-design-decision";
import SectionJourney from "./case-study/Project-detail-journey";
import SectionSolution from "./case-study/Project-detail-solution";

import { Users, MapPinned, LayoutGrid, CheckCircle2 } from "lucide-react";
import SectionConstraints from "./case-study/Project-detail-constrain";
import SectionImpact from "./case-study/Project-detail-impact";
import SectionValidation from "./case-study/Project-detail-validation";

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = ProjectDetails.find((p) => p.slug === slug);

  if (!project) {
    return <div className="text-white p-20">Project not found</div>;
  }

  const theme = project.theme;

  return (
    <main className="bg-black text-white">
      <SectionHeader project={project} />
      <SectionHook project={project} />
      <SectionMethod project={project} />
      <SectionParticipant project={project} />
      <SectionInsight project={project} />
      <SectionDesignStrategy project={project} />
      <SectionDesignDecision project={project} />
      <SectionJourney project={project} />
      <SectionSolution project={project} />
      <SectionConstraints project={project} />
      <SectionImpact project={project} />
      <SectionValidation project={project} />

    </main>
  );
}
