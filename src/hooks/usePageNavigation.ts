import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for managing full-page navigation with keyboard and scroll support
 */
export function usePageNavigation(totalPages: number) {
  const [currentPage, setCurrentPage] = useState(0);

  // Navigate to specific page with smooth scrolling
  const navigateToPage = useCallback((pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < totalPages) {
      setCurrentPage(pageIndex);
      const element = document.getElementById(`page-${pageIndex}`);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [totalPages]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        navigateToPage(currentPage + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        navigateToPage(currentPage - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    currentPage,
    navigateToPage,
  };
}
