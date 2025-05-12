import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to preload components for next routes
 * This helps make transitions smoother by starting to load
 * components before the user navigates to them
 */
const useRoutePreloader = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Preload components when the user hovers over links
    const preloadOnHover = () => {
      const links = document.querySelectorAll('a[href]');
      
      links.forEach(link => {
        const href = link.getAttribute('href');
        
        // Only preload internal links (not external URLs)
        if (href && href.startsWith('/') && !href.startsWith(location.pathname)) {
          
          link.addEventListener('mouseenter', () => {
            // Use a tiny timeout to avoid unnecessary preloads for quick mouse movements
            const timer = setTimeout(() => {
              // This will trigger webpack to load the chunk for this route
              const componentName = href === '/' ? 'Home' : href.substring(1).charAt(0).toUpperCase() + href.substring(2);
              // Add vite-ignore to suppress the dynamic import warning
              import(/* @vite-ignore */ /* webpackPrefetch: true */ `./${componentName}`)
                .catch(() => {
                  // Silently fail if the route doesn't exist or can't be loaded
                  // This is expected for some paths
                });
            }, 100);
            
            link.addEventListener('mouseleave', () => {
              clearTimeout(timer);
            }, { once: true });
          });
        }
      });
    };
    
    preloadOnHover();
    
    // Clean up event listeners on route change
    return () => {
      const links = document.querySelectorAll('a[href]');
      links.forEach(link => {
        link.removeEventListener('mouseenter', () => {});
      });
    };
  }, [location]);
};

export default useRoutePreloader; 