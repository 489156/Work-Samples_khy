import { HeroSection } from "./components/HeroSection";
import { CaseStudy } from "./components/CaseStudy";
import { Navigation } from "./components/Navigation";
import { positioning, coreCompetencies, caseStudies } from "./data/portfolio-data";
import { usePageNavigation } from "../hooks/usePageNavigation";

export default function App() {
  const totalPages = 1 + caseStudies.length; // Hero + case studies
  const { currentPage, navigateToPage } = usePageNavigation(totalPages);

  return (
    <div className="relative">
      {/* Navigation */}
      <Navigation 
        currentPage={currentPage} 
        totalPages={totalPages}
        onNavigate={navigateToPage}
      />

      {/* Hero Section */}
      <div id="page-0">
        <HeroSection positioning={positioning} competencies={coreCompetencies} />
      </div>

      {/* Case Studies */}
      {caseStudies.map((caseStudy, index) => (
        <div key={caseStudy.company + index} id={`page-${index + 1}`}>
          <CaseStudy caseStudy={caseStudy} index={index} />
        </div>
      ))}
    </div>
  );
}