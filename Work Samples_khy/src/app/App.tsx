import { useState, useEffect } from "react";
import { HeroSection } from "./components/HeroSection";
import { CaseStudy } from "./components/CaseStudy";
import { Navigation } from "./components/Navigation";
import { positioning, coreCompetencies, caseStudies } from "./data/portfolio-data";

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 1 + caseStudies.length; // Hero + case studies

  // Smooth scroll to page
  const navigateToPage = (pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < totalPages) {
      setCurrentPage(pageIndex);
      const element = document.getElementById(`page-${pageIndex}`);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        navigateToPage(currentPage + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        navigateToPage(currentPage - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, navigateToPage]);

  // Update current page on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const pages = document.querySelectorAll('[id^="page-"]');
      
      pages.forEach((page, index) => {
        const element = page as HTMLElement;
        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;
        
        if (scrollPosition >= top && scrollPosition < bottom) {
          setCurrentPage(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <div key={index} id={`page-${index + 1}`}>
          <CaseStudy caseStudy={caseStudy} index={index} />
        </div>
      ))}
    </div>
  );
}