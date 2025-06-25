
import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage?: number;
}

export const usePerformanceMonitor = (componentName: string) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    const startTime = performance.now();
    
    // Measure component render time
    const measureRender = () => {
      const renderTime = performance.now() - startTime;
      
      // Get memory usage if supported
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || undefined;
      
      setMetrics({
        loadTime: startTime,
        renderTime,
        memoryUsage
      });

      // Log performance metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Performance] ${componentName}:`, {
          renderTime: `${renderTime.toFixed(2)}ms`,
          memoryUsage: memoryUsage ? `${(memoryUsage / 1024 / 1024).toFixed(2)}MB` : 'N/A'
        });
      }
    };

    // Use setTimeout to measure after render
    const timeoutId = setTimeout(measureRender, 0);

    return () => clearTimeout(timeoutId);
  }, [componentName]);

  return metrics;
};
